<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
}>()
</script>

<template>
  <UPageHeader
    :title="title"
    :description="description"
    class="custom-content"
    :ui="{ title: 'sm:text-5xl text-gradient-neutral leading-snug', description: 'whitespace-pre-line mt-6' }"
  >
    <template v-if="description" #description>
      <slot name="description" />
    </template>
  </UPageHeader>
</template>
