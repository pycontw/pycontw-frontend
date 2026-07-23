<script setup lang="ts">
import type { ConferenceSpeech } from '~/types/speech'

const { data } = await useApiFetch<ConferenceSpeech[]>('/events/speeches/?event_types=tutorial')

const { t } = useI18n({ useScope: 'local' })

useHead({ title: $t('conference.tutorials') })

definePageMeta({
  layout: 'conference',
})
</script>

<template>
  <UPage>
    <ContentHeader :title="$t('conference.tutorials')" :description="t('description')" />
    <UPageBody>
      <ConferenceSpeechList v-if="data" :speeches="data" hide-filters />
      <ConferenceNoticeCard v-else :content="t('more_notice')" icon="i-lucide:megaphone" />
    </UPageBody>
  </UPage>
</template>

<i18n lang="yaml">
en-us:
  more_notice: "More exciting tutorials will be announced soon, stay tuned!"
  description: |
    Tutorials are events held as part of the main conference. They are 1.5 hours events held to help participants better understand talks during the conference, or get their hands on more Python applications.

zh-hant:
  more_notice: 更多精彩的專業課程將陸續公布，敬請期待！
  description: |
    專業課程（Tutorial）是 PyCon Taiwan 的一部分，只要有購票都有資格參與；專業課程的時間為 90 分鐘。議程可能隨時更改，請頻繁確認本頁資訊，以獲得最新訊息。
</i18n>
