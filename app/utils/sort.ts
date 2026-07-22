export function sortByCustomOrder<T>(arr: readonly T[], customOrder: readonly T[]): T[] {
  const orderMap = new Map<T, number>()

  customOrder.forEach((item, index) => {
    orderMap.set(item, index)
  })

  return [...arr].sort((a, b) => {
    const aIndex = orderMap.get(a)
    const bIndex = orderMap.get(b)

    const aInOrder = aIndex !== undefined
    const bInOrder = bIndex !== undefined

    if (aInOrder && bInOrder) {
      return aIndex! - bIndex!
    }

    if (aInOrder)
      return -1

    if (bInOrder)
      return 1

    return 0
  })
}
