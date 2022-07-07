<template>
    <div :class="pageWrapperClass">
        <div :class="classObject">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'I18nPageWrapper',
    props: {
        customX: { type: Boolean, default: false },
        customY: { type: Boolean, default: false },
        useBgDecoration: { type: Boolean, default: true },
    },
    computed: {
        classObject() {
            return {
                'py-8': !this.customY,
                'md:py-20': !this.customY,
                'min-w-[272px]': true,
                'mx-[24px]': true,
                'w-auto': true,
                'sm:mx-[32px]': !this.customX,
                'sm:w-auto': !this.customX,
                'md:mx-auto': !this.customX,
                'md:w-[706px]': !this.customX,
                'lg:mx-[168px]': !this.customX,
                'lg:w-auto': !this.customX,
                'xl:mx-auto': !this.customX,
                'xl:w-[1040px]': !this.customX,
            }
        },
        pageWrapperClass() {
            if (this.useBgDecoration) {
                return 'bg-none lg:bg-wrapper bg-no-repeat bg-wrapper-top-left bg-wrapper-size'
            }
            return 'bg-none'
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
    @apply w-full mt-1 mb-4 text-justify;
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

.page-wrapper {
    @apply bg-none bg-no-repeat bg-wrapper-top-left bg-wrapper-size;
}
</style>
