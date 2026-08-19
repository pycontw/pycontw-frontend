import type { ExpressionRoomMeta } from '../utils/conferenceScheduleRooms.ts'
import type { MaybeLocalizedText } from '../utils/locale.ts'
import type { ScheduleApiDay, ScheduleApiSlot } from '~/types/schedule'
import { resolveRoomColumns } from '../utils/conferenceScheduleRooms.ts'
import { formatMinute, getMinuteOfDay } from '../utils/datetime.ts'

const ROOMS: Record<string, RoomMeta> = {
  '4-r0': { expId: 'r0', label: 'R0', col: 1 },
  '5-r1': { expId: 'r1', label: 'R1', col: 2 },
  '6-r2': { expId: 'r2', label: 'R2', col: 3 },
  '1-r3': { expId: 'r3', label: 'R3', col: 4 },
  '81-spt-os': { expId: 'os', label: { en_us: 'Open Space', zh_hant: '開放空間' }, col: 5 },
  '83-yi-ps': { expId: 'ps', label: { en_us: 'Poster Session', zh_hant: '海報展' }, col: 6 },

  // server pre-defined group
  '3-r0-all': { col: { start: 1, span: 4 } },
  '2-all': { col: { start: 1, span: 4 } },
}

interface RoomMeta extends ExpressionRoomMeta {
  label?: MaybeLocalizedText
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
  minutesToNextPoint: number
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

export function resolveRoomLabel(roomId: string): MaybeLocalizedText {
  return ROOMS[roomId]?.label ?? roomId
}

export function normalizeConferenceScheduleDays(day: ScheduleApiDay): ScheduleDayView {
  const roomIds = new Set([...Object.keys(ROOMS), ...day.rooms, ...Object.keys(day.slots)])
  const roomGroups = [...roomIds].flatMap((roomId) => {
    const columns = resolveRoomColumns(roomId, ROOMS)

    if (!columns) {
      return []
    }

    const roomMeta = ROOMS[roomId]

    return {
      roomId,
      rooms: columns.map(({ start, span }, columnIndex): ScheduleRoomView => ({
        id: roomId,
        placementId: columns.length === 1 ? roomId : `${roomId}:${columnIndex}`,
        gridColumnStart: start,
        gridColumnSpan: span,
        label: roomMeta?.label,
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
      label: formatMinute(minute),
      minutesToNextPoint: Math.max((boundaryMinutes[minuteIndex + 1] ?? minute) - minute, 0),
    })),
  }
}
