<template>
    <i18n-page-wrapper>
        <core-h1 :title="$t('title')"></core-h1>
        <i18n path="intro" tag="p" class="intro whitespace-pre-line"></i18n>
        <div
            v-for="(openSpace, i) in openSpaceInfos"
            :key="`openSpaceInfo_${i}`"
        >
            <h2>{{ $t(`openSpaceInfo.${openSpace.tag}.title`) }}</h2>
            <p class="intro whitespace-pre-line">
                {{ $t(`openSpaceInfo.${openSpace.tag}.description`) }}
            </p>
        </div>
    </i18n-page-wrapper>
</template>

<script>
import i18n from '@/i18n/events/open-spaces.i18n'
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import CoreH1 from '@/components/core/titles/H1'

export default {
    i18n,
    name: 'PageEventsOpenSpaces',
    components: {
        I18nPageWrapper,
        CoreH1,
    },
    data() {
        return {
            openSpaceInfos: [
                {
                    tag: 'participate',
                },
                {
                    tag: 'location',
                },
                {
                    tag: 'subjects',
                },
                {
                    tag: 'host',
                },
                {
                    tag: 'ideas',
                },
            ],
        }
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
    @apply font-serif font-black text-base md:text-lg text-center mx-auto;
    margin-top: 3rem !important;
    color: #c386ae;
}
</style>
