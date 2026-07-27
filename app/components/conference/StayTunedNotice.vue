<script setup lang="ts">
const { content, icon = 'i-lucide:megaphone' } = defineProps<{
  content?: string
  icon?: string
}>()

const _content = computed(() => {
  if (content === undefined) {
    return $t('common.stay_tuned')
  }
  return content
})
</script>

<template>
  <div class="border border-default py-6 sm:py-12 px-6 rounded-lg md:rounded-2xl flex flex-col items-center justify-center">
    <UIcon v-if="icon" :name="icon" class="size-12 sm:size-16 text-dimmed opacity-75 mb-4" />
    <div class="text-center text-muted text-lg sm:text-xl">
      <slot>
        <template v-if="_content">
          {{ _content }}
        </template>
      </slot>
    </div>
  </div>
</template>
