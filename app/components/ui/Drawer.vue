<script setup lang="ts">
import {
  DrawerContent,
  DrawerHandle,
  DrawerOverlay,
  DrawerPortal,
  DrawerRoot,
} from 'reka-ui'

const emit = defineEmits<{
  closed: []
}>()

const open = defineModel('open', { type: Boolean, default: false })

async function handleUpdateOpen(value: boolean) {
  if (!value) {
    // TODO: wait for animation end
    await new Promise(resolve => setTimeout(resolve, 300))
    emit('closed')
  }
}
</script>

<template>
  <DrawerRoot v-model:open="open" @update:open="handleUpdateOpen">
    <DrawerPortal>
      <DrawerOverlay class="DrawerOverlay fixed inset-0 z-30 bg-black/75" />

      <DrawerContent
        class="DrawerContent max-h-[95vh] fixed inset-x-0 bottom-0 z-100 mx-auto flex flex-col bg-default outline-none border-t border-default"
      >
        <DrawerHandle class="mx-auto mt-3 h-1.5 w-12 shrink-0 rounded-full bg-border" />
        <slot name="body" />
      </DrawerContent>
    </DrawerPortal>
  </DrawerRoot>
</template>

<!--
  These styles are not scoped: DrawerContent / DrawerOverlay are teleported to
  `body` by DrawerPortal, so a `scoped` block would not reach them. They drive
  the enter/exit animation and the live swipe-to-dismiss transform — behaviour
  Tailwind utility classes alone cannot express.
-->
<style scoped>
.DrawerOverlay[data-state="open"] {
  animation: drawer-overlay-in 450ms cubic-bezier(0.32, 0.72, 0, 1);
}
.DrawerOverlay[data-state="closed"] {
  animation: drawer-overlay-out 450ms cubic-bezier(0.32, 0.72, 0, 1);
}

.DrawerContent {
  /* `--drawer-swipe-movement-y` is written by DrawerContent while dragging. */
  transform: translateY(var(--drawer-swipe-movement-y, 0px));
  transition: transform 450ms cubic-bezier(0.32, 0.72, 0, 1);
  will-change: transform;

  /*
  `--bleed` is extra drawer area hanging below the viewport edge, kept
  off-screen by an equal negative margin. Pulling the drawer away from
  its edge slides the bleed into view instead of exposing the overlay,
  so the drawer stretches rather than detaching while it rubber-bands.
  */
  --bleed: 48px;
  margin-bottom: calc(var(--bleed) * -1);
  padding-bottom: calc(env(safe-area-inset-bottom, 0px) + var(--bleed));
}
/* Enter/exit keyframes animate the independent `translate` property so they
   compose with the inline `transform` carrying the live drag offset. */
.DrawerContent[data-state="open"] {
  animation: drawer-slide-bottom-in 450ms cubic-bezier(0.32, 0.72, 0, 1);
}
.DrawerContent[data-state="closed"] {
  animation: drawer-slide-bottom-out 450ms cubic-bezier(0.32, 0.72, 0, 1);
}
/* Silence the transform transition during an active drag so it tracks the
   pointer in real time. */
.DrawerContent[data-swiping] {
  transition-duration: 0ms;
  user-select: none;
}

@keyframes drawer-overlay-in { from { opacity: 0; } }
@keyframes drawer-overlay-out { to { opacity: 0; } }
/* The bleed already sits below the viewport edge, so the drawer only has to
   travel `height - bleed` to clear it. A full 100% would overshoot by the
   bleed and make the slide look faster than it is. */
@keyframes drawer-slide-bottom-in { from { translate: 0 calc(100% - var(--bleed)); } }
@keyframes drawer-slide-bottom-out { to { translate: 0 calc(100% - var(--bleed)); } }
</style>
