export interface ScheduleColumn {
  start: number
  span: number
}

export type ScheduleColumnInput = number | ScheduleColumn | (number | ScheduleColumn)[]

export interface ExpressionRoomMeta {
  expId?: string
  col: ScheduleColumnInput
}

function normalizeColumns(cols: ScheduleColumnInput): ScheduleColumn[] {
  return (Array.isArray(cols) ? cols : [cols])
    .map(col => typeof col === 'number' ? { start: col, span: 1 } : col)
}

function getExpressionRooms<T extends ExpressionRoomMeta>(rooms: Readonly<Record<string, T>>): Map<string, T> {
  const expressionRooms = new Map<string, T>()

  for (const room of Object.values(rooms)) {
    if (room.expId && !expressionRooms.has(room.expId)) {
      expressionRooms.set(room.expId, room)
    }
  }

  return expressionRooms
}

function resolveRangeColumns(from: ExpressionRoomMeta, to: ExpressionRoomMeta): ScheduleColumn | undefined {
  const fromColumns = normalizeColumns(from.col)
  const toColumns = normalizeColumns(to.col)

  if (fromColumns.length === 0 || toColumns.length === 0) {
    return undefined
  }

  const boundaryColumns = [...fromColumns, ...toColumns]
  const start = Math.min(...boundaryColumns.map(column => column.start))
  const end = Math.max(...boundaryColumns.map(column => column.start + column.span))

  return { start, span: end - start }
}

export function resolveRoomColumns<T extends ExpressionRoomMeta>(
  roomId: string,
  rooms: Readonly<Record<string, T>>,
): ScheduleColumn[] | undefined {
  const room = Object.hasOwn(rooms, roomId) ? rooms[roomId] : undefined

  if (room) {
    return normalizeColumns(room.col)
  }

  if (!roomId.startsWith('=')) {
    return undefined
  }

  const expressionRooms = getExpressionRooms(rooms)
  const columns: ScheduleColumn[] = []

  for (const part of roomId.slice(1).split(',')) {
    const range = part.split('~').map(expId => expId.trim())

    if (range.length === 1) {
      const expressionRoom = expressionRooms.get(range[0] ?? '')

      if (!expressionRoom) {
        return undefined
      }

      const expressionColumns = normalizeColumns(expressionRoom.col)

      if (expressionColumns.length === 0) {
        return undefined
      }

      columns.push(...expressionColumns)
      continue
    }

    if (range.length !== 2 || !range[0] || !range[1]) {
      return undefined
    }

    const from = expressionRooms.get(range[0])
    const to = expressionRooms.get(range[1])

    if (!from || !to) {
      return undefined
    }

    const rangeColumn = resolveRangeColumns(from, to)

    if (!rangeColumn) {
      return undefined
    }

    columns.push(rangeColumn)
  }

  return columns.length > 0 ? columns : undefined
}
