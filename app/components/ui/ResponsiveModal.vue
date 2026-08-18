<script setup lang="ts">
import { createReusableTemplate } from '@vueuse/core'

defineEmits<{
  closed: []
}>()
const [DefineBodyTemplate, ReuseBodyTemplate] = createReusableTemplate()
const open = defineModel('open', { type: Boolean, default: false })
</script>

<template>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <DefineBodyTemplate>
    <slot name="body" />
  </DefineBodyTemplate>

  <UiDrawer
    v-if="isMobileScreen"
    v-model:open="open"
    @closed="$emit('closed')"
  >
    <template #body>
      <div class="p-4 overflow-y-auto">
        <ReuseBodyTemplate />
      </div>
    </template>
  </UiDrawer>

  <UModal
    v-else
    v-model:open="open"
    :ui="{ content: 'max-w-5xl' }"
    @after:leave="$emit('closed')"
  >
    <template #body>
      <ReuseBodyTemplate />
    </template>
  </UModal>
</template>
