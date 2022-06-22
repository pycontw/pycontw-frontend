<template>
    <div
        class="relative flex h-full px-8 justify-center items-center text-left"
        @mouseenter="showMenu"
        @mouseleave="hideMenu"
    >
        <div
            class="
                relative
                flex
                h-full
                flex-col
                rounded-md
                items-start
                cursor-pointer
            "
        >
            <div
                id="options-menu"
                class="
                    options-menu
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-offset-gray-100
                    focus:ring-indigo-500
                "
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
    @apply inline-flex w-full h-full justify-center items-center bg-transparent;
    z-index: 100;
}
.core-menu-fade-enter-active {
    @apply transition transition-all duration-200;
}
.core-menu-fade-leave-active {
    @apply transition transition-all duration-500 delay-200;
}
.core-menu-fade-enter,
.core-menu-fade-leave-to {
    @apply opacity-0;
}
.menu-mask {
    @apply absolute w-full h-0 top-full bg-black-900 rounded;
}
.core-menu-mask-enter-active {
    @apply transition transition-all duration-200;
}
.core-menu-mask-leave-active {
    @apply transition transition-all duration-700 delay-200;
}
.core-menu-mask-enter,
.core-menu-mask-leave-to {
    @apply h-full top-0;
}
</style>
