<template>
    <div class="scheduleDayTabs flex w-full mb-8 justify-center">
        <slot></slot>
    </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
    name: 'ScheduleDayTabs',
    mounted() {
        this.initTabs()
    },
    updated() {
        if (this.initialized) {
            return
        }
        this.initTabs()
        this.initialized = true
    },
    methods: {
        initTabs() {
            this.tabs = this.$children
            this.tabs.forEach((tab, i) => {
                const isActive = dayjs().isSame(tab.day, 'day') || i === 0
                tab.active = isActive
                if (isActive) {
                    this.updateVModel(i)
                }
            })
        },
        selectTab(selectedIndex) {
            this.tabs.forEach((tab, i) => {
                tab.active = selectedIndex === i
            })
            this.updateVModel(selectedIndex)
        },
        updateVModel(index) {
            this.$emit('input', index)
        },
    },
}
</script>

<style scoped></style>
