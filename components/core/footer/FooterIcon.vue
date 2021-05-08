<template>
    <ext-link :href="href" class="mx-4 my-4">
        <fa class="core-footerIcon" v-bind="faProps"></fa>
    </ext-link>
</template>

<script>
import ExtLink from '@/components/core/links/ExtLink'

export default {
    name: 'CoreFooterIcon',
    components: {
        ExtLink,
    },
    props: {
        href: {
            type: String,
            default: '',
        },
    },
    data() {
        const { href, ...faProps } = this.$attrs
        return {
            faProps,
        }
    },
}
</script>

<style scoped>
.core-footerIcon {
    @apply flex justify-self-center text-2xl;
}

.core-footerIcon:hover {
    color: #7568f6;
}
</style>
