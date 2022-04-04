<template>
    <div :class="classObject">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'I18nPageWrapper',
    props: {
        customX: { type: Boolean, default: false },
        customY: { type: Boolean, default: false },
    },
    computed: {
        classObject() {
            return {
                'w-full': true,
                'px-5': !this.customX,
                'py-12': !this.customY,
                'sm:px-20': !this.customX,
                'md:px-32': !this.customX,
                'lg:px-32': !this.customX,
            }
        },
    },
}
</script>

<style lang="postcss" scoped>
h1 {
    @apply w-full text-3xl my-8 text-center;
}

h2 {
    @apply w-full text-2xl mt-20 mb-6;
}

h3 {
    @apply w-full text-xl mt-10 mb-4;
}

p,
.paragraph {
    @apply w-full mt-1 mb-4;
}

span.text-2s {
    font-size: 0.625rem;
}

ul {
    @apply mb-6;
}

ul.list-disc {
    @apply pl-12;
}

li {
    @apply my-1;
}
</style>
