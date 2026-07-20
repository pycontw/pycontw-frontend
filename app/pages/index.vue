<script setup lang="ts">
import { Application } from '@splinetool/runtime'

const { t } = useI18n({ useScope: 'local' })
const localePath = useLocalePath()
const canvas = useTemplateRef('canvas')
const started = ref(false)
const [DefineHeroButtons, ReuseHeroButtons] = createReusableTemplate()

onMounted(() => {
  if (canvas.value) {
    const app = new Application(canvas.value)
    app.load('/scene.splinecode')
    app.addEventListener('start', () => {
      started.value = true
    })
  }
})
</script>

<template>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <DefineHeroButtons>
    <div class="grid sm:grid-cols-2 gap-4 sm:gap-8 justify-center">
      <NuxtLink :href="localePath('/speaking/cfp')">
        <FancyButton
          class="py-2.5 px-13 sm:py-4 sm:px-14 font-semibold text-lg sm:text-xl"
          border-radius="16px"
          border-width="2px"
        >
          {{ $t('speaking.cfp') }}
        </FancyButton>
      </NuxtLink>
      <UButton
        class="py-2.5 px-13 sm:py-4 sm:px-14 font-semibold text-lg sm:text-xl rounded-2xl border-2 border-default ring-0"
        block
        color="neutral"
        variant="outline"
        to="https://forms.gle/UJjJGvbnhki9uryR8"
        target="_blank"
      >
        {{ $t('volunteer.join') }}
      </UButton>
    </div>
  </DefineHeroButtons>

  <div>
    <div class="relative flex flex-col justify-center items-center sm:h-[calc(100vh-var(--ui-header-height))] max-sm:py-20 overflow-hidden">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-video sm:h-full max-sm:h-[150%]">
        <canvas ref="canvas" :class="started && 'animate-fade-in'" />
        <div class="hero-stars-mask z-[-1] absolute top-0 left-1/2 -translate-x-1/2 h-screen w-full max-w-[2000px]">
          <LazyStarsBg color="var(--ui-text)" :star-count="400" />
        </div>
      </div>
      <div class="z-1 grid grid-rows-[1fr_auto_1fr] h-full py-8">
        <div />
        <img src="/images/hero-title.svg" alt="PyCon Taiwan" class="px-8 h-auto">
        <div class="text-center flex flex-col">
          <div class="text-lg md:text-2xl font-semibold py-4 md:py-10">
            {{ t('sub_title') }}
          </div>
          <div class="h-full flex items-center justify-center">
            <ReuseHeroButtons class="max-sm:hidden" />
          </div>
        </div>
      </div>
    </div>

    <ReuseHeroButtons class="sm:hidden py-6" />

    <UContainer>
      <MDC class="custom-content" :value="t('main')" />

      <HomeDataSection class="my-12" />

      <h2 class="my-6 text-3xl font-bold text-highlighted">
        {{ t('recent_updates') }}
      </h2>
      <HomeMediaSection class="mb-24" />
    </UContainer>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fade-in 0.4s ease-out;
}

.hero-stars-mask {
  mask-image: radial-gradient(
    ellipse clamp(18rem, 42vw, 46rem) clamp(12rem, 28vw, 30rem) at 50% 50%,
    transparent 0%,
    transparent 45%,
    rgba(0, 0, 0, 0.15) 80%,
    #000 90%
  );
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(8px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

<i18n lang="yaml">
en-us:
  sub_title: Oct 17 - 18, 2026 in Taipei
  recent_updates: Recent Updates
  main: |
    ## About PyCon

    PyCon, also known as the Python Annual Conference, is the annual event of the global Python community. The original PyCon was formed in North America in 2003, and now there are many other conferences being run in the PyCon spirit around the world.

    ## About PyCon Taiwan

    PyCon Taiwan is an annual convention in Taiwan for the discussion and promotion of the Python programming language. It is held by enthusiasts and focuses on Python technology and its versatile applications. We welcome people who are interested in Python to join PyCon Taiwan to share knowledge, exchange ideas, make connections and to help us grow our network.
zh-hant:
  sub_title: 2026 年 10 月 17 - 18 日．臺北
  recent_updates: 最新動向
  main: |
    ## 關於 PyCon

    PyCon，亦即 Python 年會，是全球 Python 社群的年度盛會。最初於 2003 成立於北美，現在世界各地皆有以 PyCon 精神而成立的會議。

    ## 關於 PyCon Taiwan

    PyCon Taiwan 為一年一度由愛好者舉辦、討論並提倡使用 Python 程式語言的會議，聚焦在 Python 技術與其多樣的可能應用的交流。我們歡迎所有對 Python 有興趣的朋友一同加入 PyCon Taiwan 來分享所學、交換想法、並且認識更多同好。
</i18n>
