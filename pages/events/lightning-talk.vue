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
            <iframe
                v-if="openSpace.tag === 'iframe_placeholder'"
                class="hackmd"
                src="https://hackmd.io/@pycontw/lightningtalk2025"
            ></iframe>
            <two-col-wrapper v-else>
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
                    <div v-if="openSpace.isEmphasis">
                        <strong>
                            <i18n
                                :path="`openSpaceInfo.${openSpace.tag}.emphasis`"
                            >
                                <template #br><br /></template>
                            </i18n>
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
                    <div v-if="openSpace.hasLinkList" class="list-disc">
                        <i18n
                            v-for="(item, index) in openSpace.listWithLinks"
                            :key="`openSpaceInfo.${openSpace.tag}.list.${index}`"
                            :path="item.textKey"
                            class="example"
                            tag="li"
                        >
                            <template v-for="link in item.links" #[link.slot]>
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
                    </div>
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
    </i18n-page-wrapper>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import TwoColWrapper from '@/components/core/layout/TwoColWrapper'
import ExtLink from '@/components/core/links/ExtLink.vue'
import LocaleLink from '@/components/core/links/LocaleLink.vue'
import CoreH1 from '@/components/core/titles/H1'
import i18n from '@/i18n/events/lightning-talk.i18n'

export default {
    i18n,
    name: 'PageEventsLightningTalk',
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
                    tag: 'flow',
                    hasExamples: true,
                },
                {
                    tag: 'rules',
                    hasLinkList: true,
                    listWithLinks: [
                        {
                            textKey: 'openSpaceInfo.rules.list.0',
                            links: [],
                        },
                        {
                            textKey: 'openSpaceInfo.rules.list.1',
                            links: [
                                {
                                    slot: 'codeOfConduct',
                                    textKey: 'terms.codeOfConduct',
                                    url: `https://tw.pycon.org/2025/${this.$i18n.locale}/about/code-of-conduct`,
                                    isExternalLink: true,
                                },
                            ],
                        },
                        {
                            textKey: 'openSpaceInfo.rules.list.2',
                            links: [],
                        },
                        {
                            textKey: 'openSpaceInfo.rules.list.3',
                            links: [],
                        },
                        {
                            textKey: 'openSpaceInfo.rules.list.4',
                            links: [],
                        },
                    ],
                },
                {
                    tag: 'register',
                    hasExamples: true,
                },
                {
                    tag: 'iframe_placeholder',
                },
                {
                    tag: 'FAQ',
                },
                {
                    tag: 'notes',
                    links: [
                        {
                            slot: 'codeOfConduct',
                            textKey: 'terms.codeOfConduct',
                            url: `https://tw.pycon.org/2025/${this.$i18n.locale}/about/code-of-conduct`,
                            isExternalLink: true,
                        },
                    ],
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
