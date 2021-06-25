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
    computed: {},
    created() {
        this.tabs = this.$children
    },
    mounted() {
        this.selectTab(0)
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
    @apply ml-4;
}
.tabs__headers > .header {
    @apply inline-block ml-1 py-0.5 md:py-2 px-1 md:px-4;
    @apply text-xs md:text-sm text-center font-bold;
    @apply border-2 rounded-t-lg bg-transparent cursor-pointer;
    color: #e6ba17;
    border-color: #c2a53a;
    font-family: 'Noto Serif TC';
    min-width: 45px;
    @media (min-width: 767px) {
        min-width: 110px;
    }
}
.tabs__headers > .header.-selected {
    background: #e6ba17;
    color: #121023;
}

.tab {
    @apply inline-block text-sm rounded-2xl min-w-full;
    color: #282828;
    background: #e6ba17;
    border-color: #c2a53a;
    padding: 20px;
}
</style>
