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
                    <div v-if="openSpace.tag === 'flow'">
                        <table class="table-flow">
                            <thead>
                                <tr>
                                    <th>{{ $t('table.time') }}</th>
                                    <th>{{ $t('table.content') }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="row in $t(
                                        'openSpaceInfo.flow.table',
                                        $i18n.locale,
                                    )"
                                    :key="row.time"
                                >
                                    <td>{{ row.time }}</td>
                                    <td>{{ row.content }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div v-if="openSpace.isEmphasis">
                        <strong>
                            <i18n
                                :path="`openSpaceInfo.${openSpace.tag}.emphasis`"
                            >
                                <template #br><br /></template>
                            </i18n>
                        </strong>
                    </div>
                    <div
                        v-if="openSpace.tag === 'FAQ'"
                        class="intro"
                        v-html="
                            renderBold(
                                $t(
                                    `openSpaceInfo.${openSpace.tag}.description`,
                                ),
                            )
                        "
                    ></div>
                    <i18n
                        v-else
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
                        <ul class="list-disc pl-6">
                            <li
                                v-for="(_, index) in $t(
                                    `openSpaceInfo.${openSpace.tag}.examples`,
                                )"
                                :key="`openSpaceInfo.${openSpace.tag}.examples.${index}`"
                                class="example"
                                v-html="
                                    renderBold(
                                        $t(
                                            `openSpaceInfo.${openSpace.tag}.examples.${index}`,
                                        ),
                                    )
                                "
                            ></li>
                        </ul>
                    </div>
                </template>
            </two-col-wrapper>
        </div>
        <iframe
            class="hackmd"
            src="https://hackmd.io/@pycontw/lightningtalk2025"
        ></iframe>
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
                        {
                            slot: 'programEmail',
                            textKey: 'terms.programEmail',
                            url: 'mailto:program@python.tw',
                            isExternalLink: true,
                        },
                    ],
                },
            ],
        }
    },
    methods: {
        renderBold(text) {
            return text
                .replace(
                    /{bold}(.+?){\/bold}/g,
                    '<strong class="font-bold">$1</strong>',
                )
                .replace(/{ul}/g, '<ul class="list-disc pl-6">')
                .replace(/{\/ul}/g, '</ul>')
                .replace(/{li}(.+?){\/li}/g, '<li>$1</li>')
                .replace(/{br}/g, '<br>')
        },
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

.table-flow {
    @apply w-full border border-white;
    border-radius: 10px;
}
.table-flow th {
    @apply border border-white p-1 pl-2 text-left;
}
.table-flow td {
    @apply border border-white p-1 pl-2;
}
</style>
