<script setup lang="ts">
import { staffGroups } from '~/data/staff'

const { locale, t } = useI18n()
const nameKey = computed(() => locale.value === 'zh-hant' ? 'name_zh' : 'name_en')

useHead(() => ({ title: t('about.staff') }))
</script>

<template>
  <UContainer class="pb-24">
    <ContentHeader :title="t('about.staff')" />
    <div class="space-y-16 pt-12">
      <section
        v-for="group in staffGroups"
        :key="group.id"
        :aria-labelledby="`staff-${group.id}`"
      >
        <h2 :id="`staff-${group.id}`" class="text-2xl font-bold text-highlighted mb-8">
          {{ group[nameKey] }}
        </h2>
        <ul class="grid grid-cols-3 gap-x-8 gap-y-12 sm:grid-cols-4 lg:grid-cols-7 lg:gap-x-12">
          <li v-for="member in group.members" :key="member.name" class="flex flex-col items-center gap-4 text-center">
            <div class="relative aspect-square w-full max-w-40 shrink-0 rounded-full [container-type:inline-size]">
              <img
                v-if="member.avatar"
                :src="$public(member.avatar)"
                :alt="member.name"
                width="160"
                height="160"
                loading="lazy"
                class="staff-avatar absolute rounded-full object-cover bg-elevated"
              >
              <div
                v-else
                class="staff-avatar absolute rounded-full bg-elevated ring ring-default flex items-center justify-center"
                aria-hidden="true"
              >
                <UIcon name="i-lucide:user-round" class="size-12 text-muted" />
              </div>
              <UTooltip
                v-if="member.leader"
                :delay-duration="0"
                :text="locale === 'zh-hant' ? '組長' : 'Leader'"
              >
                <span
                  class="absolute bottom-0 right-0 flex aspect-square w-[28%] items-center justify-center rounded-full border-[2.5cqw] border-black bg-secondary text-black"
                  role="img"
                  tabindex="0"
                  :aria-label="locale === 'zh-hant' ? '組長' : 'Leader'"
                >
                  <svg class="size-3/4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.76 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2Z" />
                  </svg>
                </span>
              </UTooltip>
            </div>
            <span class="text-lg font-medium text-highlighted break-words max-w-full">{{ member.name }}</span>
          </li>
        </ul>
      </section>
    </div>
  </UContainer>
</template>

<style scoped>
.staff-avatar {
  inset: 0;
  width: 100%;
  height: 100%;
}
</style>
