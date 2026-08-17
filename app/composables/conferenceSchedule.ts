import type { ScheduleApiDay, ScheduleApiSlot } from '~/types/schedule'

const ROOMS: Record<string, RoomMeta> = {
  '4-r0': { expId: 'r0', label: 'R0', col: 1 },
  '5-r1': { expId: 'r1', label: 'R1', col: 2 },
  '6-r2': { expId: 'r2', label: 'R2', col: 3 },
  '1-r3': { expId: 'r3', label: 'R3', col: 4 },
  '81-spt-os': { label: { en_us: 'Open Space', zh_hant: '開放空間' }, col: 5 },
  '83-yi-ps': { label: { en_us: 'Poster Session', zh_hant: '海報展' }, col: 6 },
  '3-r0-all': { col: { start: 1, span: 4 } },
  '2-all': { col: { start: 1, span: 4 } },
  // '=custom': { col: [{ start: 1, span: 2 }, 3] },

  // room expressions examples:
  // '=r0~r2': { col: { start: 1, span: 3 } },
  // '=r1,r2': { col: [2, 3] },
  // '=r1,r2~r3': { col: [2, { start: 3, span: 2 }] },
}

interface Column { start: number, span: number }

interface RoomMeta {
  expId?: string
  label?: MaybeLocalizedText
  col: number | Column | (number | Column)[]
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
  placementId: string
  gridColumnStart: number
  gridColumnSpan: number
  label?: MaybeLocalizedText
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
    id: `${room.placementId}-${slot.event_id}-${slot.begin_time}`,
    roomId: room.id,
    timeLabel: startMinutes === endMinutes ? formatMinute(startMinutes) : `${formatMinute(startMinutes)} - ${formatMinute(endMinutes)}`,
    startMinutes,
    endMinutes,
    gridColumnStart: room.gridColumnStart,
    gridColumnSpan: room.gridColumnSpan,
  }
}

function normalizeColumns(cols: RoomMeta['col']): Column[] {
  return (Array.isArray(cols) ? cols : [cols])
    .map(col => (typeof col === 'number') ? { start: col, span: 1 } : col)
}

export function resolveRoomLabel(roomId: string) {
  return ROOMS[roomId]?.label ?? roomId
}

export function normalizeConferenceScheduleDays(day: ScheduleApiDay): ScheduleDayView {
  const roomGroups = Object.entries(ROOMS).map(([roomId, roomMeta]) => {
    const columns = normalizeColumns(roomMeta.col)
    return {
      roomId,
      rooms: columns.map(({ start, span }, columnIndex): ScheduleRoomView => ({
        id: roomId,
        placementId: columns.length === 1 ? roomId : `${roomId}:${columnIndex}`,
        gridColumnStart: start,
        gridColumnSpan: span,
        label: roomMeta.label,
      })),
    }
  })

  const rooms = roomGroups.flatMap(roomGroup => roomGroup.rooms)

  const baseSessions = roomGroups.flatMap(({ roomId, rooms }) =>
    (day.slots[roomId] ?? []).flatMap(slot =>
      rooms.map(room => toBaseSession(slot, room)),
    ),
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
