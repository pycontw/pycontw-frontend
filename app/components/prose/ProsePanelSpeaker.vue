<script setup lang="ts">
defineProps<{
  name: string
  photo: string
}>()

const { t } = useI18n({ useScope: 'local' })
</script>

<template>
  <UiResponsiveModal
    :title="name"
    :ui="{ content: 'max-w-2xl rounded-2xl', body: 'p-6 sm:p-8' }"
  >
    <button
      type="button"
      :aria-label="t('view_bio', { name })"
      class="group flex w-full max-w-48 cursor-pointer flex-col items-center gap-3 rounded-xl p-2 text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
    >
      <img
        :src="$public(photo)"
        :alt="name"
        width="320"
        height="320"
        loading="lazy"
        class="aspect-square w-full rounded-full border-2 border-default object-cover transition-colors group-hover:border-primary"
      >
      <span class="text-xl font-semibold text-highlighted">{{ name }}</span>
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
