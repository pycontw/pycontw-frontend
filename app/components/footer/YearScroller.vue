<script setup lang="ts">
const props = withDefaults(defineProps<{
  years: Array<number | string>
  rowHeight?: number
  visibleRows?: number
  duration?: number
}>(), {
  rowHeight: (88 - 6 * 2) / 3,
  visibleRows: 3,
  duration: 12,
})

const isHydrated = ref(false)

const scrollerYears = computed(() => (
  isHydrated.value ? [...props.years, ...props.years] : props.years
))

const scrollerStyle = computed(() => ({
  '--footer-year-row-height': `${props.rowHeight}px`,
  '--footer-year-visible-rows': `${props.visibleRows}`,
  '--footer-year-scroll-distance': `-${props.years.length * props.rowHeight}px`,
  '--footer-year-scroll-duration': `${props.duration}s`,
}))

onMounted(() => {
  isHydrated.value = true
})
</script>

<template>
  <div
    class="footer-year-scroller"
    :style="scrollerStyle"
    :aria-label="years.join(', ')"
  >
    <div
      class="footer-year-list"
      :class="{ 'footer-year-list--animated': isHydrated }"
      aria-hidden="true"
    >
      <div
        v-for="(year, index) in scrollerYears"
        :key="`${year}-${index}`"
        class="footer-year-item"
      >
        {{ year }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer-year-scroller {
  height: calc(var(--footer-year-row-height) * var(--footer-year-visible-rows));
  line-height: var(--footer-year-row-height);
  overflow: hidden;
  mask-image: linear-gradient(
    to bottom,
    transparent,
    #000 20%,
    #000 80%,
    transparent
  );
}

.footer-year-list--animated {
  animation: footer-year-scroll var(--footer-year-scroll-duration) linear infinite;
  will-change: transform;
}

.footer-year-item {
  display: flex;
  align-items: center;
  height: var(--footer-year-row-height);
}

@keyframes footer-year-scroll {
  to {
    transform: translateY(var(--footer-year-scroll-distance));
  }
}

@media (prefers-reduced-motion: reduce) {
  .footer-year-list--animated {
    animation: none;
  }
}
</style>
