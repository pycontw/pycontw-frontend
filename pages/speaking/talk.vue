<template>
    <i18n-page-wrapper>
        <core-h1 :title="$t('title')"></core-h1>
        <i18n
            v-for="(content, i) in $t('intro')"
            :key="`talk_intro_${i}`"
            :path="`intro.${i}`"
            tag="p"
            class="text-sm"
        >
            <template #cfp>
                <locale-link to="/speaking/cfp" highlight>{{
                    $t('terms.cfp')
                }}</locale-link>
            </template>
        </i18n>

        <!-- Tips -->
        <ul class="list-disc">
            <i18n
                v-for="(tip, i) in $t('tips')"
                :key="`talk_tips_${i}`"
                class="text-sm"
                :path="`tips.${i}`"
                tag="li"
            ></i18n>
        </ul>

        <!-- Section List -->
        <two-col-wrapper
            v-for="(section, i) in $t('sections')"
            :key="`talk_page_section_${i}`"
            class="pb-2"
        >
            <template #default>
                <h2>{{ section.title }}</h2>
            </template>
            <template #right-col>
                <i18n :path="`sections.${i}.content`" tag="p">
                    <template #br><br /></template>
                </i18n>
            </template>
        </two-col-wrapper>
    </i18n-page-wrapper>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import CoreH1 from '@/components/core/titles/H1'
import LocaleLink from '@/components/core/links/LocaleLink.vue'
import i18n from '@/i18n/speaking/talk.i18n'
import TwoColWrapper from '@/components/core/layout/TwoColWrapper'

export default {
    i18n,
    name: 'PageSpeakingTalk',
    components: {
        I18nPageWrapper,
        CoreH1,
        LocaleLink,
        TwoColWrapper,
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
