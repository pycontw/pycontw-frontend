<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' })
const { data: jobs, error, status, refresh } = await useAsyncData('jobs', () => {
  return queryCollection('jobs').order('stem', 'ASC').all()
})
</script>

<template>
  <div>
    <div v-if="error" role="alert" class="rounded-xl border border-default p-6">
      <p class="mb-4 text-muted">
        {{ t('load_error') }}
      </p>
      <UButton color="neutral" variant="outline" :loading="status === 'pending'" @click="refresh()">
        {{ t('retry') }}
      </UButton>
    </div>
    <ul v-else-if="jobs?.length" class="space-y-4">
      <li v-for="job in jobs" :key="job.id">
        <UiResponsiveModal
          :title="job.job_title"
          :ui="{
            content: 'max-w-3xl rounded-2xl bg-default shadow-2xl',
            header: 'shrink-0 items-start p-6 sm:px-8 sm:py-5.5',
            title: 'pr-6 text-xl font-semibold leading-snug text-highlighted sm:text-xl',
            body: 'min-h-0 p-6 sm:p-8',
            footer: 'shrink-0 p-0 sm:p-0',
          }"
        >
          <button
            type="button"
            class="group relative flex w-full cursor-pointer flex-col overflow-hidden rounded-xl border border-default bg-default text-left transition-colors hover:border-accented hover:bg-elevated/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:flex-row sm:items-center sm:gap-5 sm:p-6"
          >
            <img
              :src="$public(job.logo)"
              :alt="job.company"
              class="aspect-[2/1] h-auto w-full shrink-0 bg-white object-contain object-center p-8 sm:aspect-auto sm:h-20 sm:w-40 sm:rounded-lg sm:p-3"
              width="160"
              height="80"
              loading="lazy"
            >
            <span class="min-w-0 flex-1 p-5 pr-14 sm:p-0">
              <span class="block text-lg font-semibold leading-snug text-highlighted sm:text-xl">
                {{ job.job_title }}
              </span>
              <span class="mt-2 block text-sm text-muted">
                {{ job.company }}
              </span>
            </span>
            <UIcon name="i-lucide-arrow-up-right" class="absolute right-5 bottom-5 size-5 shrink-0 text-toned group-hover:text-highlighted sm:static" />
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
            <section class="mb-8 border-b border-default pb-8">
              <div class="flex flex-wrap items-center gap-3">
                <img
                  :src="$public(job.logo)"
                  alt=""
                  class="h-10 w-20 rounded-lg bg-white object-contain p-2"
                >
                <h2 class="text-lg font-semibold text-highlighted">
                  {{ job.company }}
                </h2>
              </div>
              <p v-if="job.company_description" class="mt-4 whitespace-pre-line text-base leading-7 text-muted">
                {{ job.company_description }}
              </p>
            </section>
            <ContentRenderer :value="job" class="job-content" />
          </template>

          <template #footer>
            <UButton
              :to="job.apply_url"
              target="_blank"
              rel="noopener noreferrer"
              trailing-icon="i-lucide-arrow-up-right"
              size="lg"
              class="w-full justify-center rounded-none py-4"
            >
              {{ t('apply') }}
            </UButton>
          </template>
        </UiResponsiveModal>
      </li>
    </ul>
    <ConferenceStayTunedNotice v-else />
  </div>
</template>

<style scoped>
@reference "../../assets/css/main.css";

.job-content :deep(> :first-child) {
  @apply mt-0;
}

.job-content :deep(> :last-child) {
  @apply mb-0;
}
</style>

<i18n lang="yaml">
en-us:
  apply: Apply now
  close: Close
  load_error: Unable to load job openings. Please try again.
  retry: Try again
zh-hant:
  apply: 立即應徵
  close: 關閉
  load_error: 無法載入職缺，請稍後再試。
  retry: 重新載入
</i18n>
