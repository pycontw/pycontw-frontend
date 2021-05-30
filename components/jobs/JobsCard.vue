<template>
    <div :class="classObject" @click="onClick">
        <img :src="logoUrl" alt="" />
    </div>
</template>

<script>
export default {
    name: 'JobsCard',
    props: {
        logoUrl: { type: String, default: '' },
        active: { type: Boolean, default: false },
    },
    computed: {
        classObject() {
            return {
                jobsCard: true,
                'w-24': true,
                'h-20': true,
                'm-1': true,
                'cursor-pointer': !this.active,
                'md:w-40': true,
                'md:h-32': true,
                'md:m-3': true,
                '-active': this.active,
            }
        },
    },
    methods: {
        onClick(event) {
            this.$emit('click', event)
        },
    },
}
</script>

<style scoped>
.jobsCard {
    @apply flex bg-white rounded-2xl;
    opacity: 0.2;
}

.jobsCard.-active,
.jobsCard:hover {
    opacity: 1;
}

.jobsCard > img {
    @apply w-full object-contain;
    border-radius: inherit;
}
</style>
