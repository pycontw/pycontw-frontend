<script setup lang="ts">
import type { Reviewer } from '~/types/reviewer'

defineProps<{
  reviewer: Reviewer | null
}>()

defineEmits<{
  closed: []
}>()

const open = defineModel('open', { type: Boolean, default: false })
</script>

<template>
  <UModal
    v-model:open="open"
    :title="reviewer?.full_name"
    :ui="{ content: 'max-w-2xl', title: 'wrap-anywhere' }"
    @after:leave="$emit('closed')"
  >
    <template #body>
      <div v-if="reviewer" class="flex flex-col items-center gap-6 sm:p-4">
        <ReviewerAvatar :reviewer="reviewer" class="size-32 border-2 border-default" />

        <ConferenceSpeechSpeakerSocialLinks
          v-if="reviewer.github_profile_url || reviewer.twitter_profile_url || reviewer.facebook_profile_url"
          :github="reviewer.github_profile_url"
          :x="reviewer.twitter_profile_url"
          :facebook="reviewer.facebook_profile_url"
        />

        <p v-if="reviewer.bio" class="w-full whitespace-pre-line wrap-anywhere text-lg leading-relaxed text-muted">
          {{ reviewer.bio }}
        </p>
      </div>
    </template>
  </UModal>
</template>
