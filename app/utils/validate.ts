export const WHITELIST_DETAILS_EVENT_TYPES = ['talk', 'tutorial', 'sponsored']

export const validateConferenceRoute: PageMeta['validate'] = (route) => {
  return typeof route.params.eventType === 'string' &&
    WHITELIST_DETAILS_EVENT_TYPES.includes(route.params.eventType)
    && !Number.isNaN(Number(route.params.id))
}
