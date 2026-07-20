<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' })

const items = computed(() => ([
  { title: t('s1'), src: '/images/sponsor/community-visibility.svg' },
  { title: t('s2'), src: '/images/sponsor/recruitment.svg' },
  { title: t('s3'), src: '/images/sponsor/brand-promote.svg' },
  { title: t('s4'), src: '/images/sponsor/talent-connection.svg' },
]))
</script>

<template>
  <div class="grid grid-cols-2 sm:grid-cols-4 gap-12">
    <div v-for="value in items" :key="value.title" class="flex flex-col items-center space-y-4 md:space-y-6">
      <img :src="value.src" :alt="value.title" class="w-16 md:w-30">
      <p class="text-lg md:text-xl">
        {{ value.title }}
      </p>
    </div>
  </div>
</template>

<i18n lang="yaml">
en-us:
  s1: Increase Visibility
  s2: Recruitment
  s3: Promote your Brand
  s4: Connections with Talent
zh-hant:
  s1: 接觸專業人士
  s2: 明確徵才場合
  s3: 提升品牌曝光
  s4: 建立人才網絡
</i18n>
