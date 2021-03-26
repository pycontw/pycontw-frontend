<template>
    <div class="px-64 py-24">
        <h1 class="text-3xl my-8 text-center">2021 {{ $t('title') }}</h1>
        <div v-for="content in $t('contents')" :key="`${content}`" class="my-4">
            <h1 class="text-2xl my-8 text-center">
                {{ content.title }}
            </h1>
            <p
                v-for="item in content.description"
                :key="`${item}`"
                class="m-2"
                v-html="item"
            />
            <ol class="m-2">
                <li v-for="(item, index) in content.items" :key="`${item}`">
                    {{ index + 1 }}. {{ item }}
                </li>
            </ol>
            <p
                v-for="item in content.summary"
                :key="`${item}`"
                class="m-2"
                v-html="item"
            />
        </div>
    </div>
</template>

<script>
import i18n from '@/i18n/about/privacy-policy.i18n'

export default {
    i18n,
    name: 'PagePrivacyPolicy',
}
</script>

<style scoped></style>
