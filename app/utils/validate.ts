export const validateConferenceRoute: PageMeta['validate'] = (route) => {
  return (route.params.eventType === 'talk' || route.params.eventType === 'tutorial') && !Number.isNaN(Number(route.params.id))
}
