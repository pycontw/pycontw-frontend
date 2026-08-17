<script setup lang="ts">
const props = defineProps<{
  days: string[]
}>()

const { locale } = useI18n()
const model = defineModel<string>()
</script>

<template>
  <div class="flex *:flex-1 space-x-2">
    <button
      v-for="day, i in props.days"
      :key="day"
      type="button"
      class="rounded-xl border py-2 sm:px-4 sm:py-3 text-center transition-all duration-200 sm:space-y-1"
      :class="day === model
        ? 'border-accented bg-inverted text-inverted'
        : 'border-default bg-default hover:border-muted hover:bg-muted'"
      @click="model = day"
    >
      <div class="text-xs sm:text-sm autospace-normal" :class="day === model ? 'opacity-75' : 'text-muted'">
        {{ getLocalizedDate(toTaipeiIsoTime(day))[locale] }}
      </div>
      <h2 class="text-lg sm:text-xl font-bold">
        {{ $t('common.day_title', { number: i + 1 }) }}
      </h2>
    </button>
  </div>
</template>
