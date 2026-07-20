<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' })

const datas = computed<[title: string, icon: string, description: string, url: string][]>(() => [
  [t('blog'), 'i-simple-icons:blogger', t('blog_description'), 'https://blog.pycontw.org'],
  ['PyCast', 'i-lucide:podcast', t('pycast_description'), 'https://podcasts.apple.com/us/podcast/pycon-taiwan/id1559843325'],
  ['YouTube', 'i-simple-icons:youtube', t('youtube_description'), 'https://www.youtube.com/channel/UCHLnNgRnfGYDzPCCH8qGbQw'],
])
</script>

<template>
  <div class="grid md:grid-cols-3 gap-4">
    <UPageCard
      v-for="(data, index) in datas"
      :key="index"
      class="rounded-2xl group"
      :ui="{
        container: 'gap-y-0 sm:p-5 md:p-6 lg:p-7',
      }"
      :to="data[3]"
      target="_blank"
    >
      <!-- <div class="text-2xl" :class="data[1]" /> -->
      <UIcon :name="data[1]" :size="24" class="group-hover:text-highlighted text-muted transition-colors duration-300" />
      <div class="text-lg font-semibold mb-3 mt-2 transition-colors duration-300 text-highlighted">
        {{ data[0] }}
      </div>
      <div class="text-muted">
        {{ data[2] }}
      </div>
    </UPageCard>
  </div>
</template>

<i18n lang="yaml">
en-us:
  blog: 'Blog'
  blog_description: 'Receive the latest news, must not miss the blog, we will push the latest information on blog.'
  pycast_description: 'PyCast often invites Python speakers and volunteers over the years to talk about life and Python.'
  youtube_description: 'PyCon TW uploads the video on YouTube every year. Welcome to subscribe to our channel.'
zh-hant:
  blog: '部落格'
  blog_description: '馬上接收到 PyConTW 最新資訊，一定不能錯過部落格，我們會把最新的資訊推播到部落格上。'
  pycast_description: 'PyCast 節目常邀請 Python 神人講者及歷年志工來聊聊與生活近況以及 Python 相關的二三事。'
  youtube_description: 'PyCon TW 每年固定上傳議程錄影於 YouTube ，讓大家能一同觀看，歡迎訂閱我們的頻道。'
</i18n>
