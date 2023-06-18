<template>
    <div class="mt-[44px] flex w-full justify-center gap-2">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'VenueTabs',
    mounted() {
        this.initTabs()
    },
    updated() {
        if (this.initialized) {
            return
        }
        this.initTabs()
    },
    methods: {
        initTabs() {
            this.tabs = this.$children
            this.initialized = true
            this.tabs.forEach((tab, i) => {
                const isActive = i === 0
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
