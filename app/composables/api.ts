import { joinURL } from 'ufo'

export const useApiFetch = createUseFetch(() => ({
  baseURL: joinURL(useRuntimeConfig().app.baseURL, '/api'),
}))
