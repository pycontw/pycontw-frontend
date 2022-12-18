<template>
    <i18n-page-wrapper>
        <core-h1 :title="$t('title')"></core-h1>
        <i18n path="intro" tag="p" class="intro"></i18n>
        <div v-for="(cfp, i) in cfpInfos" :key="`cfpInfo_${i}`">
            <two-col-wrapper>
                <template #default>
                    <i18n
                        :key="`cfpInfo.${cfp.tag}.title`"
                        :path="`cfpInfo.${cfp.tag}.title`"
                        class="title"
                        tag="p"
                    >
                        <template #br><br /></template>
                    </i18n>
                </template>
                <template #right-col>
                    <i18n
                        :key="`cfp_descriptions_${cfp.tag}`"
                        :path="`cfpInfo.${cfp.tag}.description`"
                        class="intro"
                        tag="p"
                    >
                        <template #signUp>
                            <ext-link
                                href="https://tw.pycon.org/prs/${this.$i18n.locale}/accounts/login"
                                highlight
                                >{{ $t('terms.signUp') }}</ext-link
                            >
                        </template>
                        <template #br><br /></template>
                    </i18n>
                    <i18n
                        v-for="(list, idx) in $t('cfpInfo.lists')"
                        :key="`cfp_list_${idx}`"
                        :path="`cfpInfo.${cfp.tag}.lists.${idx}`"
                        class="list-disc ml-4"
                        tag="li"
                    ></i18n>
                </template>
            </two-col-wrapper>
        </div>
    </i18n-page-wrapper>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import CoreH1 from '@/components/core/titles/H1'
import i18n from '@/i18n/speaking/cfp.i18n'
import TwoColWrapper from '@/components/core/layout/TwoColWrapper'
import ExtLink from '@/components/core/links/ExtLink.vue'

export default {
    i18n,
    name: 'PageSpeakingCfp',
    components: {
        I18nPageWrapper,
        CoreH1,
        TwoColWrapper,
        ExtLink,
    },
    data() {
        return {
            cfpInfos: [
                {
                    tag: 'importantDates',
                },
                {
                    tag: 'howToSubmit',
                },
                {
                    tag: 'reviewProcess',
                },
                {
                    tag: 'modificationMethod',
                },
                {
                    tag: 'recordingPolicy',
                },
                {
                    tag: 'talkLength',
                },
                {
                    tag: 'talkTopic',
                },
                {
                    tag: 'prevTopic',
                },
                {
                    tag: 'tutorialLength',
                },
                {
                    tag: 'tutorialTopic',
                },
            ],
        }
    },
    computed: {
        myPyConLink() {
            return `https://tw.pycon.org/prs/${this.$i18n.locale}/dashboard`
        },
        signUpLink() {
            return `https://tw.pycon.org/prs/${this.$i18n.locale}/accounts/login`
        },
        previousConfLinks() {
            return [
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

<style lang="postcss" scoped>
.intro {
    font-size: 16px;
    @media (min-width: 1024px) {
        font-size: 18px;
    }
}
</style>
