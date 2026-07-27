<script setup lang="ts">
import type { ConferenceKeynote } from '~/types/keynote'

const EXPECTED_MIN_KEYNOTE_COUNT = 3

const { data } = await useApiFetch<ConferenceKeynote[]>('/events/keynotes/')

const { t } = useI18n({ useScope: 'local' })

useHead({ title: $t('conference.keynotes') })

definePageMeta({
  layout: 'conference',
})
</script>

<template>
  <UPage>
    <ContentHeader :title="$t('conference.keynotes')" :description="t('description')" />
    <UPageBody>
      <ConferenceKeynoteCard v-for="keynote in data" :key="keynote.id" :keynote="keynote" />
      <ConferenceNoticeCard
        v-if="(data?.length ?? 0) < EXPECTED_MIN_KEYNOTE_COUNT"
        :content="t('more_notice')"
        icon="i-lucide:megaphone"
      />
    </UPageBody>
  </UPage>
</template>

<i18n lang="yaml">
en-us:
  more_notice: "More exciting keynote speakers will be announced soon, stay tuned!"
  description: |
    We invite influential speakers from around the world to serve as our keynote guests at this year’s conference. They will be sharing deep insights from their practical experience and project journeys, along with their insightful observations and visions for future trends.

    The keynote speeches are not only a transfer of knowledge and experience but also a conversation that broadens perspectives, inviting us to rethink the connection between technology and the world. Whether you are an emerging talent or an experienced developer, you will find inspiration and strength in these talks.

zh-hant:
  more_notice: 更多精彩的主題演講將陸續公布，敬請期待！
  description: |
    我們邀請來自全球各地具有深厚影響力的講者，擔任本屆大會的主題演講嘉賓。他們將分享自身在實務經驗、專案歷程中的深刻洞見，並帶來對未來發展趨勢的觀察與想像。

    主題演講不僅是一次知識與經驗的傳遞，更是一場拓展思維視角的對話，邀請我們重新思考技術與世界的關係。無論你是初學者還是資深開發者，都能從這些演講中獲得啟發與力量。
</i18n>
