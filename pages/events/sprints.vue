<template>
    <i18n-page-wrapper>
        <core-h1 :title="$t('title')"></core-h1>
        <i18n path="intro" tag="p" class="intro whitespace-pre-line"></i18n>
        <h2>{{ $t('mode') }}</h2>
        <i18n
            v-for="(paragraph, i) in $t('modeDescriptions')"
            :key="`mode_descriptions_${i}`"
            :path="`modeDescriptions.${i}`"
            tag="p"
        >
            <template #kktix>
                <ext-link
                    href="https://pycontw.kktix.cc/events/pyconsprint2022-1"
                    highlight
                    >KKTIX</ext-link
                >
            </template>
            <template #hackmd>
                <ext-link
                    href="https://hackmd.io/oWg32ha4TOG2v8Dt4QDH0A"
                    highlight
                    >HackMD</ext-link
                >
            </template>
        </i18n>
    </i18n-page-wrapper>
</template>

<script>
import i18n from '@/i18n/events/sprints.i18n'
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import CoreH1 from '@/components/core/titles/H1'
import ExtLink from '@/components/core/links/ExtLink'

export default {
    i18n,
    name: 'PageEventsSprints',
    components: {
        I18nPageWrapper,
        CoreH1,
        ExtLink,
    },
    head() {
        return {
            title: this.$i18n.t('title'),
            meta: [
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: this.$i18n.t('title'),
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: this.$i18n.t('intro'),
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: this.$i18n.t('intro'),
                },
            ],
        }
    },
}
</script>

<style lang="postcss" scoped>
h2 {
    @apply font-serif font-black text-base text-pink-500 mt-12 md:text-lg text-center mx-auto;
}
</style>
