import type { ScheduleApiDay, ScheduleApiSlot } from '../app/types/schedule.ts'
import type { ExpressionRoomMeta } from '../app/utils/conferenceScheduleRooms.ts'
import { describe, expect, it } from 'vitest'
import { normalizeConferenceScheduleDays } from '../app/composables/conferenceSchedule.ts'
import { resolveRoomColumns } from '../app/utils/conferenceScheduleRooms.ts'

const rooms = {
  'room-r0': { expId: 'r0', col: 1 },
  'room-r1': { expId: 'r1', col: 2 },
  'room-r2': { expId: 'r2', col: 3 },
  'room-r3': { expId: 'r3', col: 4 },
  'room-r3r5': { expId: 'r3r5', col: [4, 6] },
  'room-r4r6': { expId: 'r4r6', col: [5, 7] },
  'room-without-exp-id': { col: 5 },
  'room-foo': { expId: 'foo', col: 6 },
  'empty-room': { expId: 'empty', col: [] },
  '=foo': { col: [{ start: 1, span: 2 }, 3] },
} satisfies Record<string, ExpressionRoomMeta>

const slot = {
  event_id: 1,
  event_type: 'talk',
  title: 'A session',
  speakers: [],
  begin_time: '2026-08-17T01:00:00Z',
  end_time: '2026-08-17T02:00:00Z',
  recording_policy: true,
  is_remote: false,
  language: 'zh-hant',
  python_level: 'NOVICE',
  break_event: false,
  custom_event: false,
  custom_event_path: '',
} satisfies ScheduleApiSlot

describe('resolveRoomColumns', () => {
  it('resolves a range expression to one spanning column', () => {
    expect(resolveRoomColumns('=r0~r2', rooms)).toEqual([
      { start: 1, span: 3 },
    ])
  })

  it('resolves comma-separated rooms to independent columns', () => {
    expect(resolveRoomColumns('=r1,r2', rooms)).toEqual([
      { start: 2, span: 1 },
      { start: 3, span: 1 },
    ])
  })

  it('resolves mixed room and range expressions', () => {
    expect(resolveRoomColumns('=r1,r2~r3', rooms)).toEqual([
      { start: 2, span: 1 },
      { start: 3, span: 2 },
    ])
  })

  it('resolves expressions whose rooms have multiple columns', () => {
    expect(resolveRoomColumns('=r0,r3r5', rooms)).toEqual([
      { start: 1, span: 1 },
      { start: 4, span: 1 },
      { start: 6, span: 1 },
    ])
    expect(resolveRoomColumns('=r0~r3r5', rooms)).toEqual([
      { start: 1, span: 4 },
      { start: 6, span: 1 },
    ])
    expect(resolveRoomColumns('=r3r5~r4r6', rooms)).toEqual([
      { start: 4, span: 2 },
      { start: 6, span: 2 },
    ])
  })

  it('uses an exact room key before treating it as an expression', () => {
    expect(resolveRoomColumns('=foo', rooms)).toEqual([
      { start: 1, span: 2 },
      { start: 3, span: 1 },
    ])
  })

  it('does not parse a room id without the expression prefix', () => {
    expect(resolveRoomColumns('r0~r2', rooms)).toBeUndefined()
  })

  it('only resolves rooms that define an expId', () => {
    expect(resolveRoomColumns('=r1', rooms)).toEqual([{ start: 2, span: 1 }])
    expect(resolveRoomColumns('=room-r0', rooms)).toBeUndefined()
    expect(resolveRoomColumns('=room-without-exp-id', rooms)).toBeUndefined()
    expect(resolveRoomColumns('=r0,unknown', rooms)).toBeUndefined()
  })

  it('rejects malformed expressions atomically', () => {
    expect(resolveRoomColumns('=', rooms)).toBeUndefined()
    expect(resolveRoomColumns('=r0,', rooms)).toBeUndefined()
    expect(resolveRoomColumns('=r0~~r2', rooms)).toBeUndefined()
  })

  it('rejects expression rooms without a column', () => {
    expect(resolveRoomColumns('=empty,r0', rooms)).toBeUndefined()
    expect(resolveRoomColumns('=empty~r0', rooms)).toBeUndefined()
  })
})

describe('normalizeConferenceScheduleDays', () => {
  it('places slots from a dynamic room expression', () => {
    const roomId = '=r1,r2~r3'
    const day = {
      date: '2026-08-17',
      name: 'Day 1',
      rooms: [roomId],
      slots: { [roomId]: [slot] },
    } satisfies ScheduleApiDay

    const result = normalizeConferenceScheduleDays(day)
    const expressionRooms = result.rooms.filter(room => room.id === roomId)

    expect(expressionRooms.map(room => ({
      placementId: room.placementId,
      start: room.gridColumnStart,
      span: room.gridColumnSpan,
    }))).toEqual([
      { placementId: `${roomId}:0`, start: 2, span: 1 },
      { placementId: `${roomId}:1`, start: 3, span: 2 },
    ])
    expect(result.sessions.map(session => ({
      roomId: session.roomId,
      start: session.gridColumnStart,
      span: session.gridColumnSpan,
    }))).toEqual([
      { roomId, start: 2, span: 1 },
      { roomId, start: 3, span: 2 },
    ])
    expect(new Set(result.sessions.map(session => session.id)).size).toBe(2)
  })

  it('keeps the duration between adjacent schedule boundaries', () => {
    const fiveMinutesLater = {
      ...slot,
      event_id: 2,
      begin_time: '2026-08-17T01:05:00Z',
      end_time: '2026-08-17T02:05:00Z',
    } satisfies ScheduleApiSlot
    const day = {
      date: '2026-08-17',
      name: 'Day 1',
      rooms: ['4-r0', '5-r1'],
      slots: {
        '4-r0': [slot],
        '5-r1': [fiveMinutesLater],
      },
    } satisfies ScheduleApiDay

    const result = normalizeConferenceScheduleDays(day)

    expect(result.timePoints.map(point => ({
      label: point.label,
      minutesToNextPoint: point.minutesToNextPoint,
    }))).toEqual([
      { label: '09:00', minutesToNextPoint: 5 },
      { label: '09:05', minutesToNextPoint: 55 },
      { label: '10:00', minutesToNextPoint: 5 },
      { label: '10:05', minutesToNextPoint: 0 },
    ])
  })
})
