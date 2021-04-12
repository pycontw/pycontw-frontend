<template>
    <locale-link
        to="/"
        class="md:px-12 py-2 flex justify-center items-center bg-golden-primary"
        customized
    >
        <img src="~/static/snake-icon.svg" class="w-8" />
        <span class="font-bold"> PyConTW </span>
    </locale-link>
</template>

<script>
import LocaleLink from '@/components/core/links/LocaleLink'

export default {
    name: 'HomeIcon',
    components: {
        LocaleLink,
    },
}
</script>

<style scoped></style>
