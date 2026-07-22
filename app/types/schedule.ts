export interface ScheduleApiSlot {
  event_id: number
  event_type: string
  title: MaybeLocalizedText
  speakers: MaybeLocalizedText[]
  begin_time: string
  end_time: string
  recording_policy: boolean
  is_remote: boolean
  language: string
  python_level: 'EXPERIENCED' | 'INTERMEDIATE' | 'NOVICE'
  break_event: boolean
  custom_event: boolean
  custom_event_path: string
}

export interface ScheduleApiDay {
  date: string
  name: string
  rooms: string[]
  slots: Record<string, ScheduleApiSlot[]>
}

export interface ScheduleApiEnvelope {
  data?: ScheduleApiDay[]
}
