<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n({ useScope: 'local' })
const { pycon } = useAppConfig()

const EVENT_TAGS = {
  warmup: { color: 'primary' },
  speech: { color: 'secondary' },
  podcast: { color: 'error' },
  activity: { color: 'success' },
  post_event: { color: 'secondary' },
} as const

const EVENTS = computed<Record<string, {
  img: string
  link?: { title: string, url: string }
  tag?: keyof typeof EVENT_TAGS
}>>(() => ({
  keynote: {
    img: '/images/overview/keynote.jpg',
    tag: 'speech',
    ...(pycon.eventsReady && { link: { title: t('linkLabel.talks'), url: localePath('/conference/keynotes') } }),
  },
  talk: {
    img: '/images/overview/talk.jpg',
    tag: 'speech',
    ...(pycon.eventsReady && { link: { title: t('linkLabel.talks'), url: localePath('/conference/talks') } }),
  },
  tutorial: {
    img: '/images/overview/tutorial.jpg',
    tag: 'speech',
    ...(pycon.eventsReady && { link: { title: t('linkLabel.tutorials'), url: localePath('/conference/tutorials') } }),
  },
  // panelDiscussion: {
  //   img: '/images/overview/panel-discussion.jpg',
  //   tag: 'speech',
  //   ...(pycon.eventsReady && { link: { title: t('linkLabel.talks'), url: localePath('/conference/panel-discussion') } }),
  // },
  posterSession: {
    img: '/images/overview/poster-session.jpg',
    tag: 'activity',
    ...(pycon.eventsReady && { link: { title: t('linkLabel.talks'), url: localePath('/events/poster-session') } }),
  },
  lightningTalk: {
    img: '/images/overview/lightning-talk.jpg',
    path: '/conference/lightning-talks',
    tag: 'speech',
    ...(pycon.eventsReady && { link: { title: t('linkLabel.details'), url: localePath('/conference/lightning-talks') } }),
  },
  // youngInspires: {
  //   img: '/images/overview/young-inspires.jpg',
  //   tag: 'speech',
  //   ...(pycon.eventsReady && { link: { title: t('linkLabel.talks'), url: localePath('/conference/young-inspires') } }),
  // },
  openSpace: {
    img: '/images/overview/open-space.jpg',
    tag: 'activity',
    ...(pycon.eventsReady && { link: { title: t('linkLabel.details'), url: localePath('/events/open-spaces') } }),
  },
  pynight: {
    img: '/images/overview/pynight.jpg',
    tag: 'activity',
  },
  jobFair: {
    img: '/images/overview/job-fair.jpg',
    tag: 'activity',
    ...(pycon.eventsReady && { link: { title: t('linkLabel.jobs'), url: localePath('/events/jobs') } }),
  },
  sprint: {
    img: '/images/overview/sprint.jpg',
    tag: 'warmup',
    ...(pycon.eventsReady && { link: { title: t('linkLabel.details'), url: localePath('/events/sprints') } }),
  },
  pycast: {
    img: '/images/overview/pycast.jpg',
    tag: 'podcast',
  },
}))

useHead({ title: $t('introduce.overview') })
</script>

<template>
  <UContainer>
    <UPage>
      <ContentHeader :title="$t('introduce.overview')" :description="t('description')" />
      <UPageBody>
        <UPageGrid :ui="{ base: 'gap-6' }">
          <UPageCard
            v-for="(event, key) in EVENTS"
            :key="key"
            :description="t(`events.${key}.description`)"
            reverse
            :ui="{ container: 'lg:flex', footer: 'w-full' }"
            :to="pycon.eventsReady && event.link ? event.link.url : undefined"
            class="group"
          >
            <img :src="$public(event.img)" :alt="t(`events.${key}.title`)" class="w-full h-auto object-cover rounded-lg aspect-video">

            <template #title>
              <div class="flex justify-between mb-2">
                <div>{{ t(`events.${key}.title`) }}</div>
                <UBadge v-if="event.tag" :color="EVENT_TAGS[event.tag].color" variant="subtle">
                  {{ t(`tag.${event.tag}`) }}
                </UBadge>
              </div>
            </template>

            <template v-if="pycon.eventsReady && event.link" #footer>
              <div class="text-sm text-neutral-600 group-hover:text-neutral-500 transition-colors flex items-center gap-1">
                {{ event.link.title }}
                <UIcon name="i-lucide-arrow-right" class="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </template>
          </UPageCard>
        </UPageGrid>
      </UPageBody>
    </UPage>
  </UContainer>
