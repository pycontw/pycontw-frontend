<template>
    <button :class="classObject" class="" @click="onClick">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'VenueTab',
    props: {
        index: { type: Number, default: -1 },
    },
    data() {
        return {
            active: false,
        }
    },
    computed: {
        classObject() {
            return {
                'rounded-lg px-4 py-2 flex-1 hover:bg-[#E099E1] hover:text-black-800': true,
                'venueButton--active': this.active,
            }
        },
    },
    methods: {
        onClick() {
            this.$parent.selectTab(this.index)
        },
    },
}
</script>

<style lang="postcss" scoped>
.venueButton--active {
    @apply bg-primary-900 hover:text-[#f8f9fb];
}
</style>
