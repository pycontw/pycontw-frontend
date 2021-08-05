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
    @apply text-sm text-center font-black;
    @apply border rounded-t-lg bg-transparent cursor-pointer;
    color: #e6ba17;
    border-color: #c2a53a;
    min-width: 20%;
    @media (min-width: 767px) {
        min-width: 110px;
    }
}
.tabs__headers > .header.-selected {
    background: #e6ba17;
    color: #121023;
}

.tab {
    @apply inline-block text-xs md:text-sm rounded-2xl w-full border-2 bg-opacity-0;
    line-height: 29px;
    color: #c7c7c7;
    border-color: #c2a53a;
    box-shadow: 6px 6px 0 #c2a53a;
    padding: 20px;
}
</style>
