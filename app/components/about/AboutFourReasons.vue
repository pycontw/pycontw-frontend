<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' })

const introImages = computed(() => [
  {
    title: t('intro_1'),
    src: '/images/about/intro-1.png',
  },
  {
    title: t('intro_2'),
    src: '/images/about/intro-2.png',
  },
  {
    title: t('intro_3'),
    src: '/images/about/intro-3.png',
  },
  {
    title: t('intro_4'),
    src: '/images/about/intro-4.png',
  },
])
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
    <div v-for="image in introImages" :key="image.title" class="relative w-full h-32 md:h-44">
      <img :src="image.src" class="w-full h-full object-cover rounded-lg">
      <div class="absolute inset-0 flex items-center justify-center">
        <h2 class="text-xl font-bold text-highlighted bg-opacity-50 px-4 py-2 rounded">
          {{ image.title }}
        </h2>
      </div>
    </div>
  </div>
</template>

<i18n lang="yaml">
en-us:
  intro_1: 'Python skills'
  intro_2: 'Awesome speeches'
  intro_3: 'Share yourself'
  intro_4: 'Look for cooperation'
zh-hant:
  intro_1: 'Python 技術分享'
  intro_2: '精彩出色的演講'
  intro_3: '重視交流討論'
  intro_4: '促成合作的場域'
</i18n>
