<template>
    <div class="px-4 pt-20">
        <core-h1 :title="$t('Schedule')"></core-h1>
        <div class="scheduleDayTabs">
            <schedule-day-tab
                v-for="(day, i) in days"
                :key="$makeKey(i, 'schedule_day_tab')"
                :index="i"
                :active="selectedDayIndex === i"
                @click.native="selectDayTab(i)"
            >
                {{ day.label }}
            </schedule-day-tab>
        </div>
        <div class="font-serif">
            <schedule-grid
                :schedule="schedulesData[selectedDayIndex]"
                :day="selectedDayIndex + 1"
            ></schedule-grid>
            <schedule-list :schedule="schedulesData[selectedDayIndex]">
            </schedule-list>
        </div>
    </div>
</template>

<script>
import i18n from '@/i18n/conference/schedule.i18n'

import CoreH1 from '@/components/core/titles/H1'
import ScheduleDayTab from '@/components/schedule/ScheduleDayTab'
import ScheduleGrid from '@/components/schedule/ScheduleGrid'
import ScheduleList from '@/components/schedule/ScheduleList'

export default {
    i18n,
    name: 'PageConferenceSchedule',
    components: {
        CoreH1,
        ScheduleDayTab,
        ScheduleGrid,
        ScheduleList,
    },
    async asyncData({ store, payload }) {
        if (payload) return { schedulesData: payload }
        await store.dispatch('$getSchedulesData')
        const schedulesData = store.state.schedulesData
        const days = schedulesData.map(({ date, name }) => {
            const formattedDate = store.app.context.$datetimeToString(date, {
                inputFormat: 'YYYY-MM-DD',
                outputFormat: 'M/D',
            })
            return { label: `${name} (${formattedDate})`, date }
        })
        return { schedulesData, days }
    },
    data() {
        return {
            selectedDayIndex: 0,
        }
    },
    activated() {
        setTimeout(() => {
            window.scrollTo(0, this.scrollPosition)
        }, 0)
    },
    deactivated() {
        this.scrollPosition =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0
    },
    methods: {
        selectDayTab(selectedIndex) {
            this.selectedDayIndex = selectedIndex
        },
    },
    head() {
        return {
            title: this.$i18n.t('Schedule'),
            meta: [
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: this.$i18n.t('Schedule'),
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: this.$i18n.t('Schedule'),
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: this.$i18n.t('Schedule'),
                },
            ],
        }
    },
}
</script>

<style lang="postcss" scoped>
.pageWrapper {
    @apply md:px-24;
}

.scheduleDayTabs {
    @apply mb-8 flex w-full justify-center;
}
</style>
