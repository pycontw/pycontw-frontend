<template>
    <i18n-page-wrapper class="text-xs md:text-lg">
        <core-h1 :title="$t('title')"></core-h1>
        <div>
            <i18n
                v-for="(intro, i) in $t('intro')"
                :key="`sponsor_intro_${i}`"
                :path="`intro.${i}`"
                tag="p"
                class="sponsor_context"
            >
                <template #br><br /></template>
            </i18n>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-4 mt-3 sm:mt-0 mb-10">
            <div
                v-for="(service, i) in $t('services')"
                :key="`sponsor_services_${i}`"
                class="flex flex-col items-center mt-5 sm:mt-12"
            >
                <div
                    class="icon"
                    :style="getImgStyle(sponsorServices[i])"
                ></div>
                <div class="text-xs md:text-base mt-3 sm:mt-8 mb-0 text-center">
                    {{ service }}
                </div>
            </div>
        </div>
        <i18n path="summary" tag="p" class="sponsor_context">
            <template #contact>
                <ext-link
                    href="mailto:sponsorship@python.tw"
                    highlight
                    underline
                    >{{ $t('terms.contact') }}</ext-link
                >
            </template>
        </i18n>
        <div class="text-center mt-10">
            <text-button :href="$t('cta.link')">
                {{ $t('cta.text') }}
            </text-button>
        </div>
    </i18n-page-wrapper>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import CoreH1 from '@/components/core/titles/H1'
import TextButton from '@/components/core/buttons/TextButton'
import { ExtLink } from '@/components/core/links'
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
        TextButton,
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

<style lang="postcss" scoped>
.icon {
    @apply bg-contain bg-no-repeat;
    width: 112px;
    height: 112px;
    @media (min-width: 768px) {
        width: 138px;
        height: 138px;
    }
}
.sponsor_context {
    font-size: 16px;
    line-height: 176%;
    @media (min-width: 768px) {
        font-size: 20px;
    }
}
</style>
