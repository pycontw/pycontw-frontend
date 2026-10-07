<script setup lang="ts">
defineProps<{
  name: string
  photo: string
  compact?: boolean
  nonInteractive?: boolean
}>()

const { t } = useI18n({ useScope: 'local' })
</script>

<template>
  <div
    v-if="nonInteractive"
    class="flex items-center gap-3 rounded-xl"
    :class="compact ? 'max-w-full py-2 pr-2 text-left' : 'w-full max-w-48 flex-col p-2 text-center'"
  >
    <img
      :src="$public(photo)"
      :alt="name"
      width="320"
      height="320"
      loading="lazy"
      class="aspect-square rounded-full border-2 border-default object-cover"
      :class="compact ? 'size-10 shrink-0' : 'w-full'"
    >
    <span class="min-w-0 font-semibold text-highlighted" :class="compact ? 'text-base wrap-anywhere' : 'text-xl'">{{ name }}</span>
  </div>
  <UiResponsiveModal
    v-else
    :title="name"
    :ui="{ content: 'max-w-2xl rounded-2xl', body: 'p-6 sm:p-8' }"
  >
    <button
      type="button"
      :aria-label="t('view_bio', { name })"
      class="group flex cursor-pointer items-center gap-3 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      :class="compact ? 'max-w-full py-2 pr-2 text-left' : 'w-full max-w-48 flex-col p-2 text-center'"
    >
      <img
        :src="$public(photo)"
        :alt="name"
        width="320"
        height="320"
        loading="lazy"
        class="aspect-square rounded-full border-2 border-default object-cover transition-colors group-hover:border-primary"
        :class="compact ? 'size-10 shrink-0' : 'w-full'"
      >
      <span class="min-w-0 font-semibold text-highlighted" :class="compact ? 'text-base wrap-anywhere' : 'text-xl'">{{ name }}</span>
      <UIcon
        v-if="compact"
        name="i-lucide-arrow-up-right"
        aria-hidden="true"
        class="-ml-2 size-4 shrink-0 text-muted transition-colors group-hover:text-primary"
      />
    </button>

    <template #close>
      <UButton
        icon="i-lucide-x"
        color="neutral"
        variant="ghost"
        :aria-label="t('close')"
        class="absolute top-5 end-5"
      />
    </template>

    <template #body>
      <img
        :src="$public(photo)"
        :alt="name"
        width="160"
        height="160"
        class="mx-auto mb-6 size-40 rounded-full border-2 border-default object-cover"
      >
      <div class="text-base leading-8 text-toned [&_p]:my-4 [&_li]:my-1">
        <slot />
      </div>
    </template>
  </UiResponsiveModal>
</template>

<i18n lang="yaml">
en-us:
  view_bio: 'View {name}’s biography'
  close: Close
zh-hant:
  view_bio: '查看 {name} 的簡介'
  close: 關閉
</i18n>
