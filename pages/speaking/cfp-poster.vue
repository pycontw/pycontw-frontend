<template>
    <i18n-page-wrapper>
        <core-h1 :title="$t('title')"></core-h1>
        <div class="mb-[50px]">
            <i18n
                v-for="(content, i) in $t('intro')"
                :key="`posterSession_${i}`"
                :path="`intro.${i}`"
                tag="p"
                class="posterSession"
            >
            </i18n>
        </div>

        <div v-for="(section, i) in info" :key="`posterSession.${i}`">
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
                        <template #br><br /></template>
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
                    </i18n>
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
import i18n from '@/i18n/speaking/cfp-poster.i18n'

export default {
    i18n,
    name: 'PageSpeakingposterSession',
    components: {
        I18nPageWrapper,
        CoreH1,
        TwoColWrapper,
        ExtLink,
        LocaleLink,
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
                            url: 'https://www.timeanddate.com/worldclock/converter.html?iso=20240701T115900&p1=tz_aoe&p2=241&p3=1440',
                            isExternalLink: true,
                        },
                        {
                            slot: 'position',
                            textKey: 'terms.position',
                            url: 'https://www.nstm.gov.tw/English/InformationForVisitorsEng/EnvironmentEng/EnvirInfoEng.htm',
                            isExternalLink: true,
                        },
                    ],
                },
                {
                    tag: 'howToSubmit',
                    isDescriptionList: true,
                    links: [
                        {
                            slot: 'posterForm',
                            textKey: 'terms.posterForm',
                            url: `https://bit.ly/web-cfp-2024`,
                            isExternalLink: true,
                        },
                    ],
                },
                {
                    tag: 'topics',
                    isDescriptionList: false,
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
