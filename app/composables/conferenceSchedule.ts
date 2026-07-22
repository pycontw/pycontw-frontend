import type { ScheduleApiDay, ScheduleApiSlot } from '~/types/schedule'

const ROOMS: Record<string, RoomMeta> = {
  '4-r0': { label: 'R0', col: 1 },
  '5-r1': { label: 'R1', col: 2 },
  '6-r2': { label: 'R2', col: 3 },
  '1-r3': { label: 'R3', col: 4 },
  '7-r4': { label: 'R4', col: 5 },
  '81-spt-os': { label: 'Sprint / OST', col: 6 },
  '82-tutorial': { label: 'Tutorial', col: 7 },
  '83-yi-ps': { label: 'Young / Poster', col: 8 },
  '2-all': { col: { start: 1, span: 5 } },
}

interface Column { start: number, span: number }

interface RoomMeta {
  label?: string
  col: number | Column
}

interface BaseScheduleSession extends ScheduleApiSlot {
  id: string
  roomId: string
  timeLabel: string
  startMinutes: number
  endMinutes: number
  gridColumnStart: number
  gridColumnSpan: number
}

export interface ScheduleSessionView extends BaseScheduleSession {
  gridRowStart: number
  gridRowSpan: number
}

export interface ScheduleRoomView {
  id: string
  gridColumnStart: number
  gridColumnSpan: number
  label?: string
}

export interface ScheduleTimePoint {
  gridRowStart: number
  label: string
}

export interface ScheduleDayView {
  date: string
  sessions: ScheduleSessionView[]
  rooms: ScheduleRoomView[]
  timePoints: ScheduleTimePoint[]
}

function toBaseSession(slot: ScheduleApiSlot, room: ScheduleRoomView): BaseScheduleSession {
  const startMinutes = getMinuteOfDay(slot.begin_time)
  const endMinutes = getMinuteOfDay(slot.end_time)

  return {
    ...slot,
    id: `${room.id}-${slot.event_id}-${slot.begin_time}`,
    roomId: room.id,
    timeLabel: startMinutes === endMinutes ? formatMinute(startMinutes) : `${formatMinute(startMinutes)} - ${formatMinute(endMinutes)}`,
    startMinutes,
    endMinutes,
    gridColumnStart: room.gridColumnStart,
    gridColumnSpan: room.gridColumnSpan,
  }
}

function normalizeColumn(cols: number | Column): Column {
  return (typeof cols === 'number') ? { start: cols, span: 1 } : cols
}

export function resolveRoomLabel(roomId: string) {
  return ROOMS[roomId]?.label ?? roomId
}

export function normalizeConferenceScheduleDays(day: ScheduleApiDay): ScheduleDayView {
  const rooms: ScheduleRoomView[] = Object.entries(ROOMS).map(([roomId, roomMeta]) => {
    const { start, span } = normalizeColumn(roomMeta.col)
    return {
      id: roomId,
      gridColumnStart: start,
      gridColumnSpan: span,
      label: roomMeta.label,
    }
  })

  const roomColumnMap = new Map(rooms.map(room => [room.id, room]))

  const baseSessions = Object.keys(ROOMS).flatMap(roomId =>
    (day.slots[roomId] ?? []).reduce((curr, slot) => {
      const room = roomColumnMap.get(roomId)
      if (room) {
        curr.push(toBaseSession(slot, room))
      }
      return curr
    }, [] as BaseScheduleSession[]),
  )

  const boundaryMinutes = [...new Set(baseSessions.flatMap(session => [session.startMinutes, session.endMinutes]))]
    .sort((left, right) => left - right)

  const minuteIndexMap = new Map(boundaryMinutes.map((minute, minuteIndex) => [minute, minuteIndex]))
  const sessions = baseSessions
    .map(session => ({
      ...session,
      gridRowStart: (minuteIndexMap.get(session.startMinutes) ?? 0) + 1,
      gridRowSpan: Math.max(
        (minuteIndexMap.get(session.endMinutes) ?? minuteIndexMap.get(session.startMinutes) ?? 0)
        - (minuteIndexMap.get(session.startMinutes) ?? 0),
        1,
      ),
    }))
    .sort((left, right) => {
      if (left.gridRowStart !== right.gridRowStart) {
        return left.gridRowStart - right.gridRowStart
      }

      if (left.gridColumnStart !== right.gridColumnStart) {
        return left.gridColumnStart - right.gridColumnStart
      }

      return right.gridColumnSpan - left.gridColumnSpan
    })

  return {
    date: day.date,
    sessions,
    rooms,
    timePoints: boundaryMinutes.map((minute, minuteIndex) => ({
      gridRowStart: minuteIndex + 1,
      isTerminal: minuteIndex === boundaryMinutes.length - 1,
      label: formatMinute(minute),
    })),
  }
}
