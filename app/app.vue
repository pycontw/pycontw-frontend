<script setup lang="ts">
const { pycon: { year } } = useAppConfig()

useHead({
  titleTemplate: (title) => {
    return title ? `${title} | PyCon TW ${year}` : `PyCon TW ${year}`
  },
})
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator color="var(--ui-text-highlighted)" :height="2" />

    <TheHeader />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <TheFooter />
  </UApp>
</template>
