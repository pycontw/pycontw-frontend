/**
 * API types
 */
export type ConferenceSpeechLanguage = 'ENEN' | 'ZHEN' | 'ZHZH' | 'TAI'

export const SPEECH_PYTHON_LEVELS = ['NOVICE', 'INTERMEDIATE', 'EXPERIENCED'] as const
export type ConferenceSpeechPythonLevel = typeof SPEECH_PYTHON_LEVELS[number]

export const SPEECH_CATEGORIES = ['APPL', 'PRAC', 'COM', 'DB', 'DATA', 'EDU', 'EMBED', 'FIN', 'IOT', 'GAME', 'GRAPH', 'ML', 'NLP', 'CORE', 'TOOL', 'SCI', 'SEC', 'ADMIN', 'TEST', 'WEB', 'OTHER'] as const
export type ConferenceSpeechCategory = typeof SPEECH_CATEGORIES[number]

export interface ConferenceSpeechSpeaker {
  /**
   * NOTE: thumbnail_url will response full URL including host from API, by the request header "Host"
   * so if the request url is the Docker internal host, the url will be the internal host too,
   * which is not accessible from the browser.
   */
  thumbnail_url: string
  name: string
  github_profile_url: string
  twitter_profile_url: string
  facebook_profile_url: string
  bio: string
}

/**
 * @server TutorialListSerializer, TalkListSerializer
 */
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
 * @server TalkDetailSerializer
 */
export interface ConferenceTalkDetail extends ConferenceSpeech {
  recording_policy: boolean
  abstract: string
  detailed_description: string
  slide_link: string
  slido_embed_link: string
  hackmd_embed_link: string
  end_time: string
  is_remote: boolean
  youtube_id: string
}

/**
 * @server TutorialDetailSerializer
 */
export interface ConferenceTutorialDetail extends ConferenceTalkDetail {
  registration_link: string
}

/**
 * Web-only types
 */
export const SPEECH_TALK_LANGUAGES = ['en', 'zh', 'tai'] as const
export type ConferenceSpeechSpeakLanguage = typeof SPEECH_TALK_LANGUAGES[number]

export const SLIDES_TALK_LANGUAGES = ['en', 'zh'] as const
export type ConferenceSpeechSlidesLanguage = typeof SLIDES_TALK_LANGUAGES[number]
