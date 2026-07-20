<script setup lang="ts">
const items = [
  '/images/about/coc/intro-1.png',
  '/images/about/coc/intro-2.png',
  '/images/about/coc/intro-3.png',
]
</script>

<template>
  <div class="grid gap-6 md:gap-12 sm:grid-cols-3">
    <div v-for="value in items" :key="value" class="flex justify-center">
      <img :src="value" class="w-full h-auto rounded-xl">
    </div>
  </div>
</template>
