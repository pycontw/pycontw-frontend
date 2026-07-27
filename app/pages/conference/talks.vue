<script setup lang="ts">
import type { ConferenceSpeech } from '~/types/speech'

const { data } = await useApiFetch<ConferenceSpeech[]>('/events/speeches/?event_types=talk,sponsored')

const { t } = useI18n({ useScope: 'local' })

useHead({ title: $t('conference.talks') })

definePageMeta({
  layout: 'conference',
})
</script>

<template>
  <UPage>
    <ContentHeader :title="$t('conference.talks')" :description="t('description')" />
    <UPageBody>
      <ConferenceSpeechList v-if="data" :speeches="data" />
      <ConferenceNoticeCard v-else :content="t('more_notice')" icon="i-lucide:megaphone" />
    </UPageBody>
  </UPage>
</template>

<i18n lang="yaml">
en-us:
  more_notice: "More exciting talks will be announced soon, stay tuned!"
  description: |
    Talks are the core part of the conference, where speakers from Taiwan and around the world share their experiences and insights in Python-related fields.Each talk is scheduled with different lengths and formats depending on the depth and nature of the topic.

    Start planning your schedule and mark down the sessions you are excited about!

    Session details may be adjusted throughout the event. We will keep this page up to date, so feel free to check back anytime for the latest info.

zh-hant:
  more_notice: 更多精彩演講將陸續公布，敬請期待！
  description: |
    一般議程是大會中最主要的活動形式，來自台灣及世界各地的講者將分享他們在 Python 相關領域的經驗與洞見。每場演講會根據主題的深度與類型，安排不同的長度與形式。

    快打開行事曆，把想聽的議程筆記起來吧！

    議程資訊將隨活動調整即時更新，我們會盡可能提供最新內容，也歡迎不時回來查看，掌握第一手消息。
</i18n>
