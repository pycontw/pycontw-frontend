<template>
    <i18n-page-wrapper>
        <core-h1 :title="$t('title')"></core-h1>
        <div class="mb-[50px]">
            <i18n
                v-for="(content, i) in $t('intro')"
                :key="`postSession_${i}`"
                :path="`intro.${i}`"
                tag="p"
                class="postSession"
            >
            </i18n>
        </div>

        <div v-for="(section, i) in info" :key="`postSession.${i}`">
            <two-col-wrapper>
                <div slot="default">
                    <i18n
                        :key="`info.${section.tag}.title`"
                        :path="`info.${section.tag}.title`"
                        class="title"
                        tag="p"
                    >
                    </i18n>
                </div>
                <div slot="right-col">
                    <i18n
                        v-for="(description, index) in $t(
                            `info.${section.tag}.description`,
                        )"
                        :key="`info.${section.tag}.description.${index}`"
                        :path="`info.${section.tag}.description.${index}`"
                        :tag="`${section.isDescriptionList ? 'li' : 'div'}`"
                    >
                        <template
                            v-for="link in section.links"
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
                        <template slot="previousConfs">
                            <li
                                v-for="(conf, confIndex) in previousConfLinks"
                                :key="`previousConfs.${confIndex}`"
                            >
                                <ext-link :href="conf[1]" highlight>
                                    {{ conf[0] }}
                                </ext-link>
                            </li>
                        </template>
                    </i18n>
                    <template v-if="$t(`info.${section.tag}.steps`).length">
                        <steps
                            v-for="(step, stepIndex) in $t(
                                `info.${section.tag}.steps`,
                            )"
                            :key="stepIndex"
                            :show-step-line="stepIndex > 0"
                        >
                            <template #title>
                                <i18n
                                    :key="`info.${section.tag}.steps[${stepIndex}].title`"
                                    :path="`info.${section.tag}.steps[${stepIndex}].title`"
                                    tag="div"
                                >
                                </i18n>
                            </template>
                            <template #description>
                                <i18n
                                    v-for="(description, index) in $t(
                                        `info.${section.tag}.steps[${stepIndex}].description`,
                                    )"
                                    :key="`info.${section.tag}.steps[${stepIndex}].description.${index}`"
                                    :path="`info.${section.tag}.steps[${stepIndex}].description.${index}`"
                                    tag="div"
                                >
                                </i18n>
                            </template>
                        </steps>
                    </template>
                </div>
            </two-col-wrapper>
        </div>
    </i18n-page-wrapper>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import CoreH1 from '@/components/core/titles/H1'
import TwoColWrapper from '@/components/core/layout/TwoColWrapper'
import LocaleLink from '@/components/core/links/LocaleLink.vue'
import ExtLink from '@/components/core/links/ExtLink.vue'
import Steps from '@/components/core/steps/Steps.vue'
import i18n from '@/i18n/speaking/post-session.i18n'

export default {
    i18n,
    name: 'PageSpeakingPostSession',
    components: {
        I18nPageWrapper,
        CoreH1,
        TwoColWrapper,
        ExtLink,
        LocaleLink,
        Steps,
    },
    data() {
        return {
            info: [
                {
                    tag: 'importantDates',
                    isDescriptionList: true,
                    links: [
                        {
                            slot: 'aoe',
                            textKey: 'terms.aoe',
                            url: 'https://www.timeanddate.com/worldclock/converter.html?iso=20240408T235900&p1=tz_aoe&p2=241&p3=1440',
                            isExternalLink: true,
                        },
                    ],
                },
                {
                    tag: 'howToSubmit',
                    isDescriptionList: false,
                    links: [
                        {
                            slot: 'signUp',
                            textKey: 'terms.signUp',
                            url: `https://tw.pycon.org/prs/${this.$i18n.locale}/accounts/login`,
                            isExternalLink: true,
                        },
                        {
                            slot: 'proposalSystem',
                            textKey: 'terms.proposalSystem',
                            url: `https://tw.pycon.org/prs/${this.$i18n.locale}/dashboard`,
                            isExternalLink: true,
                        },
                    ],
                },
                {
                    tag: 'topics',
                    isDescriptionList: false,
                    links: [
                        {
                            slot: 'talk',
                            textKey: 'terms.talk',
                            url: '/speaking/talk',
                            isExternalLink: false,
                        },
                    ],
                },
                {
                    tag: 'inappropriate',
                    isDescriptionList: false,
                    links: [
                        {
                            slot: 'coc',
                            textKey: 'terms.coc',
                            url: '/about/code-of-conduct',
                            isExternalLink: false,
                        },
                    ],
                },
            ],
        }
    },
    computed: {
        previousConfLinks() {
            return [
                [
                    'PyCon Taiwan 2023',
                    `https://tw.pycon.org/2023/zh-hant/conference/schedule`,
                ],
                [
                    'PyCon APAC 2022',
                    `https://tw.pycon.org/2022/zh-hant/conference/schedule`,
                ],
                ['PyCon APAC 2021', `https://th.pycon.org/pages/schedule`],
                [
                    'PyCon APAC 2020',
                    `https://pycon.my/pycon-apac-2020-conference-talks/`,
                ],
                ['PyCon APAC 2019', `https://pycon.python.ph/`],
                [
                    'PyCon Taiwan 2021',
                    `https://tw.pycon.org/2021/${this.$i18n.locale}/conference/schedule/`,
                ],
                [
                    'PyCon Taiwan 2020',
                    `https://tw.pycon.org/2020/${this.$i18n.locale}/conference/schedule/`,
                ],
                [
                    'PyCon Taiwan 2019',
                    `https://tw.pycon.org/2019/${this.$i18n.locale}/events/schedule/`,
                ],
            ]
        },
    },
    head() {
        return {
            title: this.$i18n.t('title'),
            meta: [
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: this.$i18n.t('og.title'),
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: this.$i18n.t('og.description'),
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: this.$i18n.t('og.description'),
                },
            ],
        }
    },
}
</script>

<style scoped></style>
