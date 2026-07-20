<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' })

const items = computed(() => [
  { title: t('coc_1'), src: '/images/about/coc/icon-1.svg' },
  { title: t('coc_2'), src: '/images/about/coc/icon-2.svg' },
  { title: t('coc_3'), src: '/images/about/coc/icon-3.svg' },
])
</script>

<template>
  <div class="flex justify-around">
    <div v-for="value in items" :key="value.title" class="flex flex-col items-center space-y-3">
      <img :src="value.src" :alt="value.title" class="w-16 md:w-24">
      <p>{{ value.title }}</p>
    </div>
  </div>
</template>

<i18n lang="yaml">
en-us:
  coc_1: 'Do not harass others'
  coc_2: 'Appreciate each other'
  coc_3: 'Show consideration'
zh-hant:
  coc_1: '禁止騷擾'
  coc_2: '彼此欣賞'
  coc_3: '體貼他人'
</i18n>
