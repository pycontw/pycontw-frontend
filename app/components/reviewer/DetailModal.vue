<script setup lang="ts">
import type { Reviewer } from '~/types/reviewer'

defineProps<{
  reviewer: Reviewer | null
}>()

defineEmits<{
  closed: []
}>()

const open = defineModel('open', { type: Boolean, default: false })
const { t } = useI18n({ useScope: 'local' })
</script>

<template>
  <UModal
    v-model:open="open"
    :title="t('title')"
    :ui="{ content: 'max-w-2xl', title: 'wrap-anywhere' }"
    @after:leave="$emit('closed')"
  >
    <template #body>
      <div v-if="reviewer" class="flex flex-col items-center gap-6 sm:p-4">
        <div class="flex w-full flex-col items-center gap-3">
          <ReviewerAvatar :reviewer="reviewer" class="size-32 border-2 border-default" />
          <h3 class="w-full text-center wrap-anywhere text-xl font-semibold text-highlighted">
            {{ reviewer.full_name }}
          </h3>

          <ConferenceSpeechSpeakerSocialLinks
            v-if="reviewer.github_profile_url || reviewer.twitter_profile_url || reviewer.facebook_profile_url"
            :github="reviewer.github_profile_url"
            :x="reviewer.twitter_profile_url"
            :facebook="reviewer.facebook_profile_url"
          />
        </div>

        <p v-if="reviewer.bio" class="w-full whitespace-pre-line wrap-anywhere text-lg leading-relaxed text-muted">
          {{ reviewer.bio }}
        </p>
      </div>
    </template>
  </UModal>
</template>

<i18n lang="yaml">
en-us:
  title: Reviewer
zh-hant:
  title: 審稿委員
</i18n>
