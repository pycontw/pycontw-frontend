import { joinURL } from 'ufo'

// see: https://www.youtube.com/watch?v=J4E5uYz5AY8
export default defineEventHandler(async (event) => {
  const { apiUrl, apiAuthToken } = useRuntimeConfig()
  const path = event.path.replace(/^\/api\//, '') // /api/users -> users
  const target = joinURL(apiUrl, path)
  return proxyRequest(event, target, {
    ...(apiAuthToken ? { headers: { authorization: `Token ${apiAuthToken}` } } : {}),
  })
})
