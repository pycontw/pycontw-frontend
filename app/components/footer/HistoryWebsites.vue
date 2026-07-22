<script setup lang="ts">
const historyWebsites = computed<{ text: string, link: string }[]>(() => [
  { text: '2012', link: 'https://tw.pycon.org/2012/' },
  { text: '2013', link: 'https://tw.pycon.org/2013/' },
  { text: '2014', link: 'https://tw.pycon.org/2014apac/' },
  { text: '2015', link: 'https://tw.pycon.org/2015apac/' },
  { text: '2016', link: 'https://tw.pycon.org/2016/' },
  { text: '2017', link: 'https://tw.pycon.org/2017/' },
  { text: '2018', link: 'https://tw.pycon.org/2018/' },
  { text: '2019', link: 'https://tw.pycon.org/2019/' },
  { text: '2020', link: 'https://tw.pycon.org/2020/' },
  { text: '2021', link: 'https://tw.pycon.org/2021/' },
  { text: '2022', link: 'https://tw.pycon.org/2022/' },
  { text: '2023', link: 'https://tw.pycon.org/2023/' },
  { text: '2024', link: 'https://tw.pycon.org/2024/' },
  { text: '2025', link: 'https://tw.pycon.org/2025/' },
].reverse())

const firstYear = computed(() => historyWebsites.value[0]!)
const lastYear = computed(() => historyWebsites.value.at(-1)!)
const scrollYears = computed(() => historyWebsites.value.slice(1, historyWebsites.value.length - 1).map(item => item.text))

const isSupportHover = useMediaQuery('(hover: hover)')
</script>

<template>
  <div class="text-sm text-muted tabular-nums">
    <ULink :to="firstYear.link" class="block" target="_blank">
      {{ firstYear.text }}
    </ULink>
    <div class="flex flex-col items-start">
      <UPopover :mode="isSupportHover ? 'hover' : 'click'" :content="{ side: 'right', align: 'center', sideOffset: -44 }">
        <FooterYearScroller class="my-1.5 opacity-50 cursor-pointer" :years="scrollYears" />
        <template #content>
          <div class="grid grid-cols-4 gap-2 py-2 px-2.5 text-sm tabular-nums">
            <ULink v-for="year in historyWebsites" :key="year.text" :to="year.link" target="_blank">
              {{ year.text }}
            </ULink>
          </div>
        </template>
      </UPopover>
    </div>
    <ULink :to="lastYear.link" class="block" target="_blank">
      {{ lastYear.text }}
    </ULink>
  </div>
</template>
