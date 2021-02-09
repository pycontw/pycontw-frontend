<template>
    <a
        :href="href"
        rel="noopener noreferrer"
        target="_blank"
        :class="['outline-none', highlight ? 'highlight' : '']"
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
        highlight: {
            type: Boolean,
            default: false,
        },
    },
}
</script>

<style scoped>
a {
    color: inherit;
}
.highlight {
    color: rgba(37, 99, 235, 1);
}
.highlight:hover {
    color: rgba(30, 64, 175, 1);
}
</style>
