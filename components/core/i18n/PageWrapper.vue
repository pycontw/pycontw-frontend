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
    @apply my-8 w-full text-center text-3xl;
}

h2 {
    @apply mb-6 mt-20 w-full text-2xl;
}

h3 {
    @apply mb-4 mt-10 w-full text-xl;
}

p,
.paragraph {
    @apply mb-4 mt-1 w-full text-justify;
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
    @apply bg-none bg-wrapper-size bg-wrapper-top-left bg-no-repeat;
}
</style>
