<script setup lang="ts">
const props = defineProps<{
  days: string[]
}>()

const model = defineModel<string>()
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <button
      v-for="day in props.days"
      :key="day"
      type="button"
      class="min-w-60 rounded-xl border px-5 py-4 text-left transition-all duration-200"
      :class="day === model
        ? 'border-primary-300/50 bg-primary-400/20 shadow-lg shadow-primary-950/20'
        : 'border-default bg-default hover:border-muted hover:bg-muted'"
      @click="model = day"
    >
      <h2 class="text-lg font-semibold">
        {{ day }}
      </h2>
    </button>
  </div>
</template>
