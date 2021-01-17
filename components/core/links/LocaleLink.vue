<template>
    <nuxt-link :to="localePath(to)">
        <slot></slot>
    </nuxt-link>
</template>

<script>
export default {
    name: 'CoreLocaleLink',
    props: {
        to: {
            type: String,
            default: '',
        },
    },
}
</script>

<style scoped></style>
