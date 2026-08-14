<script setup lang="ts">
defineProps<{
  github?: string
  x?: string
  linkedin?: string
  facebook?: string
}>()
</script>

<template>
  <div class="flex space-x-1 items-center">
    <UButton
      v-if="github"
      :to="github"
      variant="ghost"
      color="neutral"
      icon="i-simple-icons:github"
      size="sm"
    />
    <UButton
      v-if="x"
      :to="x"
      variant="ghost"
      color="neutral"
      icon="i-simple-icons:x"
      size="sm"
    />
    <UButton
      v-if="linkedin"
      :to="linkedin"
      variant="ghost"
      color="neutral"
      icon="i-simple-icons:linkedin"
      size="sm"
    />
    <UButton
      v-if="facebook"
      :to="facebook"
      variant="ghost"
      color="neutral"
      icon="i-simple-icons:facebook"
      size="sm"
    />
  </div>
</template>
