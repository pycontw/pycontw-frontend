<script setup lang="ts">
defineProps<{
  showStepLine?: boolean
}>()
</script>

<template>
  <div :class="{ ['mt-6']: !showStepLine }">
    <div
      v-if="showStepLine"
      class="ml-12 h-7 border-l-[1.5px] border-dashed border-secondary-800 max-sm:hidden"
    />
    <div class="grid sm:grid-cols-[auto_1fr] sm:gap-8">
      <div class="max-sm:hidden flex h-24 w-24 items-center justify-center rounded-full border border-solid border-secondary">
        <div class="w-16 text-center font-semibold">
          <slot name="title" mdc-unwrap="p" />
        </div>
      </div>
      <div class="sm:hidden text-secondary mt-5 mb-3 text-lg font-semibold">
        <slot name="title" mdc-unwrap="p" />
      </div>
      <div
        class="my-auto flex h-full items-center leading-relaxed text-xl"
      >
        <slot name="description" mdc-unwrap="p" />
      </div>
    </div>
  </div>
</template>
