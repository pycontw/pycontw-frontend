<template>
    <i18n-page-wrapper class="text-xs md:text-lg md:px-57 lg:px-56">
        <core-h1 :title="$t('title')"></core-h1>
        <i18n path="intro.0" tag="p"></i18n>
        <i18n path="intro.1" tag="p"></i18n>
        <i18n path="intro.2" tag="p"></i18n>
        <div class="grid grid-cols-2 lg:grid-cols-4 mt-3 sm:mt-0 mb-10">
            <div
                v-for="(service, i) in $t('services')"
                :key="`sponsor_services_${i}`"
                class="flex flex-col items-center mt-5 sm:mt-12"
            >
                <div
                    class="w-16 md:w-28 h-16 md:h-28 bg-contain bg-no-repeat"
                    :style="getImgStyle(sponsorServices[i])"
                ></div>
                <div class="text-xs md:text-lg mt-3 sm:mt-8 mb-0 text-center">
                    {{ service }}
                </div>
            </div>
        </div>
        <i18n path="summary" tag="p">
            <template #prospectus>
                <locale-link to="/sponsor/prospectus" highlight underline>{{
                    $t('terms.prospectus')
                }}</locale-link>
            </template>
            <template #contact>
                <ext-link
                    href="mailto:sponsorship@pycon.tw"
                    highlight
                    underline
                    >{{ $t('terms.contact') }}</ext-link
                >
            </template>
        </i18n>
    </i18n-page-wrapper>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import CoreH1 from '@/components/core/titles/H1'
import LocaleLink from '@/components/core/links/LocaleLink.vue'
import ExtLink from '@/components/core/links/ExtLink.vue'
import i18n from '@/i18n/sponsor/index.i18n'
import ServiceImg1 from '@/static/img/sponsor/CommunityVisibility.svg'
import ServiceImg2 from '@/static/img/sponsor/Recruitment.svg'
import ServiceImg3 from '@/static/img/sponsor/BrandPromote.svg'
import ServiceImg4 from '@/static/img/sponsor/TalentConnection.svg'

export default {
    i18n,
    name: 'PageSponsor',
    components: {
        I18nPageWrapper,
        CoreH1,
        ExtLink,
        LocaleLink,
    },
    data() {
        return {
            sponsorServices: [
                ServiceImg1,
                ServiceImg2,
                ServiceImg3,
                ServiceImg4,
            ],
        }
    },
    methods: {
        getImgStyle(img) {
            return {
                'background-image': `url(${img})`,
            }
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
