type SupportedLocale = 'en-us' | 'zh-hant'

export type MaybeLocalizedText = string | {
  en_us?: string
  zh_hant?: string
}

export function resolveLocalizedText(value: MaybeLocalizedText, locale: SupportedLocale) {
  if (typeof value === 'string') {
    return value
  }

  if (locale === 'zh-hant') {
    return value.zh_hant ?? value.en_us ?? ''
  }

  return value.en_us ?? value.zh_hant ?? ''
}
