<script setup lang="ts">
const { iso, content } = defineProps<{
  iso: string
  content?: string
  custom?: boolean
}>()
</script>

<template>
  <UiTimeZonesHelper :iso>
    <template v-if="custom">
      <slot />
    </template>
    <span v-else class="cursor-help border-b border-dashed border-current">
      <slot>{{ content }}</slot>
    </span>
  </UiTimeZonesHelper>
</template>
