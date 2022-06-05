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
    @apply ml-3 font-serif;
}
.tabs__headers > .header {
    @apply inline-block ml-1 py-2 px-2;
    @apply text-sm md:text-base text-center font-black;
    @apply border rounded-t-lg bg-transparent cursor-pointer border-pink-500;
    color: #e6ba17;
    min-width: 20%;
    @media (min-width: 767px) {
        min-width: 110px;
    }
}
.tabs__headers > .header.-selected {
    @apply text-black-900;
    background: #e6ba17;
}

.tab {
    @apply inline-block text-xs md:text-sm rounded-2xl w-full border-2 bg-opacity-0 border-pink-500 shadow-pink-500;
    line-height: 29px;
    color: #c7c7c7;
    padding: 20px;
}
</style>
