<template>
    <div
        :class="menuClasses"
        aria-labelledby="options-menu"
        aria-orientation="vertical"
        role="menu"
    >
        <slot></slot>
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
            originalClasses: [
                'origin-top-right',
                'absolute',
                'right-0',
                'mt-2',
                'rounded-md',
                'shadow-lg',
                'bg-white',
                'ring-1',
                'ring-black',
                'ring-opacity-5',
            ],
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

<style scoped></style>
