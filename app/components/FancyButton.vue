<script setup lang="ts">
const {
  borderRadius = '8px',
  borderWidth = '1px',
} = defineProps<{
  borderRadius?: string
  borderWidth?: string
}>()
</script>

<template>
  <button type="button" class="fancy-button">
    <slot />
  </button>
</template>

<style scoped>
@reference "~/assets/css/main.css";

@property --fancy-button-border-angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 0deg;
}

.fancy-button {
  @apply bg-gradient-neutral hover:cursor-pointer text-highlighted duration-300 transition-colors;

  --fancy-button-border-radius: v-bind(borderRadius);
  --fancy-button-border-width: v-bind(borderWidth);

  position: relative;
  isolation: isolate;
  overflow: visible;
  border: var(--fancy-button-border-width) solid transparent;
  border-radius: var(--fancy-button-border-radius);
}

.fancy-button::before {
  position: absolute;
  z-index: -1;
  inset: calc(var(--fancy-button-border-width) * -1);
  padding: var(--fancy-button-border-width);
  content: "";
  background: conic-gradient(
    from var(--fancy-button-border-angle),
    var(--ui-primary) 0deg 30deg,
    var(--ui-border) 60deg 160deg,
    var(--ui-secondary) 190deg 210deg,
    var(--ui-border) 240deg 330deg,
    var(--ui-primary) 360deg
  );
  border-radius: var(--fancy-button-border-radius);
  pointer-events: none;
  mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  mask-composite: exclude;
  animation: fancy-button-border-spin 6s linear infinite;
}

.fancy-button:hover {
  @apply to-neutral-700;
}

@keyframes fancy-button-border-spin {
  to {
    --fancy-button-border-angle: 1turn;
  }
}
</style>
