<template>
    <div class="w-full px-8 py-24 sm:px-20 md:px-32 lg:px-64">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'I18nPageWrapper',
}
</script>

<style scoped>
h1 {
    @apply .w-full .text-3xl .my-8 .text-center;
}

h2 {
    @apply .w-full .text-2xl .mt-20 .mb-6;
}

h3 {
    @apply .w-full .text-xl .mt-10 .mb-4;
}

p,
.paragraph {
    @apply .w-full .mt-1 .mb-4 .text-justify;
}

span.text-2s {
    font-size: 0.625rem;
}

ul {
    @apply .mb-6;
}

ul.list-disc {
    @apply .pl-12;
}

li {
    @apply .my-1;
}
</style>
