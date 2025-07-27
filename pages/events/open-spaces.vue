<template>
    <i18n-page-wrapper>
        <core-h1 :title="$t('title')"></core-h1>
        <i18n path="intro" tag="p" class="intro">
            <template #br><br /></template>
        </i18n>
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
                    <img
                        v-if="openSpace.tag === 'location'"
                        :src="
                            require(`~/static/img/events/overview/open-space-location.png`)
                        "
                    />
                    <br v-if="openSpace.tag === 'location'" />
                    <br v-if="openSpace.tag === 'location'" />
                    <img
                        v-if="openSpace.tag === 'location'"
                        :src="
                            require('~/static/img/events/overview/open-space-extra.png')
                        "
                    />
                    <br v-if="openSpace.tag === 'location'" />
                    <div v-if="openSpace.isEmphasis">
                        <strong>
                            <ul class="emphasis-list">
                                <li
                                    v-for="(item, index) in $t(
                                        `openSpaceInfo.${openSpace.tag}.emphasis`,
                                    )"
                                    :key="`emphasis-${index}`"
                                    :class="{ 'sub-item': index > 0 }"
                                >
                                    {{ item }}
                                </li>
                            </ul>
                        </strong>
                    </div>
                    <i18n
                        :key="`openspace_descriptions_${openSpace.tag}`"
                        :path="`openSpaceInfo.${openSpace.tag}.description`"
                        class="intro"
                        tag="p"
                    >
                        <template #br><br /></template>
                        <template
                            v-for="link in openSpace.links"
                            :slot="link.slot"
                        >
                            <ext-link
                                v-if="link.isExternalLink"
                                :key="`${link.textKey}.external`"
                                :href="link.url"
                                highlight
                            >
                                {{ $t(link.textKey) }}
                            </ext-link>
                            <locale-link
                                v-else
                                :key="`${link.textKey}.local`"
                                :to="link.url"
                                highlight
                            >
                                {{ $t(link.textKey) }}
                            </locale-link>
                        </template>
                    </i18n>
                    <div v-if="openSpace.hasExamples">
                        <i18n
                            v-for="(_, index) in $t(
                                `openSpaceInfo.${openSpace.tag}.examples`,
                            )"
                            :key="`openSpaceInfo.${openSpace.tag}.examples.${index}`"
                            :path="`openSpaceInfo.${openSpace.tag}.examples.${index}`"
                            class="example"
                            tag="li"
                        >
                            <template #br><br /></template>
                        </i18n>
                    </div>
                </template>
            </two-col-wrapper>
        </div>
        <iframe
            class="hackmd"
            src="https://hackmd.io/vB_wxgipRyKBcVEAoIyGoQ?view="
        ></iframe>
    </i18n-page-wrapper>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import TwoColWrapper from '@/components/core/layout/TwoColWrapper'
import ExtLink from '@/components/core/links/ExtLink.vue'
import LocaleLink from '@/components/core/links/LocaleLink.vue'
import CoreH1 from '@/components/core/titles/H1'
import i18n from '@/i18n/events/open-spaces.i18n'

export default {
    i18n,
    name: 'PageEventsOpenSpaces',
    components: {
        I18nPageWrapper,
        CoreH1,
        TwoColWrapper,
        ExtLink,
        LocaleLink,
    },
    data() {
        return {
            openSpaceInfos: [
                {
                    tag: 'participate',
                },
                {
                    tag: 'location',
                    isDescriptionList: true,
                },
                {
                    tag: 'time',
                    isDescriptionList: true,
                    isEmphasis: true,
                },
                {
                    tag: 'subjects',
                    links: [
                        {
                            slot: 'conductPage',
                            textKey: 'terms.conductPage',
                            url: 'https://tw.pycon.org/2025/zh-hant/about/code-of-conduct',
                            isExternalLink: true,
                        },
                    ],
                },
                {
                    tag: 'host',
                    isDescriptionList: false,
                    links: [
                        {
                            slot: 'registrationForm',
                            textKey: 'terms.registrationForm',
                            url: 'https://hackmd.io/vB_wxgipRyKBcVEAoIyGoQ?view=',
                            isExternalLink: true,
                        },
                    ],
                },
                {
                    tag: 'ideas',
                    hasExamples: true,
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

.emphasis-list {
    @apply mt-2 list-disc pl-5;
}

.emphasis-list li {
    @apply mb-1;
}

.emphasis-list li.sub-item {
    @apply ml-4;
}
</style>

.emphasis-list {
  padding-left: 0;
  margin-left: 0;
  list-style-position: inside; /* 可選 */
}

.emphasis-list li {
  padding-left: 0;
  margin-left: 0;
}