</template>

<i18n lang="yaml">
en-us:
  description: PyCon Taiwan is more than a conference. It's a place to learn, share, collaborate, and connect with the Python community. Whether you're attending talks, joining hands-on sessions, exchanging ideas, or meeting people from around the world, there's a place for everyone.
  tag: {
    warmup: Warm-up,
    speech: Speech,
    podcast: Podcast,
    activity: Activity,
    post_event: Post-Event Activity
  }
  linkLabel:
    details: Details
    talks: Talk List
    tutorials: Tutorial List
    jobs: Job List
  events:
    sprint:
      title: Sprint
      description: >
        Sprints are collaborative sessions where open source maintainers, contributors, and anyone interested in open source come together to build and learn. Join a project to contribute alongside its maintainers, or bring your own project and collaborate with the community.

    pycast:
      title: PyCast
      description: >
        PyCast is the official podcast of PyCon Taiwan. We invite Python community speakers, open source contributors, and volunteers to share their experiences in Python, software development, and the community. Tune in anytime and explore each episode with accompanying show notes for further reading.

    keynote:
      title: Keynotes
      description: >
        At PyCon Taiwan, keynote speakers from diverse fields around the world will take the stage to share their expertise. Through their technical experience, research, and industry insights, they will explore emerging trends and inspire new perspectives on the future of technology.

    talk:
      title: Talks
      description: >
        Talks are one of the signature activities at PyCon Taiwan, with sessions available in 15-, 30-, and 45-minute formats covering a wide range of topics and difficulty levels. Whether you're new to Python or an experienced developer, you'll find sessions that inspire you and broaden your perspective on Python and its community.

    tutorial:
      title: Tutorials
      description: >
        Tutorials are 1.5-hour hands-on sessions designed for in-depth learning. Unlike talks, tutorials encourage participants to learn by doing, with speakers guiding practical exercises and interactive discussions throughout the session.

    openSpace:
      title: Open Space
      description: >
        Open Space is an attendee-driven activity where anyone can start a discussion or gathering around a topic of interest. Share ideas, exchange experiences, meet new people, and enjoy spontaneous conversations with the community!

    lightningTalk:
      title: Lightning Talk
      description: >
        Lightning Talks are fast-paced, three-minute presentations open to all conference attendees. Share an idea, an experience, or a project with the community. Simply sign up during the conference for a chance to be selected as a Lightning Talk speaker.

    pynight:
      title: PyNight
      description: >
        PyNight is PyCon Taiwan's community gathering, where speakers, volunteers, and attendees come together to connect and exchange ideas. Whether you'd like to talk about technology, the community, or simply meet new people, everyone is welcome to join the conversation.

    jobFair:
      title: Job Fair
      description: >
        Job Fair connects attendees with companies looking for engineering talent. Meet company representatives, learn about their technology, culture, and career opportunities, and explore new possibilities for your professional journey.

    panelDiscussion:
      title: Panel Discussion
      description: >
        Panel Discussions bring together speakers from diverse backgrounds to share perspectives through engaging conversations. Explore technology, industry, and community topics from multiple viewpoints while discovering new ideas and fresh perspectives.

    posterSession:
      title: Poster Session
      description: >
        Poster Session is an interactive format where presenters showcase their work through posters and engage directly with attendees. Whether you're sharing a project, research, technical experience, or community initiative, Poster Session is a great place to exchange ideas and connect with others.

    youngInspires:
      title: Young Inspires
      description: >
        Young Inspires is a stage for young people to share their learning journeys, projects, and growth stories. By inspiring one another through community exchange, it encourages more youth to participate in programming, open source, and technology.

