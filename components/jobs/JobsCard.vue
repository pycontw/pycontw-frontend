<template>
    <div :class="classObject" @click="onClick">
        <img :src="logoUrl" :alt="sponsorName" />
    </div>
</template>

<script>
export default {
    name: 'JobsCard',
    props: {
        sponsorName: { type: String, default: '' },
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
                'md:w-24': true,
                'md:h-20': true,
                'md:m-2': true,
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

<style lang="postcss" scoped>
.jobsCard {
    @apply flex rounded-2xl bg-white;
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
