<script setup lang="ts">
import type { ModalProps } from '@nuxt/ui'
import { createReusableTemplate } from '@vueuse/core'
import { DrawerClose, DrawerDescription, DrawerTitle } from 'reka-ui'

defineProps<{
  title?: string
  description?: string
  ui?: ModalProps['ui']
}>()

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
    <template v-if="$slots.default" #default>
      <slot />
    </template>
    <template #body>
      <div class="relative min-h-0 p-4 overflow-y-auto">
        <div v-if="title || $slots.title || description || $slots.description" class="mb-6 border-b border-default pb-6 pr-8">
          <DrawerTitle v-if="title || $slots.title" class="text-xl font-semibold leading-snug text-highlighted">
            <slot name="title">
              {{ title }}
            </slot>
          </DrawerTitle>
          <DrawerDescription v-if="description || $slots.description" class="mt-4 text-base text-muted">
            <slot name="description">
              {{ description }}
            </slot>
          </DrawerDescription>
        </div>
        <DrawerClose v-if="$slots.close" as-child>
          <slot name="close" />
        </DrawerClose>
        <ReuseBodyTemplate />
      </div>
    </template>
  </UiDrawer>

  <UModal
    v-else
    v-model:open="open"
    :title="title"
    :description="description"
    :ui="{ content: 'max-w-5xl', ...ui }"
    @after:leave="$emit('closed')"
  >
    <template v-if="$slots.default" #default>
      <slot />
    </template>
    <template v-if="$slots.title" #title>
      <slot name="title" />
    </template>
    <template v-if="$slots.description" #description>
      <slot name="description" />
    </template>
    <template v-if="$slots.close" #close>
      <slot name="close" />
    </template>
    <template #body>
      <ReuseBodyTemplate />
    </template>
  </UModal>
</template>
