<template>
    <locale-link
        to="/"
        class="core-homeIcon md:px-12 py-2 flex justify-center items-center"
        customized
    >
        <img
            src="~/static/icon.svg"
            alt="Home icon of PyConTW 2021"
            class="w-6"
        />
        <span class="font-bold ml-2"> PyCon APAC </span>
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

<style scoped>
.core-homeIcon {
    @apply text-pink-700;
}
</style>
