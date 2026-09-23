<script setup lang="ts">
import posters from '~/data/posters.json'

const { t } = useI18n({ useScope: 'local' })
const groups = ['community', 'professional'].map(category => ({
  category,
  posters: posters.filter(poster => poster.category === category),
}))
</script>

<template>
  <div class="space-y-10">
    <section v-for="group in groups" :key="group.category" :aria-labelledby="`posters-${group.category}`">
      <h3 :id="`posters-${group.category}`" class="mb-5 text-2xl font-semibold text-highlighted">
        {{ t(group.category) }}
      </h3>

      <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <li v-for="poster in group.posters" :key="poster.id" class="min-w-0">
          <UiResponsiveModal
            :title="poster.title"
            :description="poster.presenter"
            :ui="{
              content: 'max-w-3xl rounded-2xl bg-default shadow-2xl',
              header: 'items-start p-6 sm:p-8',
              title: 'pr-6 text-xl font-semibold leading-snug text-highlighted sm:text-2xl',
              description: 'mt-4 text-base text-muted',
              body: 'p-6 sm:p-8',
            }"
          >
            <button
              type="button"
              class="group flex h-full w-full cursor-pointer flex-col rounded-xl border border-default bg-default p-5 text-left transition-colors hover:border-accented hover:bg-elevated/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:p-6"
            >
              <span class="mb-4 flex w-full items-center justify-between gap-3">
                <UBadge color="neutral" variant="subtle" class="rounded-full font-mono">
                  {{ poster.id }}
                </UBadge>
                <UIcon name="i-lucide-arrow-up-right" class="size-4 shrink-0 text-toned group-hover:text-highlighted" />
              </span>
              <span class="text-lg font-semibold leading-snug text-highlighted">
                {{ poster.title }}
              </span>
              <span class="mt-5 flex items-start gap-2 text-sm text-muted">
                <UIcon name="i-lucide-user-round" class="mt-0.5 size-4 shrink-0" />
                <span>{{ poster.presenter }}</span>
              </span>
              <span v-if="poster.community" class="mt-2 flex items-start gap-2 text-sm text-muted">
                <UIcon name="i-lucide-building-2" class="mt-0.5 size-4 shrink-0" />
                <span>{{ poster.community }}</span>
              </span>
            </button>

            <template #title>
              <UBadge color="neutral" variant="subtle" class="mb-4 rounded-full font-mono">
                {{ poster.id }}
              </UBadge>
              <span class="block">{{ poster.title }}</span>
            </template>

            <template #description>
              <span class="flex flex-wrap gap-x-5 gap-y-3">
                <span class="flex items-start gap-2">
                  <UIcon name="i-lucide-user-round" class="mt-0.5 size-5 shrink-0" />
                  <span>{{ poster.presenter }}</span>
                </span>
                <span v-if="poster.community" class="flex items-start gap-2">
                  <UIcon name="i-lucide-building-2" class="mt-0.5 size-5 shrink-0" />
                  <span>{{ poster.community }}</span>
                </span>
              </span>
            </template>

            <template #close>
              <UButton
                icon="i-lucide-x"
                color="neutral"
                variant="ghost"
                :aria-label="t('close')"
                class="absolute top-5 end-5"
              />
            </template>

            <template #body>
              <h3 class="mb-4 flex items-center gap-2 text-lg font-semibold text-highlighted">
                <UIcon name="i-lucide-file-text" class="size-5 shrink-0" />
                {{ t('summary') }}
              </h3>
              <p class="whitespace-pre-line text-base leading-8 text-toned">
                {{ poster.summary }}
              </p>
              <ul :aria-label="t('topics')" class="mt-6 flex flex-wrap gap-2">
                <li v-for="topic in poster.topics" :key="topic">
                  <UBadge color="neutral" variant="subtle" class="rounded-full px-3 py-1.5 text-sm whitespace-normal">
                    <span aria-hidden="true">#</span>
                    {{ topic }}
                  </UBadge>
                </li>
              </ul>
            </template>
          </UiResponsiveModal>
        </li>
      </ul>
    </section>
  </div>
</template>

<i18n lang="yaml">
en-us:
  community: Community Topics
  professional: Professional Topics
  summary: Summary
  topics: Topics
  close: Close
zh-hant:
  community: 社群講
  professional: 專業講
  summary: 摘要
  topics: 主題
  close: 關閉
</i18n>
