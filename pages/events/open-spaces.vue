<template>
    <i18n-page-wrapper>
        <core-h1 :title="$t('title')"></core-h1>
        <i18n path="intro" tag="p" class="intro whitespace-pre-line"></i18n>
        <div
            v-for="(openSpace, i) in openSpaceInfos"
            :key="`openSpaceInfo_${i}`"
        >
            <two-col-wrapper>
                <template #default>
                    <h2>{{ $t(`openSpaceInfo.${openSpace.tag}.title`) }}</h2>
                </template>
                <template #right-col>
                    <p class="intro whitespace-pre-line">
                        {{ $t(`openSpaceInfo.${openSpace.tag}.description`) }}
                    </p>
                </template>
            </two-col-wrapper>
        </div>
    </i18n-page-wrapper>
</template>

<script>
import i18n from '@/i18n/events/open-spaces.i18n'
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import CoreH1 from '@/components/core/titles/H1'
import TwoColWrapper from '@/components/core/layout/TwoColWrapper'

export default {
    i18n,
    name: 'PageEventsOpenSpaces',
    components: {
        I18nPageWrapper,
        CoreH1,
        TwoColWrapper,
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
                    tag: 'time',
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
    @apply font-sans font-black text-base text-primary-500 mt-12 md:text-lg text-center mx-auto;
}

.spacing {
    @apply py-2 lg:py-5;
}
</style>
