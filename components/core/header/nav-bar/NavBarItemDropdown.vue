<template>
    <div class="relative inline-block text-left">
        <div
            class="relative flex flex-col rounded-md items-start cursor-pointer"
            @mouseenter="showMenu"
            @mouseleave="hideMenu"
        >
            <div
                id="options-menu"
                class="inline-flex justify-center w-full px-4 py-2 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                aria-haspopup="true"
                aria-expanded="true"
            >
                <slot v-if="$slots.label" name="label"></slot>
                {{ label }}
            </div>
            <transition
                enter-active-class="transition ease-out duration-100 transform"
                enter-class="opacity-0 scale-95"
                enter-to-class="opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75 transform"
                leave-class="opacity-100 scale-100"
                leave-to-class="opacity-0 scale-95"
            >
                <core-menu
                    v-show="isHovering"
                    :sm="sm"
                    :lg="lg"
                    :style="{ top: '32px' }"
                >
                    <slot name="items" :hideMenu="hideMenu"></slot>
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
import { CoreMenu, CoreMenuItem } from '~/components/core/menu'

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

<style scoped></style>
