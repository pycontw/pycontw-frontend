<template>
    <i18n-page-wrapper>
        <core-h1 :title="$t('title')"></core-h1>
        <div>
            <i18n
                v-for="(intro, i) in $t('intro')"
                :key="`sponsor_intro_${i}`"
                :path="`intro.${i}`"
                tag="p"
            >
                <template #br><br /></template>
            </i18n>
        </div>
        <div class="flex flex-col md:grid md:grid-cols-3">
            <intro-milestone
                v-for="(item, index) in $t('milestone')"
                :key="`sponsor_milestone_${index}`"
                :achievement="item.achievement"
                :achievement-number="item.achievementNumber"
                :achievement-unit="item.achievementUnit"
            >
            </intro-milestone>
        </div>
        <div>
            <i18n
                v-for="(intro, i) in $t('serviceIntro')"
                :key="`sponsor_service_intro_${i}`"
                :path="`serviceIntro.${i}`"
                tag="p"
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
                    class="
                        bg-contain bg-no-repeat
                        md:w-[138px] md:h-[138px]
                        w-[112px]
                        h-[112px]
                    "
                    :style="getImgStyle(sponsorServices[i])"
                ></div>
                <div class="text-xs md:text-base mt-3 sm:mt-8 mb-0 text-center">
                    {{ service }}
                </div>
            </div>
        </div>
        <i18n path="summary" tag="p">
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
            <text-button :href="sponsorFormLink">
                {{ $t('cta.text') }}
            </text-button>
        </div>
    </i18n-page-wrapper>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import CoreH1 from '@/components/core/titles/H1'
import TextButton from '@/components/core/buttons/TextButton'
import IntroMilestone from '@/components/intro/IntroMilestone'
import { ExtLink } from '@/components/core/links'
import { sponsorFormLink } from '@/configs/pageSponsors'
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
        IntroMilestone,
    },
    data() {
        return {
            sponsorFormLink,
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
p {
    @apply leading-[176%] md:text-[20px] text-[16px];
}
</style>
