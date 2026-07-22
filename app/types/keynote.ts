export interface ConferenceKeynoteSpeaker {
  name_zh_hant: string
  name_en_us: string
  bio_zh_hant: string
  bio_en_us: string
  photo: string
}

export interface ConferenceKeynote {
  id: number
  speaker: ConferenceKeynoteSpeaker
  session: {
    title_zh_hant: string
    title_en_us: string
    description_zh_hant: string
    description_en_us: string
    slides: string
  }
  slido: string
  hackmd_embed_link: string
  youtube_id: string
  social_item: {
    linkedin: string
    twitter: string
    github: string
  }
}
