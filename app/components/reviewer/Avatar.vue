<script setup lang="ts">
import type { Reviewer } from '~/types/reviewer'

const { reviewer } = defineProps<{
  reviewer: Reviewer
}>()

// The users API can return a root-relative path under /prs/media/.
const photoUrl = computed(() => reviewer.photo_url
  ? new URL(reviewer.photo_url, 'https://tw.pycon.org').href
  : undefined)
</script>

<template>
  <UAvatar
    :src="photoUrl"
    :alt="reviewer.full_name"
    icon="i-lucide:user-round"
    :ui="{ icon: 'size-1/2' }"
    loading="lazy"
  />
</template>
