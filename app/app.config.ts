export default defineAppConfig({
  ui: {
    colors: {
      primary: 'sky',
      secondary: 'yellow',
      neutral: 'neutral',
    },
    /**
     * adding .prose class to make css selectors to select correct elements in markdown content
     * to avoid overriding styles of custom components including these elements
     */
    prose: {
      h1: { slots: { base: 'prose' } },
      h2: { slots: { base: 'prose' } },
      h3: { slots: { base: 'prose' } },
      h4: { slots: { base: 'prose' } },
      p: { base: 'prose' },
      li: { base: 'prose' },
    },
    /**
     * disable highlight color for footer columns links when active
     */
    footerColumns: { variants: { active: { true: { link: 'text-muted' } } } },
    /**
     * disable text-pretty for fixing safari spacing issue
     */
    pageCard: { slots: { description: 'text-wrap' } },
    pageHeader: { slots: { description: 'text-wrap' } },
    /**
     * remove focus ring
     */
    link: { base: 'focus-visible:outline-0' },
  },

  pycon: {
    year: 2026,
    startDate: '2025-09-06',
    scheduleReady: false,
    eventsReady: true,

    individualTicketUrl: 'https://pycontw.kktix.cc/events/2026-individual',
    corporateTicketUrl: 'https://pycontw.kktix.cc/events/2026-corporate',
  },
})
