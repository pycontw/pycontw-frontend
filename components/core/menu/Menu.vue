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
            originalClasses: ['core-menu', 'bg-golden-primary'],
        }
    },
    computed: {
        menuClasses() {
            let width
            if (this.sm) {
                width = 'w-24'
            } else if (this.lg) {
                width = 'w-56'
            } else {
                width = 'w-48'
            }
            return [...this.originalClasses, width]
        },
    },
}
</script>

<style scoped>
.core-menu {
    @apply absolute origin-top-right rounded;
    top: 48px;
    right: -32px;
    background-color: #1c1c1c;
    border: 1px solid #c2a53a;
    opacity: 0.7;
}
</style>
