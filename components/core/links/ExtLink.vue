<template>
    <a
        :href="href"
        rel="noopener noreferrer"
        target="_blank"
        class="outline-none"
    >
        <slot></slot>
    </a>
</template>

<script>
export default {
    name: 'CoreExtLink',
    props: {
        href: {
            type: String,
            default: '',
        },
    },
}
</script>

<style scoped>
a {
    color: inherit;
}
</style>
