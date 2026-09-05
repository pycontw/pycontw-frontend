<script setup lang="ts">
import type { Reviewer } from '~/types/reviewer'

defineProps<{
  reviewers: Reviewer[]
}>()

const { t } = useI18n({ useScope: 'local' })
const openedModal = ref(false)
const openedReviewer = shallowRef<Reviewer | null>(null)
const openedTrigger = shallowRef<HTMLButtonElement | null>(null)

function openReviewerModal(reviewer: Reviewer, event: MouseEvent) {
  openedReviewer.value = reviewer
  openedTrigger.value = event.currentTarget as HTMLButtonElement
  openedModal.value = true
}
</script>

<template>
  <section aria-labelledby="reviewers-heading">
    <h2 id="reviewers-heading" class="my-8 text-3xl font-bold text-highlighted">
      {{ t('title') }}
    </h2>

    <ul class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-3 sm:gap-6 lg:gap-8">
      <li v-for="(reviewer, index) in reviewers" :key="`${reviewer.full_name}-${index}`" class="min-w-0">
        <button
          type="button"
          class="group flex w-full flex-col items-center gap-2 sm:gap-3 rounded-xl p-2 sm:p-3 text-center cursor-pointer transition-colors hover:bg-elevated focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          aria-haspopup="dialog"
          :aria-label="t('view_profile', { name: reviewer.full_name })"
          @click="openReviewerModal(reviewer, $event)"
        >
          <ReviewerAvatar
            :reviewer="reviewer"
            class="size-17 sm:size-23 border-2 border-default transition-colors group-hover:border-primary"
          />
          <span class="w-full wrap-anywhere text-sm sm:text-sm font-semibold text-highlighted">
            {{ reviewer.full_name }}
          </span>
        </button>
      </li>
    </ul>

    <ReviewerDetailModal
      v-model:open="openedModal"
      :reviewer="openedReviewer"
      @closed="openedTrigger?.focus()"
    />
  </section>
</template>

<i18n lang="yaml">
en-us:
  title: Reviewers
  view_profile: 'View {name}’s profile'
zh-hant:
  title: 審稿委員
  view_profile: '查看 {name} 的介紹'
</i18n>
