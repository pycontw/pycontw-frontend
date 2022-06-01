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
        underline: {
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
                underline: this.underline,
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
    @apply text-pink-500;
}
.highlight:hover {
    @apply text-primary-500;
}
.underline {
    text-decoration: underline;
}
</style>
