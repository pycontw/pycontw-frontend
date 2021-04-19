<template>
    <a
        :href="href"
        rel="noopener noreferrer"
        target="_blank"
        :class="classObject"
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
    computed: {
        classObject() {
            return {
                'core-extLink': true,
                'outline-none': true,
                'cursor-pointer': true,
                highlight: this.highlight,
            }
        },
    },
}
</script>

<style scoped>
a {
    color: inherit;
}
.highlight {
    color: #c2a53a;
}
.highlight:hover {
    color: #6656f8;
}
</style>
