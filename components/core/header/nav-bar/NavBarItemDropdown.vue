<template>
    <div
        class="relative flex h-full items-center justify-center px-8 text-left"
        @mouseenter="showMenu"
        @mouseleave="hideMenu"
    >
        <div
            class="relative flex h-full cursor-pointer flex-col items-start rounded-md"
        >
            <div
                id="options-menu"
                class="options-menu focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                aria-haspopup="true"
                aria-expanded="true"
            >
                <slot v-if="$slots.label" name="label"></slot>
                {{ label }}
                <fa
                    :icon="['fa', 'caret-down']"
                    aria-hidden="true"
                    class="ml-3"
                ></fa>
            </div>
            <transition name="core-menu-fade">
                <core-menu v-show="isHovering" :lg="lg" :sm="sm">
                    <transition name="core-menu-mask">
                        <div v-show="isHovering" class="menu-mask"></div>
                    </transition>
                    <slot :hideMenu="hideMenu" name="items"></slot>
                    <core-menu-item
                        v-for="item in items"
                        :key="item.value"
                        :href="item.value"
                        @click="hideMenu"
                    >
                        {{ item.label }}
                    </core-menu-item>
                </core-menu>
            </transition>
        </div>
    </div>
</template>

<script>
import CoreMenu from '~/components/core/menu/Menu'
import CoreMenuItem from '~/components/core/menu/MenuItem'

export default {
    name: 'CoreHeaderNavBarItemDropdown',
    components: {
        CoreMenu,
        CoreMenuItem,
    },
    props: {
        sm: Boolean,
        lg: Boolean,
        label: {
            type: String,
            default: '',
        },
        items: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            delay: 0,
            isHovering: false,
        }
    },
    methods: {
        hideMenu() {
            this.isHovering = false
        },
        showMenu() {
            this.isHovering = true
        },
    },
}
</script>

<style lang="postcss" scoped>
.options-menu {
    @apply inline-flex h-full w-full items-center justify-center whitespace-nowrap bg-transparent;
    z-index: 100;
}
.core-menu-fade-enter-active {
    @apply transition transition-all duration-200;
}
.core-menu-fade-leave-active {
    @apply transition transition-all delay-200 duration-500;
}
.core-menu-fade-enter,
.core-menu-fade-leave-to {
    @apply opacity-0;
}
.menu-mask {
    @apply absolute top-full h-0 w-full rounded bg-black-900;
}
.core-menu-mask-enter-active {
    @apply transition transition-all duration-200;
}
.core-menu-mask-leave-active {
    @apply transition transition-all delay-200 duration-700;
}
.core-menu-mask-enter,
.core-menu-mask-leave-to {
    @apply top-0 h-full;
}
</style>
