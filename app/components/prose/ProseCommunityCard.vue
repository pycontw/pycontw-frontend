<template>
  <aside class="community-card my-10 rounded-xl border border-default bg-elevated/40 p-5 text-sm leading-6 text-muted sm:p-6">
    <slot />
  </aside>
</template>

<style scoped>
@reference "../../assets/css/main.css";

.community-card :deep(h2.prose) {
  @apply mt-0 mb-4 text-lg leading-7 font-semibold text-toned;
}

.community-card :deep(p.prose),
.community-card :deep(li.prose) {
  @apply my-3 text-sm leading-6 text-muted;
}

.community-card :deep(strong) {
  @apply font-semibold text-toned;
}

.community-card :deep(> :last-child) {
  @apply mb-0;
}
</style>
