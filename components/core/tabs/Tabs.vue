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
    @apply inline-block p-2;
    @apply text-center font-black border-transparent;
    @apply border rounded-t-md bg-transparent cursor-pointer;
    font-size: 18px;
    color: #e099e1;
    min-width: 20%;
    @media (min-width: 767px) {
        min-width: 110px;
    }
}

.tabs__headers > .header.-selected {
    background: #e099e1;
    color: #262626;
}

.tab {
    @apply inline-block text-xs md:text-sm w-full bg-opacity-0 p-4;
    line-height: 29px;
    color: #cdd2e2;
    border-top: 2px solid #e099e1;
    font-size: 16px;
}

@media (min-width: 768px) {
    .tab {
        font-size: 18px;
    }
}
</style>
