<script setup lang="ts">
import type { ConferenceKeynote } from '~/types/keynote'
import type { ConferenceSpeechSpeaker } from '~/types/speech'

const { speaker } = defineProps<{
  speaker: ConferenceSpeechSpeaker | ConferenceKeynote
}>()

const { locale } = useI18n()

const data = computed(() => {
  if ('thumbnail_url' in speaker) {
    return {
      name: speaker.name,
      thumbnail_url: speaker.thumbnail_url,
      bio: speaker.bio,
      github_profile_url: speaker.github_profile_url,
      x_profile_url: speaker.twitter_profile_url,
      facebook_profile_url: speaker.facebook_profile_url,
    }
  } else {
    const keynote = speaker
    return {
      name: locale.value === 'zh-hant' ? keynote.speaker.name_zh_hant : keynote.speaker.name_en_us,
      thumbnail_url: keynote.speaker.photo,
      bio: locale.value === 'zh-hant' ? keynote.speaker.bio_zh_hant : keynote.speaker.bio_en_us,
      github_profile_url: keynote.social_item.github,
      x_profile_url: keynote.social_item.twitter,
      linkedin_profile_url: keynote.social_item.linkedin,
    }
  }
})
</script>

<template>
  <div class="flex space-x-4">
    <img
      :src="data.thumbnail_url"
      :alt="data.name"
      class="size-16 rounded-full border-2 border-default object-cover"
    >
    <div class="min-w-0 flex-1">
      <div class="flex items-center space-x-2">
        <div class="text-xl font-semibold text-highlighted my-1">
          {{ data.name }}
        </div>
        <ConferenceSpeechSpeakerSocialLinks
          :github="data.github_profile_url"
          :x="data.x_profile_url"
          :facebook="data.facebook_profile_url"
          :linkedin="data.linkedin_profile_url"
        />
      </div>
      <p class="text-muted text-lg">
        {{ data.bio }}
      </p>
    </div>
  </div>
</template>
