<script setup lang="ts">
import type { GuidStatsData } from '../GuidStats.vue'

const { t } = useI18n({ useScope: 'local' })

const datas = computed<GuidStatsData[]>(() => [
  { head: t('t1'), value: '240+', foot: t('t1_unit'), valueClass: 'from-primary-400 to-primary-900' },
  { head: t('t2'), value: '6000+', foot: t('t2_unit'), valueClass: 'from-secondary-400 to-secondary-900' },
  { head: t('t3'), value: '10K+', foot: t('t3_unit'), valueClass: 'from-primary-400 to-primary-900' },
])
</script>

<template>
  <GuidStats :stats="datas" />
</template>

<i18n lang="yaml">
en-us:
  t1: 'Technical Talks'
  t1_unit: 'Sessions'
  t2: 'Participants'
  t2_unit: 'People'
  t3: 'Social Media'
  t3_unit: 'Followers'
zh-hant:
  t1: '技術演講'
  t1_unit: '場次'
  t2: '參與會眾'
  t2_unit: '人次'
  t3: '社群媒體'
  t3_unit: '追蹤關注'
</i18n>