zh-hant:
  description: >
    PyCon Taiwan 不只是演講，更是一場交流、學習與分享的盛會。無論是聆聽議程、參與實作、交流想法，或認識來自世界各地的 Python 社群夥伴，都能在這裡找到屬於自己的參與方式。
  tag: {
    warmup: 會前活動,
    speech: 大會演講,
    podcast: 線上廣播,
    activity: 會中活動,
    post_event: 會後活動,
  }
  linkLabel:
    details: 活動詳情
    talks: 演講主題
    tutorials: 瀏覽課程
    jobs: 徵才資訊
  events:
    sprint:
      title: 衝刺開發
      description: 衝刺開發是開源專案協作活動，聚集專案維護者、貢獻者與對開源有興趣的夥伴。加入感興趣的專案，一起開發、修復問題或改善文件。也歡迎帶著自己的專案與社群交流，共同激起更多想法。
    pycast:
      title: PyCast
      description: PyCast 是 PyCon Taiwan 推出的 Podcast 節目。我們邀請 Python 社群講者、開源貢獻者與志工分享技術、社群及開發經驗。無論通勤、運動或休閒時，都歡迎透過輕鬆的對談，一起探索 Python 的更多可能，並搭配線上 Show Notes 深入閱讀。
    keynote:
      title: 主題演講
      description: 在 PyCon Taiwan，我們將邀請來自世界各地不同領域的 Keynote 講者進行主題演講。他們將分享自身的技術經驗、研究成果與產業觀察，並帶領大家一起探索未來技術發展的趨勢與可能性。
    talk:
      title: 一般演講
      description: 議程演講（Talks） 是 PyCon Taiwan 最具代表性的活動之一，提供 15、30 與 45 分鐘三種長度，涵蓋不同難度與主題。無論您是初學者或資深開發者，都能找到適合自己的議程，探索 Python 的多元應用與社群經驗。
    tutorial:
      title: 專業課程
      description: 專業課程（Tutorial） 提供約 1.5 小時的深度學習體驗。與一般演講不同，講者將帶領會眾一同實作，透過做中學的方式深入理解主題，並在互動交流中累積實務經驗。
    openSpace:
      title: 開放空間
      description: 開放空間（Open Space） 是由與會者自由發起的交流活動。您可以依照自己的興趣規劃討論主題，邀請其他夥伴一起交流、分享經驗、認識新朋友，讓更多精彩的想法在年會中持續發生！
    lightningTalk:
      title: 閃電秀
      description: 閃電秀（Lightning Talks） 是開放給所有與會者報名的 3 分鐘短講活動。分享一個想法、一段經驗，或一項有趣的專案，都有機會站上舞台與大家交流。只要於年會現場完成報名，就有機會成為當日的 Lightning Talk 講者。
    pynight:
      title: PyNight
      description: PyNight 是 PyCon Taiwan 的社群交流活動，邀請講者、志工與所有與會者一起輕鬆交流。無論是分享想法、交流技術、討論社群，或認識新朋友，都歡迎加入，一起延續年會的精彩時光。
    jobFair:
      title: Job Fair
      description: Job Fair 提供與企業交流及探索職涯機會的平台。您可以了解各家企業的技術文化、產品與人才需求，並與現場團隊交流，分享經驗、投遞履歷，開啟更多職涯發展的可能。
    panelDiscussion:
      title: Panel Discussion
      description: Panel Discussion 邀請不同背景的講者，以對談形式分享觀點，透過多元交流與討論，共同探索技術、產業及社群議題，激發更多思考與新的視角。
    posterSession:
      title: 海報展
      description: Poster Session（海報展） 提供以海報展示內容的分享形式，無論是專案成果、研究、技術實作，或社群經驗，都歡迎與會眾面對面交流，一起分享想法、激發更多合作與交流的可能。
    youngInspires:
      title: Young Inspires
      description: Young Inspires 是專屬年輕世代的分享舞台，邀請青少年分享學習歷程、專案成果與成長故事，透過交流與啟發，鼓勵更多人投入程式設計、開源及技術社群。
</i18n>
