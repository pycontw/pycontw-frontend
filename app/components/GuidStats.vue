<script lang="ts">
export interface GuidStatsData {
  head: string
  value: string
  foot: string
  valueClass?: string
}
</script>

<script setup lang="ts">
defineProps<{
  stats: GuidStatsData[]
}>()
</script>

<template>
  <UiBorderContainer light class="grid sm:grid-cols-3 rounded-2xl py-8 sm:py-14">
    <template v-for="(data, index) in stats" :key="index">
      <div class="flex flex-col items-center justify-center space-y-6">
        <div class="text-2xl font-semibold">
          {{ data.head }}
        </div>
        <div class="text-5xl lg:text-7xl font-bold bg-linear-to-br bg-clip-text text-transparent" :class="data.valueClass">
          {{ data.value }}
        </div>
        <div class="text-2xl">
          {{ data.foot }}
        </div>
      </div>
      <hr v-if="index < stats.length - 1" class="sm:hidden w-full border-t border-default my-8">
    </template>
  </UiBorderContainer>
</template>
