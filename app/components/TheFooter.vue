<script setup lang="ts">
import type { FooterColumn } from '@nuxt/ui'

const localePath = useLocalePath()
const { proposalSystemUrl } = usePyCon()
const { t } = useI18n()

const socialMedias = [
  {
    icon: 'i-simple-icons:facebook',
    url: 'https://www.facebook.com/pycontw',
  },
  {
    icon: 'i-simple-icons:instagram',
    url: 'https://www.instagram.com/pycon.tw/',
  },
  {
    icon: 'i-simple-icons:x',
    url: 'https://twitter.com/pycontw',
  },
  {
    icon: 'i-simple-icons:discord',
    url: 'https://discord.com/invite/94hgCQv',
  },
  {
    icon: 'i-simple-icons:youtube',
    url: 'https://www.youtube.com/channel/UCHLnNgRnfGYDzPCCH8qGbQw',
  },
// TODO:
//   {
//     icon: 'Email.svg',
//     url: 'mailto:organizers@python.tw',
//   },
]

const columns = computed<FooterColumn[]>(() => [
  {
    label: 'PyCon TW',
    children: [
      {
        label: t('footer.blog'),
        to: 'https://conf.python.tw/',
        target: '_blank',
      },
      {
        label: t('footer.about_us'),
        to: localePath('/about'),
      },
      {
        label: t('footer.contact_us'),
        to: 'mailto:organizers@python.tw',
      },
      {
        label: t('footer.privacy_policy'),
        to: localePath('/about/privacy-policy'),
      },
    ],
  },
  {
    label: t('footer.join'),
    children: [
      {
        label: t('events.overview'),
        to: localePath('/overview'),
      },
      {
        label: t('volunteer.join'),
        to: 'https://forms.gle/UJjJGvbnhki9uryR8',
        target: '_blank',
      },
      {
        label: t('speaking.system'),
        to: proposalSystemUrl.value,
        target: '_blank',
      },
      {
        label: t('sponsor.title'),
        to: localePath('/sponsor'),
      },
    ],
  },
])
</script>

<template>
  <div class="relative">
    <USeparator />
    <UiSpotlight class="z-10 absolute top-0 left-1/2 -translate-x-1/2 w-1/2 sm:w-1/3 h-px bg-spotlight" radius="80%" />
    <div class="absolute inset-0 top-0 left-0 overflow-hidden -z-1">
      <div class="absolute -translate-x-1/2 -translate-y-1/2 -top-1 left-1/2 w-full xl:w-1/3 h-12 z-0 rounded-full bg-spotlight blur-[160px]" />
    </div>
    <UFooter :ui="{ top: 'border-b border-default' }">
      <template #top>
        <UContainer>
          <UFooterColumns :columns="columns" :ui="{ root: 'text-highlighted' }">
            <template #column-label="{ column }">
              <UIcon v-if="column.label === 'PyCon TW'" name="i-custom:pycontw" class="-my-0.5 mr-1" />
              {{ column.label }}
            </template>
            <template #right>
              <div class="text-sm font-semibold mb-6">
                {{ t('footer.history') }}
              </div>
              <FooterHistoryWebsites />
            </template>
          </UFooterColumns>
        </UContainer>
      </template>

      <template #left>
        <p class="text-muted text-sm">
          © {{ useAppConfig().pycon.year }} PyCon TW
        </p>
      </template>

      <template #right>
        <UButton
          v-for="s in socialMedias"
          :key="s.icon"
          :icon="s.icon"
          color="neutral"
          variant="ghost"
          :to="s.url"
          target="_blank"
        />
      </template>
    </UFooter>
  </div>
</template>
