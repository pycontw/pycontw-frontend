<script setup lang="ts">
const { maxHeight = 110, overflow = false, moreText = 'More...' } = defineProps<{
  overflow?: boolean
  maxHeight?: number
  maxHeightMultiplier?: number
  moreText?: string
}>()

const el = useTemplateRef('el')
const overflowed = ref(overflow)
const expanded = ref(false)

onMounted(() => {
  if (!el.value || expanded.value || overflowed.value)
    return

  if (el.value.offsetHeight > maxHeight) {
    overflowed.value = true
  } else {
    expanded.value = true
  }
})
</script>

<template>
  <div
    class="relative"
    :style="{ '--shrink-max-h': `${maxHeight}px` }"
    :class="!expanded && 'auto-shrink'"
  >
    <div ref="el" :class="overflowed && !expanded && 'shrink-overflowed'">
      <slot />
    </div>

    <div
      v-if="overflowed && !expanded"
      class="z-10 absolute bottom-0 w-full flex flex-col items-center"
    >
      <button
        class="w-full flex flex-col items-center text-muted"
        @click.stop.prevent="expanded = true"
      >
        <span class="text-sm font-bold">{{ moreText }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.auto-shrink {
  overflow: hidden;
  max-height: var(--shrink-max-h);

  .shrink-overflowed {
    max-height: var(--shrink-max-h);
    mask-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.037) 17.6%,
      rgba(0, 0, 0, 0.136) 31.2%,
      rgba(0, 0, 0, 0.204) 37%,
      rgba(0, 0, 0, 0.63) 63%,
      rgba(0, 0, 0, 1.0)
    );
  }
}
</style>
