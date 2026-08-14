<script setup lang="ts">
import type { ConferenceSpeechSpeaker } from '~/types/speech'

defineProps<{
  speaker: ConferenceSpeechSpeaker
}>()
</script>

<template>
  <div class="flex space-x-4">
    <img
      :src="speaker.thumbnail_url"
      :alt="speaker.name"
      class="size-16 rounded-full border-2 border-default object-cover"
    >
    <div class="min-w-0 flex-1">
      <div class="flex items-center space-x-2">
        <div class="text-xl font-semibold text-highlighted my-1">
          {{ speaker.name }}
        </div>
        <ConferenceSpeechSpeakerSocialLinks
          :github="speaker.github_profile_url"
          :x="speaker.twitter_profile_url"
          :facebook="speaker.facebook_profile_url"
        />
      </div>
      <p class="text-muted text-lg">
        {{ speaker.bio }}
      </p>
    </div>
  </div>
</template>
