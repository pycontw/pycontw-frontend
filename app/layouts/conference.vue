<script setup lang="ts">
import type { ContentNavigationLink } from '@nuxt/ui'
import DefaultLayout from './default.vue'

const localePath = useLocalePath()

const { conferenceNavigation, eventNavigation } = useConferenceNavigation()

const navigation = computed<ContentNavigationLink[]>(() => [
  {
    title: $t('introduce.title'),
    path: '#',
    children: [
      {
        title: $t('introduce.overview'),
        path: localePath('/overview'),
      },
    ],
  },
  { ...toContentNavigationLink(conferenceNavigation.value) },
  { ...toContentNavigationLink(eventNavigation.value) },
])
</script>

<template>
  <DefaultLayout>
    <UContainer>
      <UPage>
        <template #left>
          <UPageAside>
            <UContentNavigation
              :collapsible="false"
              :navigation="navigation"
              highlight
              :ui="{
                linkTrailingBadge: 'font-semibold uppercase',
              }"
              color="neutral"
            />
          </UPageAside>
        </template>

        <slot />
      </UPage>
    </UContainer>
  </DefaultLayout>
</template>
