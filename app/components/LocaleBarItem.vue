<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const isSupportHover = useMediaQuery('(hover: hover)')
const open = ref(false)
</script>

<template>
  <UPopover v-model:open="open" :mode="isSupportHover ? 'hover' : 'click'" arrow :content="{ hideWhenDetached: true }">
    <UButton color="neutral" variant="ghost" icon="i-lucide:languages" />

    <template #content>
      <div class="flex flex-col p-1">
        <UButton
          v-for="{ code, name } in locales"
          :key="code"
          :class="locale === code ? 'text-highlighted font-bold' : 'text-default'"
          :to="switchLocalePath(code)"
          block
          variant="ghost"
          color="neutral"
          size="xl"
          @click="open = false"
        >
          {{ name }}
        </UButton>
      </div>
    </template>
  </UPopover>
</template>
