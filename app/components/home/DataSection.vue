<script setup lang="ts">
import type { GuidStatsData } from '../GuidStats.vue'

const { t } = useI18n({ useScope: 'local' })

const datas = computed<GuidStatsData[]>(() => [
  { head: t('hold'), value: '14', foot: t('hold_unit'), valueClass: 'from-primary-400 to-primary-900' },
  { head: t('every_year'), value: '30', foot: t('every_year_unit'), valueClass: 'from-secondary-400 to-secondary-900' },
  { head: t('audience'), value: '550', foot: t('audience_unit'), valueClass: 'from-primary-400 to-primary-900' },
])
</script>

<template>
  <GuidStats :stats="datas" />
</template>

<i18n lang="yaml">
en-us:
  hold: 'Hold'
  hold_unit: 'years'
  every_year: 'Every Year'
  every_year_unit: 'Speeches'
  audience: 'Audience'
  audience_unit: 'People'
zh-hant:
  hold: '持續舉辦'
  hold_unit: '年'
  every_year: '每年議程'
  every_year_unit: '場以上'
  audience: '參與會眾'
  audience_unit: '人以上'
</i18n>
