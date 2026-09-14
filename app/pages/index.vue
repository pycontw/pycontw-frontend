<script setup lang="ts">
import type { Reviewer } from '~/types/reviewer'
import type { SponsorApiEnvelope } from '~/types/sponsor'

const [{ data: sponsorsData }, { data: reviewers }] = await Promise.all([
  useApiFetch<SponsorApiEnvelope>('/sponsors/'),
  useApiFetch<Reviewer[]>('/users?role=Reviewer'),
])

const { t } = useI18n({ useScope: 'local' })
const localePath = useLocalePath()
</script>

<template>
  <div>
    <div class="hero-fold flex flex-col">
      <HomeMotionLogo class="hero-section flex-1" />

      <UContainer class="shrink-0">
        <div class="flex flex-col justify-center">
          <img src="/images/hero-title-slogan.svg" alt="PyCon Taiwan" class="self-center px-8 w-5/6 sm:w-5/9 h-auto">

          <div class="text-center flex flex-col mt-2 md:mt-10">
            <div class="text-lg sm:text-2xl font-semibold py-6 md:pb-6 md:pt-6 sm:flex sm:items-center sm:justify-center">
              <div>{{ t('hero.date') }}</div>
              <div class="hidden sm:inline mx-1.5">
                ·
              </div>
              <div>{{ t('hero.location') }}</div>
            </div>
            <div class="flex items-center justify-center">
              <div class="grid sm:grid-cols-2 gap-4 sm:gap-8 justify-center">
                <NuxtLink :href="localePath('/registration/tickets')">
                  <FancyButton
                    class="py-2.5 px-13 sm:py-4 sm:px-14 font-semibold text-lg sm:text-xl"
                    border-radius="16px"
                    border-width="2px"
                  >
                    {{ $t('registration.get_tickets') }}
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
            </div>
          </div>
        </div>
      </UContainer>
    </div>

    <UContainer class="pb-12">
      <MDC class="custom-content" :value="t('main')" />

      <HomeDataSection class="my-12" />

      <h2 class="my-6 text-3xl font-bold text-highlighted">
        {{ t('recent_updates') }}
      </h2>
      <HomeMediaSection class="mb-12" />

      <template v-if="sponsorsData?.data?.length">
        <h2 class="my-8 text-3xl font-bold text-highlighted">
          {{ t('sponsor.list') }}
        </h2>
        <HomeSponsorsSection :sponsor-groups="sponsorsData.data" class="mb-12" />
      </template>

      <HomeReviewersSection v-if="reviewers?.length" :reviewers="reviewers" class="mb-12" />
    </UContainer>
  </div>
</template>

<style scoped>
@reference "~/assets/css/main.css";

/* Motion logo size */
.hero-fold {
  height: calc(100svh - var(--ui-header-height));
  min-height: min-content;
  max-height: 37.5rem;
  padding-bottom: 1.5rem;
}

.hero-section {
  --motion-visual-ratio: 10 / 7;
  --motion-logo-width: min(100%, calc(100cqw / 1.35));
  --motion-offset-x: 0px;
  --motion-offset-y: 0px;
  --motion-mask-radius: min(24cqw, 44cqh, 22rem);
  --motion-mask-clear: 75%;

  @apply min-h-32 sm:min-h-80 lg:py-6;
}

@media (width >= theme(--breakpoint-sm)) {
  .hero-fold {
    height: calc(90svh - var(--ui-header-height));
    max-height: none;
  }
}

.animate-fade-in {
  animation: fade-in 0.4s ease-out;
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
  hero:
    date: Oct 17 - 18, 2026
    location: Taipei Medical University
  recent_updates: Recent Updates
  main: |
    ## About PyCon

    PyCon, also known as the Python Annual Conference, is the annual event of the global Python community. The original PyCon was formed in North America in 2003, and now there are many other conferences being run in the PyCon spirit around the world.

    ## About PyCon Taiwan

    PyCon Taiwan is an annual convention in Taiwan for the discussion and promotion of the Python programming language. It is held by enthusiasts and focuses on Python technology and its versatile applications. We welcome people who are interested in Python to join PyCon Taiwan to share knowledge, exchange ideas, make connections and to help us grow our network.
zh-hant:
  hero:
    date: 2026 年 10 月 17 - 18 日
    location: 臺北醫學大學
  recent_updates: 最新動向
  main: |
    ## 關於 PyCon

    PyCon，亦即 Python 年會，是全球 Python 社群的年度盛會。最初於 2003 成立於北美，現在世界各地皆有以 PyCon 精神而成立的會議。

    ## 關於 PyCon Taiwan

    PyCon Taiwan 為一年一度由愛好者舉辦、討論並提倡使用 Python 程式語言的會議，聚焦在 Python 技術與其多樣的可能應用的交流。我們歡迎所有對 Python 有興趣的朋友一同加入 PyCon Taiwan 來分享所學、交換想法、並且認識更多同好。
</i18n>
