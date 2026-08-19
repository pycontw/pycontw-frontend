<script setup lang="ts">
import type { Sponsor, SponsorGroup, SponsorLevel } from '~/types/sponsor'

const { sponsorGroups } = defineProps<{
  sponsorGroups: SponsorGroup[]
}>()

// show "Become a Sponsor" button in the end of the sponsor level
const SHOW_BECOME_SPONSOR: SponsorLevel[] = ['diamond', 'platinum', 'gold', 'silver', 'bronze']

// force show these levels even if there is no sponsor in the level
const TOP_SHOW_LEVELS: SponsorLevel[] = SHOW_BECOME_SPONSOR

const { t, locale } = useI18n({ useScope: 'local' })
const localePath = useLocalePath()
const openedModal = ref(false)
const openedSponsor = shallowRef<Sponsor | null>(null)

function openSponsorModal(sponsor: Sponsor) {
  openedSponsor.value = sponsor
  openedModal.value = true
}

const filteredSponsorGroups = computed(() => {
  const topGroups = TOP_SHOW_LEVELS.map<SponsorGroup>((level) => {
    const group = sponsorGroups.find(group => group.level_name === level)
    return group || { level_name: level, sponsors: [] }
  })
  const restGroups = sponsorGroups.filter(group => !TOP_SHOW_LEVELS.includes(group.level_name))
  return [...topGroups, ...restGroups]
})
</script>

<template>
  <div>
    <div v-for="sponsorGroup in filteredSponsorGroups" :key="sponsorGroup.level_name" class="mb-8">
      <h3 class="text-2xl font-bold text-muted mb-6">
        {{ t(`level.${sponsorGroup.level_name}`) }}
      </h3>
      <div class="grid grid-cols-2 min-[425px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
        <div
          v-for="sponsor in sponsorGroup.sponsors"
          :key="sponsor.name_en_us"
          class="relative w-full aspect-square sponsor-logo cursor-pointer opacity-90 hover:opacity-100 hover:scale-105 transition-all"
          @click="openSponsorModal(sponsor)"
        >
          <img :src="sponsor.logo_url" class="logo-img">
          <div v-if="sponsor.subtitle_en_us || sponsor.subtitle_zh_hant" class="absolute bottom-0 left-0 w-full p-0.5">
            <div class="rounded-b-[10px] rounded-t-xs bg-pink-500/15 py-1 font-semibold flex items-center justify-center">
              <UIcon name="i-lucide:heart-handshake" class="size-4 lg:size-4.5 mr-1 text-pink-500" />
              <div class="text-pink-500 text-xs lg:text-sm autospace-normal">
                {{ locale === 'en-us' ? sponsor.subtitle_en_us : sponsor.subtitle_zh_hant }}
              </div>
            </div>
          </div>
        </div>
        <NuxtLink
          v-if="SHOW_BECOME_SPONSOR.includes(sponsorGroup.level_name)"
          class="w-full aspect-square rounded-xl border-dashed border-2 border-muted flex flex-col items-center justify-center text-dimmed"
          :to="localePath('/sponsor')"
        >
          <UIcon name="i-lucide:plus" class="size-6 lg:size-6 mb-1" />
          {{ t('become-sponsor') }}
        </NuxtLink>
      </div>
    </div>

    <UModal v-model:open="openedModal" :title="t('sponsor.list')" :ui="{ content: 'max-w-2xl' }">
      <template #body>
        <div v-if="openedSponsor" class="w-full flex flex-col items-center p-4">
          <div class="size-32 sponsor-logo">
            <img class="logo-img" :src="openedSponsor.logo_url">
          </div>
          <div class="mt-4 font-semibold text-lg text-highlighted">
            {{ locale === 'en-us' ? openedSponsor.name_en_us : openedSponsor.name_zh_hant }}
          </div>
          <div class="my-6 text-lg">
            {{ locale === 'en-us' ? openedSponsor.intro_en_us : openedSponsor.intro_zh_hant }}
          </div>
          <UButton
            :to="openedSponsor.website_url"
            target="_blank"
            variant="outline"
            size="xl"
          >
            {{ t('website') }}
          </UButton>
        </div>
      </template>
    </UModal>
  </div>
</template>

<style scoped>
@reference "~/assets/css/main.css";

.sponsor-logo {
  @apply p-3 bg-white rounded-xl;

  .logo-img {
    @apply size-full object-contain;
  }
}
</style>

<i18n lang="yaml">
en-us:
  website: 'Website'
  become-sponsor: 'Sponsor'
  level:
    diamond: 'Diamond'
    platinum: 'Platinum'
    gold: 'Gold'
    silver: 'Silver'
    bronze: 'Bronze'
    special: 'Special Sponsorship'
    special-thanks: 'Special Thanks to'
    co-organizer: 'Co-organizer'
    organizer: 'Organizer'
    sprint-coorganizer: 'Sprints Co-organizer'

zh-hant:
  website: '官方網站'
  become-sponsor: '成為贊助'
  level:
    diamond: '鑽石級贊助'
    platinum: '白金級贊助'
    gold: '金級贊助'
    silver: '銀級贊助'
    bronze: '銅級贊助'
    special: '特別贊助'
    special-thanks: '特別感謝'
    co-organizer: '協辦單位'
    organizer: '主辦單位'
    sprint-coorganizer: '衝刺開發協辦單位'
</i18n>
