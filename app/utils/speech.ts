import type { ConferenceSpeechLanguage, ConferenceSpeechSlidesLanguage, ConferenceSpeechSpeakLanguage } from '~/types/speech'

const SPEECH_TALK_LANGUAGE_MAP: Record<ConferenceSpeechLanguage, ConferenceSpeechSpeakLanguage> = {
  ENEN: 'en',
  ZHEN: 'zh',
  ZHZH: 'zh',
  TAI: 'tai',
}

export function getSpeechTalkLanguage(speechLanguage: ConferenceSpeechLanguage): ConferenceSpeechSpeakLanguage {
  return SPEECH_TALK_LANGUAGE_MAP[speechLanguage]
}

const SPEECH_SLIDES_LANGUAGE_MAP: Record<ConferenceSpeechLanguage, ConferenceSpeechSlidesLanguage> = {
  ENEN: 'en',
  ZHEN: 'en',
  ZHZH: 'zh',
  TAI: 'zh', // NOTES: expected to be zh
}

export function getSpeechSlidesLanguage(speechLanguage: ConferenceSpeechLanguage): ConferenceSpeechSlidesLanguage {
  return SPEECH_SLIDES_LANGUAGE_MAP[speechLanguage]
}
