export interface Sponsor {
  name_en_us: string
  name_zh_hant: string
  subtitle_en_us: string
  subtitle_zh_hant: string
  intro_en_us: string
  intro_zh_hant: string
  website_url: string
  logo_url: string
}

export type SponsorLevel = 'diamond' | 'platinum' | 'gold' | 'silver' | 'bronze' | 'special' | 'special-thanks' | 'co-organizer' | 'organizer' | 'sprint-coorganizer'

export interface SponsorGroup {
  level_name: SponsorLevel
  sponsors: Sponsor[]
}

export interface SponsorApiEnvelope {
  data: SponsorGroup[]
}
