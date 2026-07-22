<script setup lang="ts">
import type { CSSProperties } from 'vue'

const props = withDefaults(defineProps<{
  interactive?: boolean
  proximity?: number
  radius?: number | string
  transitionDuration?: number
}>(), {
  interactive: false,
  proximity: 120,
  radius: 120,
  transitionDuration: 300,
})

const root = useTemplateRef('root')
const mouseX = ref('50%')
const mouseY = ref('50%')
const cursorOpacity = ref(props.interactive ? 0 : 1)

let animationFrame = 0
let isTrackingCursor = false
let lastPointer: { x: number, y: number } | null = null

function scheduleUpdate(x: number, y: number) {
  lastPointer = { x, y }

  if (animationFrame) {
    return
  }

  animationFrame = window.requestAnimationFrame(updateSpotlight)
}

function cancelScheduledUpdate() {
  if (!animationFrame) {
    return
  }

  window.cancelAnimationFrame(animationFrame)
  animationFrame = 0
}

function resetMousePosition() {
  cancelScheduledUpdate()
  lastPointer = null
  mouseX.value = '50%'
  mouseY.value = '50%'
  cursorOpacity.value = 1
}

function updateSpotlight() {
  animationFrame = 0

  if (!root.value || !lastPointer) {
    cursorOpacity.value = 0
    return
  }

  const rect = root.value.getBoundingClientRect()

  if (rect.width <= 0 || rect.height <= 0) {
    cursorOpacity.value = 0
    return
  }

  const relativeX = lastPointer.x - rect.left
  const relativeY = lastPointer.y - rect.top
  mouseX.value = `${(relativeX / rect.width) * 100}%`
  mouseY.value = `${(relativeY / rect.height) * 100}%`

  const nearestX = Math.min(Math.max(lastPointer.x, rect.left), rect.right)
  const nearestY = Math.min(Math.max(lastPointer.y, rect.top), rect.bottom)
  const distance = Math.hypot(lastPointer.x - nearestX, lastPointer.y - nearestY)

  cursorOpacity.value = distance <= props.proximity ? 1 : 0
}

function handlePointerMove(event: PointerEvent) {
  if (!props.interactive) {
    return
  }

  scheduleUpdate(event.clientX, event.clientY)
}

function handleViewportChange() {
  if (props.interactive && lastPointer) {
    scheduleUpdate(lastPointer.x, lastPointer.y)
  }
}

function hideSpotlight() {
  if (!props.interactive) {
    return
  }

  cursorOpacity.value = 0
}

function startTrackingCursor() {
  if (isTrackingCursor) {
    return
  }

  cursorOpacity.value = 0
  window.addEventListener('pointermove', handlePointerMove, { passive: true })
  window.addEventListener('resize', handleViewportChange)
  window.addEventListener('blur', hideSpotlight)
  window.addEventListener('scroll', handleViewportChange, true)
  document.addEventListener('pointerleave', hideSpotlight)
  isTrackingCursor = true
}

function stopTrackingCursor() {
  if (!isTrackingCursor) {
    resetMousePosition()
    return
  }

  window.removeEventListener('pointermove', handlePointerMove)
  window.removeEventListener('resize', handleViewportChange)
  window.removeEventListener('blur', hideSpotlight)
  window.removeEventListener('scroll', handleViewportChange, true)
  document.removeEventListener('pointerleave', hideSpotlight)
  isTrackingCursor = false
  resetMousePosition()
}

onMounted(() => {
  if (props.interactive) {
    startTrackingCursor()
    return
  }

  resetMousePosition()
})

watch(() => props.interactive, (interactive) => {
  if (interactive) {
    startTrackingCursor()
    return
  }

  stopTrackingCursor()
})

onBeforeUnmount(() => {
  stopTrackingCursor()
})

const spotlightStyle = computed(() => ({
  '--mouse-x': mouseX.value,
  '--mouse-y': mouseY.value,
  '--cursor-opacity': cursorOpacity.value,
  '--radius': typeof props.radius === 'number' ? `${props.radius}px` : props.radius,
  '--transition-duration': `${props.transitionDuration}ms`,
}) as CSSProperties)
</script>

<template>
  <div
    ref="root"
    aria-hidden="true"
    class="spotlight"
    :style="spotlightStyle"
  >
    <slot />
  </div>
</template>

<style scoped>
.spotlight {
  pointer-events: none;
  mask-image: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), black 0px, rgba(0, 0, 0, 0) var(--radius, 120px));
  mask-size: 100% 100%;
  opacity: var(--cursor-opacity, 0);
  will-change: opacity, mask-image;
  transition: opacity var(--transition-duration) ease-in-out;
}
</style>
