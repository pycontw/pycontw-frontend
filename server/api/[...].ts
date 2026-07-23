import { joinURL } from 'ufo'

// see: https://www.youtube.com/watch?v=J4E5uYz5AY8
export default defineEventHandler(async (event) => {
  const { apiUrl, apiAuthToken } = useRuntimeConfig(event)
  const path = event.path.replace(/^\/api\//, '') // /api/users -> users
  const target = joinURL(apiUrl, path)
  const targetUrl = new URL(target)

  return proxyRequest(event, target, {
    headers: {
      ...(apiAuthToken ? { authorization: `Token ${apiAuthToken}` } : {}),

      // Do not forward localhost's protocol and host to the upstream server.
      // The staging API redirects indefinitely when it receives
      // `x-forwarded-proto: http` over an HTTPS connection.
      'x-forwarded-host': targetUrl.host,
      'x-forwarded-proto': targetUrl.protocol.slice(0, -1),
    },
  })
})
