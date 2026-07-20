<script setup lang="ts">
import type { PythonTaiwanCommunity } from '~/data/communities'
import { communities } from '~/data/communities'

const { locale, t } = useI18n({ useScope: 'local' })

const localKey = computed<{
  name: 'name_zh' | 'name_en'
  description: 'description_zh' | 'description_en'
}>(() => {
  if (locale.value === 'zh-hant') {
    return { name: 'name_zh', description: 'description_zh' }
  } else {
    return { name: 'name_en', description: 'description_en' }
  }
})

const openedModal = ref(false)
const openedCommunity = shallowRef<PythonTaiwanCommunity | null>(null)

function openCommunityModal(community: PythonTaiwanCommunity) {
  openedCommunity.value = community
  openedModal.value = true
}

useHead({ title: $t('about.community') })
</script>

<template>
  <UContainer style="--ui-container: 100rem;">
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[6fr_4fr] lg:gap-20 *:pt-16 *:pb-24">
      <div class="lg:sticky lg:top-(--ui-header-height) lg:left-0 flex flex-col lg:h-[calc(100vh-var(--ui-header-height))]">
        <div class="shrink-0 mb-16">
          <h2 class="text-4xl text-gradient-neutral font-bold mb-4">
            {{ $t('about.community') }}
          </h2>
          <div class="text-lg text-muted">
            {{ t('description') }}
          </div>
        </div>
        <div class="grow overflow-hidden">
          <img src="/images/about/community/_map.png" class="h-full w-full object-contain">
        </div>
      </div>

      <div class="space-y-8">
        <UPageCard
          v-for="community in communities"
          :key="community.id"
          class="cursor-pointer"
          @click="openCommunityModal(community)"
        >
          <div class="flex space-x-6 w-full">
            <div class="flex flex-col justify-center">
              <h3 class="text-xl font-bold mb-2 line-clamp-1 text-highlighted">
                {{ community[localKey.name] }}
              </h3>
              <p class="line-clamp-4 text-muted">
                {{ community[localKey.description] }}
              </p>
            </div>
            <img
              class="w-32 h-32 object-cover rounded-lg"
              :src="`/images/about/community/${community.id}.png`"
              :alt="community[localKey.name]"
            >
          </div>
        </UPageCard>
      </div>
    </div>

    <UModal
      v-model:open="openedModal"
      :title="openedCommunity ? openedCommunity[localKey.name] : ''"
      :ui="{ title: 'text-xl font-bold' }"
    >
      <template #body>
        <div v-if="openedCommunity" class="6 w-full">
          <img
            class="w-full rounded-lg"
            :src="`/images/about/community/${openedCommunity.id}.png`"
            :alt="openedCommunity[localKey.name]"
          >
          <p class="my-4">
            {{ openedCommunity[localKey.description] }}
          </p>
          <UButton
            :to="openedCommunity.url"
            target="_blank"
            variant="outline"
          >
            {{ t('community_website') }}
          </UButton>
        </div>
      </template>
    </UModal>
  </UContainer>
</template>

<i18n lang="yaml">
en-us:
  description: PyCon TW is a conference driven by multiple local Python communities across Taiwan, and the event wouldn't be able to thrive without their support. If the conference is not enough for you, welcome to join the meetups and seminars held by our community partners!
  community_website: Website
zh-hant:
  description: 在臺灣，除了參與每年的 PyCon TW，還可以加入許多在地的社群認識更多的 Pythonistas，一起討論我們共通的語言為 Python 貢獻己力。PyCon TW 的成長有賴於臺灣各地 Python 社群的幫忙，才能讓每一年的年會順利舉行。一個人走，可以走得很快；但一群人走，可以走得更遠！
  community_website: 社群網站
</i18n>
