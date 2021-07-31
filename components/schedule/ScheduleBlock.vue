<template>
    <div :class="classObject" @click="onClick">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ScheduleBlock',
    props: {
        primary: { type: Boolean, default: false },
        secondary: { type: Boolean, default: false },
        tertiary: { type: Boolean, default: false },
        active: { type: Boolean, default: false },
        textAlignCenter: { type: Boolean, default: true },
        paddingX: { type: String, default: 'px-2' },
        paddingY: { type: String, default: 'py-3.5' },
    },
    computed: {
        transparent() {
            return !this.primary && !this.secondary && !this.tertiary
        },
        classObject() {
            return {
                scheduleBlock: true,
                '-primary': this.primary,
                '-secondary': this.secondary,
                '-tertiary': this.tertiary,
                '-active': this.active,
                '-transparent': this.transparent,
                'text-center': this.textAlignCenter,
                'cursor-pointer': this.primary,
                [this.paddingX]: true,
                [this.paddingY]: true,
            }
        },
    },
    methods: {
        onClick(e) {
            this.$emit('click', e)
        },
    },
}
</script>

<style lang="postcss" scoped>
.scheduleBlock {
    @apply relative font-serif;
    min-width: 120px;
    border-radius: 10px;
}

.scheduleBlock.-primary.-active {
    color: #000000;
    background-color: #d1ac23;
}

.scheduleBlock.-primary:not(.-active):hover {
    color: #7568f6;
}

.scheduleBlock.-secondary {
    color: #d1ac23;
    background-color: rgba(31, 63, 92, 0.8);
}

.scheduleBlock.-tertiary {
    color: #d1ac23;
    background-color: #243f73;
}
</style>
