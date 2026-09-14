<script setup lang="ts">
import { mountPythonLogo } from 'python-logo-motion'
import imageBase64 from 'python-logo-motion/placeholder.png?inline'

const logo = useTemplateRef('logo')
let disposeLogo: (() => void) | undefined

onMounted(() => {
  if (!logo.value)
    return

  try {
    disposeLogo = mountPythonLogo(logo.value)
  } catch {}
})

onBeforeUnmount(() => {
  disposeLogo?.()
})
</script>

<template>
  <div class="motion-logo relative isolate">
    <UContainer class="hero-visual-container grid place-items-center">
      <div class="hero-visual relative overflow-visible">
        <div ref="logo" class="hero-logo pointer-events-none absolute">
          <img
            data-python-logo-placeholder
            :src="imageBase64"
            class="hero-logo-placeholder pointer-events-none absolute top-0 left-1/2 -translate-x-1/2"
            alt="Python logo"
            width="1080"
            height="1200"
            fetchpriority="high"
          >
        </div>
      </div>
    </UContainer>
    <div class="hero-stars-mask pointer-events-none absolute inset-0 -z-1">
      <LazyStarsBg color="var(--ui-text)" :star-count="400" />
    </div>
  </div>
</template>

<style scoped>
.motion-logo {
  container-type: size;
}

.hero-visual-container {
  height: 100%;
}

.hero-visual {
  aspect-ratio: var(--motion-visual-ratio, 10 / 7);
  width: min(100%, calc(100cqh * var(--motion-visual-ratio, 10 / 7)));
}

.hero-logo {
  top: 50%;
  left: 50%;
  /* Length offsets keep the logo and full-width star mask aligned. */
  transform: translate(
    calc(-50% + var(--motion-offset-x, 0px)),
    calc(-50% + var(--motion-offset-y, 0px))
  );
  aspect-ratio: 2 / 3;
  height: auto;
  width: var(--motion-logo-width, min(100%, calc(100cqw / 1.35)));
}

.hero-logo-placeholder {
  height: 100%;
  width: 135%;
  max-width: none;
}

.hero-stars-mask {
  mask-image: radial-gradient(
    circle var(--motion-mask-radius, min(24cqw, 44cqh, 22rem))
      at calc(50% + var(--motion-offset-x, 0px)) calc(50% + var(--motion-offset-y, 0px)),
    transparent var(--motion-mask-clear, 75%),
    #000 100%
  );
}
</style>
