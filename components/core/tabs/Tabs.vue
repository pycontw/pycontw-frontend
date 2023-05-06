<template>
    <div>
        <ul class="tabs__headers">
            <li
                v-for="(tab, index) in tabs"
                :key="tab.title"
                :class="{ header: true, '-selected': isSelectedIndex(index) }"
                @click="selectTab(index)"
            >
                {{ tab.title }}
            </li>
        </ul>
        <slot></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedIndex: 0,
            tabs: [],
        }
    },
    created() {
        this.tabs = this.$children
    },
    mounted() {
        this.selectTab(0)
        this.$root.$on('initTabs', () => {
            this.selectTab(0)
        })
    },
    methods: {
        selectTab(i) {
            this.selectedIndex = i
            this.tabs.forEach((tab, index) => {
                tab.isActive = index === i
            })
        },
        isSelectedIndex(i) {
            return i === this.selectedIndex
        },
    },
}
</script>

<style lang="postcss" scoped>
.tabs__headers {
    @apply font-serif;
}

.tabs__headers > .header {
    @apply inline-block px-[22px] py-[13px];
    @apply border-transparent text-center font-black text-pink-700;
    @apply cursor-pointer rounded-t-md border bg-transparent;
    font-size: 18px;
    min-width: 20%;
    @media (min-width: 767px) {
        min-width: 110px;
    }
}

.tabs__headers > .header.-selected {
    @apply bg-pink-700;
    color: #262626;
}

.tab {
    @apply inline-block w-full bg-opacity-0 p-4 text-xs text-black-200 md:text-sm;
    @apply border-t-2 border-solid border-pink-700;
    line-height: 29px;
    font-size: 16px;
}

@media (min-width: 768px) {
    .tab {
        font-size: 18px;
    }
}
</style>
