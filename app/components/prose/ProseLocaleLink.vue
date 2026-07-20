<script setup lang="ts">
defineProps<{
  title?: string
  href?: string
}>()
</script>

<template>
  <ProseA :href="href ? $localePath(href) : undefined">
    <slot>{{ title }}</slot>
  </ProseA>
</template>
