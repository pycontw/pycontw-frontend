<template>
    <div v-dompurify-html="$md.render(markdown)" class="markdown"></div>
</template>

<script>
export default {
    props: {
        markdown: {
            type: String,
            default: '',
        },
    },
}
</script>

<style lang="postcss">
.markdown ul {
    @apply list-disc;
}
.markdown ol {
    @apply list-decimal;
}
.markdown li {
    @apply ml-4;
}
.markdown h1,
.markdown h2,
.markdown h3,
.markdown h4,
.markdown h5,
.markdown h6 {
    @apply mt-4 font-bold;
}
.markdown p {
    @apply mt-2;
}
.markdown blockquote {
    @apply mb-4 border-l-4 p-2 italic;
    background-color: rgba(110, 118, 129, 0.4);
    border-color: rgba(156, 163, 175);
    & > p {
        @apply mt-0;
    }
}
.markdown code {
    @apply rounded-md px-1 py-0.5;
    font-family:
        Source Sans Pro,
        -apple-system,
        Roboto,
        Helvetica Neue,
        sans-serif !important;
    background-color: rgba(110, 118, 129, 0.4);
}
.markdown a {
    @apply font-bold text-pink-700;

    &:hover {
        @apply text-primary-500;
    }
}
</style>
