import type { ConferenceSpeechLanguage, ConferenceSpeechSpeakLanguage } from '~/types/speech'

const SPEECH_TALK_LANGUAGE_MAP: Record<ConferenceSpeechLanguage, ConferenceSpeechSpeakLanguage> = {
  ENEN: 'en',
  ZHEN: 'zh',
  ZHZH: 'zh',
  TAI: 'tai',
}

export function getSpeechTalkLanguage(speechLanguage: ConferenceSpeechLanguage): ConferenceSpeechSpeakLanguage {
  return SPEECH_TALK_LANGUAGE_MAP[speechLanguage]
}
