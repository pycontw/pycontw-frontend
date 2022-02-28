<template>
    <div
        :class="menuClasses"
        aria-labelledby="options-menu"
        aria-orientation="vertical"
        role="menu"
    >
        <div class="relative">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CoreMenu',
    props: {
        sm: Boolean,
        lg: Boolean,
    },
    data() {
        return {
            originalClasses: ['core-menu'],
        }
    },
    computed: {
        menuClasses() {
            let width
            if (this.sm) {
                width = 'w-24'
            } else if (this.lg) {
                width = 'w-36'
            } else {
                width = 'w-32'
            }
            return [...this.originalClasses, width]
        },
    },
}
</script>

<style lang="postcss" scoped>
.core-menu {
    @apply absolute origin-top-right rounded opacity-80;
    top: 48px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #1b1a2e;
}
</style>
