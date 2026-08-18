<script setup lang="ts">
const { speakers } = defineProps<{
  speakers: {
    name: string
    thumbnail_url: string
  }[]
}>()

const speakerNames = computed(() => speakers.map(({ name }) => name).join(', '))
</script>

<template>
  <div class="flex items-center gap-3">
    <div class="flex shrink-0 -space-x-3">
      <img
        v-for="speaker in speakers"
        :key="speaker.name"
        :src="speaker.thumbnail_url"
        :alt="speaker.name"
        class="h-10 w-10 rounded-full border-2 border-default object-cover"
      >
    </div>

    <div class="min-w-0 flex-1">
      <p class="text-base font-semibold text-highlighted">
        {{ speakerNames }}
      </p>
    </div>
  </div>
</template>
