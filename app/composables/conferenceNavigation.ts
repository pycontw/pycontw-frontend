import type { ContentNavigationLink } from '@nuxt/ui'

interface SimpleNavigationItem {
  label: string
  active?: boolean
  children: {
    label: string
    to: string
  }[]
}

export function useConferenceNavigation() {
  const localePath = useLocalePath()
  const route = useRoute()
  const { t } = useI18n()

  const conferenceNavigation = computed<SimpleNavigationItem>(() => ({
    label: t('conference.title'),
    active: route.path.startsWith(localePath('/conference/')),
    children: [
      {
        label: t('conference.keynotes'),
        to: localePath('/conference/keynotes'),
      },
      {
        label: t('conference.talks'),
        to: localePath('/conference/talks'),
      },
      {
        label: t('conference.tutorials'),
        to: localePath('/conference/tutorials'),
      },
      {
        label: t('conference.lightning_talks'),
        to: localePath('/conference/lightning-talks'),
      },
      {
        label: 'Panel Discussion',
        to: localePath('/conference/panel-discussion'),
      },
      {
        label: 'Young Inspires',
        to: localePath('/conference/young-inspires'),
      },
    ],
  }))

  const eventNavigation = computed<SimpleNavigationItem>(() => ({
    label: t('events.title'),
    active: route.path.startsWith(localePath('/events/')),
    children: [
      {
        label: t('events.sprints'),
        to: localePath('/events/sprints'),
      },
      {
        label: t('events.poster_sessions'),
        to: localePath('/events/poster-sessions'),
      },
      {
        label: t('events.open_spaces'),
        to: localePath('/events/open-spaces'),
      },
      {
        label: t('events.jobs'),
        to: localePath('/events/jobs'),
      },
    ],
  }))

  return {
    conferenceNavigation,
    eventNavigation,
  }
}

export function toContentNavigationLink(item: SimpleNavigationItem): ContentNavigationLink {
  return {
    title: item.label,
    path: '#',
    children: item.children.map(child => ({
      title: child.label,
      path: child.to,
    })),
  }
}
