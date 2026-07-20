<script setup lang="ts">
if (!import.meta.dev)
  throw new Error('This page is only available in development mode.')
const { data } = await useApiFetch<any>('/events/keynotes')
</script>

<template>
  <DevOnly>
    <pre>{{ data }}</pre>
  </DevOnly>
</template>
