<template>
    <NuxtLink :to="localePath(to)">
        <slot></slot>
    </NuxtLink>
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
