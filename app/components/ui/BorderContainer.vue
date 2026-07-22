<script setup lang="ts">
defineProps<{
  light?: boolean
}>()
</script>

<template>
  <div class="relative border border-default">
    <UiSpotlight class="z-10 absolute -top-px left-0 w-full h-px bg-spotlight" radius="33%" />
    <div v-if="light" class="absolute inset-0 top-0 left-0 overflow-hidden -z-1">
      <div class="absolute -translate-x-1/2 -translate-y-1/2 -top-1 left-1/2 w-1/3 lg:w-1/3 h-1/4 z-0 rounded-full bg-spotlight blur-[150px]" />
    </div>
    <slot />
  </div>
</template>
