<template>
    <p class="description">{{ description }}</p>
</template>

<script>
export default {
    name: 'IntroDescription',
    props: {
        description: {
            type: String,
            default: '',
        },
    },
}
</script>

<style scoped>
.description {
    @apply pt-12;
}
</style>
