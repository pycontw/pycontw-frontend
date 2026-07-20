<script setup lang="ts">
const images = [
  '/images/about/history/1.svg',
  '/images/about/history/2.svg',
  '/images/about/history/3.svg',
  '/images/about/history/4.svg',
  '/images/about/history/5.svg',
  '/images/about/history/6.svg',
  '/images/about/history/7.svg',
  '/images/about/history/8.svg',
  '/images/about/history/9.svg',

]
</script>

<template>
  <div class="flex flex-col justify-between">
    <div v-for="(image, index) in images" :key="index" class="w-full h-auto">
      <img :src="image" class="w-45 h-45 object-cover rounded-lg">
    </div>
  </div>
</template>
