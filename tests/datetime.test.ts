import { afterEach, describe, expect, it, vi } from 'vitest'
import { getLocalizedDate, getSessionTimeLabel } from '../app/utils/datetime.ts'

describe('conference date-time formatting', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
  })

  it('formats conference dates in Taipei regardless of the device time zone', () => {
    vi.stubEnv('TZ', 'America/Los_Angeles')

    expect(getLocalizedDate('2026-10-16T16:30:00Z')).toEqual({
      'zh-hant': '10月17日週六',
      'en-us': 'Sat, Oct 17',
    })
  })

  it('formats conference times in Taipei regardless of the device time zone', () => {
    vi.stubEnv('TZ', 'America/Los_Angeles')

    expect(getSessionTimeLabel('2026-10-17T01:30:00Z')).toBe('09:30')
  })
})
