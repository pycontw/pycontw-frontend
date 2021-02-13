<template>
    <nuxt-link :to="localePath(to)" :class="classObject">
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
        highlight: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        classObject() {
            return {
                highlight: this.highlight,
            }
        },
    },
}
</script>

<style scoped>
.highlight {
    color: rgba(37, 99, 235, 1);
}
.highlight:hover {
    color: rgba(30, 64, 175, 1);
}
</style>
