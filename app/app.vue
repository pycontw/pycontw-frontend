<script setup lang="ts">
const { pycon: { year } } = useAppConfig()

useHead({
  titleTemplate: (title) => {
    return title ? `${title} | PyCon TW ${year}` : `PyCon TW ${year}`
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', sizes: '48x48', href: $public('/favicon.ico') },
  ],
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
