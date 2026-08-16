import type { ScheduleApiDay, ScheduleApiSlot } from '~/types/schedule'

const PHYSICAL_ROOMS = [
  { id: '4-r0', label: 'R0' },
  { id: '5-r1', label: 'R1' },
  { id: '6-r2', label: 'R2' },
  { id: '1-r3', label: 'R3' },
  { id: '7-r4', label: 'R4' },
] as const

const SHARED_ROOM_IDS = new Set(['2-all', '3-r0-all'])
const PHYSICAL_ROOM_LABELS = new Map<string, string>(PHYSICAL_ROOMS.map(room => [room.id, room.label]))

interface ColumnSpan {
  start: number
  span: number
  roomIds: string[]
}

interface BaseScheduleSession extends ScheduleApiSlot {
  id: string
  roomIds: string[]
  fragmentRoomIds: string[]
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

function toBaseSession(
  slot: ScheduleApiSlot,
  roomKey: string,
  roomIds: string[],
  fragment: ColumnSpan,
  fragmentIndex: number,
): BaseScheduleSession {
  const startMinutes = getMinuteOfDay(slot.begin_time)
  const endMinutes = getMinuteOfDay(slot.end_time)

  return {
    ...slot,
    id: `${roomKey}-${slot.event_id}-${slot.begin_time}-${fragmentIndex}`,
    roomIds,
    fragmentRoomIds: fragment.roomIds,
    timeLabel: startMinutes === endMinutes ? formatMinute(startMinutes) : `${formatMinute(startMinutes)} - ${formatMinute(endMinutes)}`,
    startMinutes,
    endMinutes,
    gridColumnStart: fragment.start,
    gridColumnSpan: fragment.span,
  }
}

function parseRoomIds(roomKey: string): string[] {
  return roomKey.split(',').map(roomId => roomId.trim()).filter(Boolean)
}

function resolveRoomIds(roomKey: string, activeRoomIds: string[]): string[] {
  if (SHARED_ROOM_IDS.has(roomKey)) {
    return [...activeRoomIds]
  }

  const activeRoomIdSet = new Set(activeRoomIds)
  return [...new Set(parseRoomIds(roomKey).filter(roomId => activeRoomIdSet.has(roomId)))]
}

function getContiguousColumnSpans(
  roomIds: string[],
  roomColumnMap: Map<string, ScheduleRoomView>,
): ColumnSpan[] {
  const selectedRooms = roomIds
    .map(roomId => roomColumnMap.get(roomId))
    .filter((room): room is ScheduleRoomView => Boolean(room))
    .sort((left, right) => left.gridColumnStart - right.gridColumnStart)

  return selectedRooms.reduce((spans, room) => {
    const previousSpan = spans.at(-1)
    if (previousSpan && previousSpan.start + previousSpan.span === room.gridColumnStart) {
      previousSpan.span += 1
      previousSpan.roomIds.push(room.id)
    } else {
      spans.push({ start: room.gridColumnStart, span: 1, roomIds: [room.id] })
    }
    return spans
  }, [] as ColumnSpan[])
}

export function resolveRoomLabel(roomId: string) {
  return parseRoomIds(roomId)
    .map(id => PHYSICAL_ROOM_LABELS.get(id) ?? id)
    .join(', ')
}

export function normalizeConferenceScheduleDays(day: ScheduleApiDay): ScheduleDayView {
  const scheduledRoomIds = Object.keys(day.slots).flatMap(parseRoomIds)
  const availableRoomIdSet = new Set([...day.rooms, ...scheduledRoomIds])
  const activePhysicalRooms = PHYSICAL_ROOMS.filter(room => availableRoomIdSet.has(room.id))
  const activeRoomIds = activePhysicalRooms.map(room => room.id)

  const rooms: ScheduleRoomView[] = activePhysicalRooms.map((room, roomIndex) => ({
    id: room.id,
    gridColumnStart: roomIndex + 1,
    gridColumnSpan: 1,
    label: room.label,
  }))

  const roomColumnMap = new Map(rooms.map(room => [room.id, room]))

  const baseSessions = Object.entries(day.slots).flatMap(([roomKey, slots]) => {
    const roomIds = resolveRoomIds(roomKey, activeRoomIds)
    const fragments = getContiguousColumnSpans(roomIds, roomColumnMap)

    return slots.flatMap(slot => fragments.map((fragment, fragmentIndex) =>
      toBaseSession(slot, roomKey, roomIds, fragment, fragmentIndex),
    ))
  })

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
