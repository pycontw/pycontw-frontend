<template>
    <i18n-page-wrapper>
        <core-h1 :title="$t('title')"></core-h1>
        <i18n path="intro" tag="p" class="intro"></i18n>
        <div
            v-for="(openSpace, i) in openSpaceInfos"
            :key="`openSpaceInfo_${i}`"
        >
            <two-col-wrapper>
                <template #default>
                    <i18n
                        :key="`openSpaceInfo.${openSpace.tag}.title`"
                        :path="`openSpaceInfo.${openSpace.tag}.title`"
                        class="title"
                        tag="p"
                    >
                        <template #br><br /></template>
                    </i18n>
                </template>
                <template #right-col>
                    <i18n
                        :key="`openspace_descriptions_${openSpace.tag}`"
                        :path="`openSpaceInfo.${openSpace.tag}.description`"
                        class="intro"
                        tag="p"
                    >
                        <template #br><br /></template>
                        <template #examples>
                            <ul>
                                <i18n
                                    v-for="(example, idx) in $t(
                                        'openSpaceInfo.ideas.examples',
                                    )"
                                    :key="`openspace_example_${idx}`"
                                    :path="`openSpaceInfo.ideas.examples.${idx}`"
                                    class="ml-4 list-disc"
                                    tag="li"
                                ></i18n>
                            </ul>
                        </template>
                    </i18n>
                </template>
            </two-col-wrapper>
        </div>
        <iframe
            class="hackmd"
            src="https://hackmd.io/@pycontw/rysEyBh5q"
        ></iframe>
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
.intro {
    font-size: 16px;
    @media (min-width: 1024px) {
        font-size: 18px;
    }
}
.spacing {
    @apply py-2 lg:py-5;
}

.hackmd {
    @apply w-full;
    height: 800px;
}
</style>
