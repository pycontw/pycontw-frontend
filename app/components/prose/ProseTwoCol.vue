<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="lg:grid lg:grid-cols-[1fr_5fr] lg:my-0 my-8 gap-4">
    <div class="text-neutral-200 text-2xl font-semibold">
      <slot name="title" mdc-unwrap="p">
        <MDC v-if="title" :value="title" />
      </slot>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>
