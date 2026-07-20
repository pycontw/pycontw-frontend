import { joinURL } from 'ufo'

export function $public(path: string) {
  const baseURL = useRuntimeConfig().app.baseURL
  return joinURL(baseURL, path)
}
