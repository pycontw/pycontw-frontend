/**
 * API types
 */
export type ConferenceSpeechLanguage = 'ENEN' | 'ZHEN' | 'ZHZH' | 'TAI'

export const SPEECH_PYTHON_LEVELS = ['NOVICE', 'INTERMEDIATE', 'EXPERIENCED'] as const
export type ConferenceSpeechPythonLevel = typeof SPEECH_PYTHON_LEVELS[number]

export const SPEECH_CATEGORIES = ['APPL', 'PRAC', 'COM', 'DB', 'DATA', 'EDU', 'EMBED', 'FIN', 'IOT', 'GAME', 'GRAPH', 'ML', 'NLP', 'CORE', 'TOOL', 'SCI', 'SEC', 'ADMIN', 'TEST', 'WEB', 'OTHER'] as const
export type ConferenceSpeechCategory = typeof SPEECH_CATEGORIES[number]

export interface ConferenceSpeechSpeaker {
  thumbnail_url: string
  name: string
  github_profile_url: string
  twitter_profile_url: string
  facebook_profile_url: string
  bio: string
}

export interface ConferenceSpeech {
  id: number
  location: string
  begin_time: string
  title: string
  category: ConferenceSpeechCategory
  language: ConferenceSpeechLanguage
  python_level: ConferenceSpeechPythonLevel
  speakers: ConferenceSpeechSpeaker[]
  event_type: string
}

/**
 * Web-only types
 */
export const SPEECH_TALK_LANGUAGES = ['en', 'zh', 'tai'] as const
export type ConferenceSpeechSpeakLanguage = typeof SPEECH_TALK_LANGUAGES[number]
