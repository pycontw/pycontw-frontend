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
    computed: {
        md() {
            return !this.lg && !this.sm
        },
        menuClasses() {
            return {
                'core-menu': true,
                '--large': this.lg,
                '--small': this.sm,
                '--medium': this.md,
            }
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

    &.--small {
        width: 120px;
    }
    &.--medium {
        width: 192px;
    }
    &.--large {
        width: 224px;
    }
}
</style>
