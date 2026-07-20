const TAIPEI_OFFSET_MINUTES = 8 * 60

export function getConferenceDateNumber(date: string) {
  const appConfig = useAppConfig()

  const conferenceStartDate = new Date(`${appConfig.pycon.startDate}T00:00:00+08:00`)

  const inputDate = new Date(date)

  const diffInMs = inputDate.getTime() - conferenceStartDate.getTime()
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))

  return diffInDays + 1
}

/**
 * @param isoString ISO 8601 date-time string, e.g. "2025-09-06T05:20:00Z"
 * @returns "HH:mm" in GMT+8
 */
export function getSessionTimeLabel(isoString: string) {
  const date = new Date(isoString)

  return new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'Asia/Taipei', // GMT+8
  }).format(date)
}

export function formatMinute(minute: number) {
  const normalizedMinute = ((minute % (24 * 60)) + (24 * 60)) % (24 * 60)
  const hours = String(Math.floor(normalizedMinute / 60)).padStart(2, '0')
  const minutes = String(normalizedMinute % 60).padStart(2, '0')

  return `${hours}:${minutes}`
}

/**
 * @param isoDateTime ISO 8601 date-time string, e.g. "2025-09-06T05:20:00Z"
 * @returns Minutes of the day in GMT+8
 */
export function getMinuteOfDay(isoDateTime: string) {
  const utcDate = new Date(isoDateTime)
  return utcDate.getUTCHours() * 60 + utcDate.getUTCMinutes() + TAIPEI_OFFSET_MINUTES
}
