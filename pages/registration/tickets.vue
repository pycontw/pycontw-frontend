<template>
    <div>
        <banner>
            <template #default>
                <div
                    class="hidden md:block md:w-full md:h-full"
                    :style="bannerStyle"
                ></div>
            </template>
            <template #text>
                <core-h1 :title="$t('title')"></core-h1>
                <p class="w-full md:w-3/4 leading-6 text-justify">
                    {{ $t('pageAbstract') }}
                </p>
            </template>
        </banner>

        <i18n-page-wrapper>
            <!-- intro -->

            <div class="pb-8">
                <h2>{{ $t('introConference') }}</h2>
                <i18n path="conferenceContent" tag="p" class="introContent">
                    <template #br><br /></template>
                </i18n>
            </div>

            <div class="pb-12">
                <h2>{{ $t('introTitle') }}</h2>
                <i18n path="introContent" tag="p" class="introContent">
                    <template #fa>
                        <locale-link
                            to="/registration/financial-aid"
                            underline
                            highlight
                            >{{ $t('fa') }}</locale-link
                        >
                    </template>
                    <template #br><br /></template>
                </i18n>
            </div>

            <!-- ticket plans -->
            <div class="tickets">
                <div
                    v-for="(ticketInfo, index) in ticketInfos"
                    :key="`ticket_info_${index}`"
                    class="ticketContainer"
                >
                    <div class="tickerHeader">
                        <img
                            :src="ticketInfo.image"
                            :alt="ticketInfo.tag"
                            class="icon"
                        />
                        <div class="title" :style="ticketTitleStyle">
                            {{ $t(ticketInfo.titleI18NPath) }}
                        </div>
                    </div>
                    <ul class="features">
                        <li
                            v-for="(feature, i) in ticketInfo.features"
                            :key="`ticket_info_${ticketInfo.tag}_features_${i}`"
                            class="feature"
                        >
                            ✓ {{ $t(`features.${feature}`) }}
                        </li>
                    </ul>
                    <div class="price">
                        <div v-if="ticketInfo.priceOnSale" class="priceOnSale">
                            {{ ticketInfo.priceOnSale }}
                        </div>
                        <div :class="isStrikethrough(!!ticketInfo.priceOnSale)">
                            {{ ticketInfo.price }}
                        </div>
                    </div>
                    <div class="button">
                        <text-button
                            v-if="ticketInfo.link"
                            small
                            :href="ticketInfo.link"
                            >{{ $t('buttonText') }}</text-button
                        >
                        <text-button v-else-if="ticketInfo.hasEnded" small>{{
                            $t('buttonTextSalesEnded')
                        }}</text-button>
                        <text-button v-else small>{{
                            $t('buttonTextNotStarted')
                        }}</text-button>
                    </div>
                </div>
            </div>
            <!-- 
                20220530 TODO:
                    需要做一個 個人贊助票的回饋項目 列表
                    回饋項目待提供
            -->
        </i18n-page-wrapper>
    </div>
</template>

<script>
import i18n from '@/i18n/registration/tickets.i18n'

import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import CoreH1 from '@/components/core/titles/H1'
import Banner from '@/components/core/layout/Banner'
import { LocaleLink } from '@/components/core/links'
import TextButton from '@/components/core/buttons/TextButton'

export default {
    i18n,
    name: 'PageRegistrationConferenceTickets',
    components: {
        CoreH1,
        I18nPageWrapper,
        Banner,

        LocaleLink,
        TextButton,
    },
    data() {
        return {
            ticketsBanner: require('~/static/img/about/Banner.svg'),
            ticketInfos: [
                {
                    tag: 'earlyBird',
                    titleI18NPath: 'ticketEarlyBird',
                    priceOnSale: 'NT$ 1,690',
                    price: 'NT$ 2,600',
                    image: require('~/static/img/registration/tickets/earlyBird_disabled.svg'),

                    // The strings in this array are the tags listed in `features` object
                    // of i18n file (~i18n/registration/tickets.i18n.js).
                    features: [
                        'onSales',
                        'limited100',
                        'pyckage',
                        'conference',
                    ],
                    hasEnded: true,
                    link: null,
                },
                {
                    tag: 'regular',
                    titleI18NPath: 'ticketRegular',
                    price: 'NT$ 2,600',
                    image: require('~/static/img/registration/tickets/regular.svg'),
                    features: ['pyckage', 'conference'],
                    link: 'https://pycontw.kktix.cc/events/2022-individual',
                },
                {
                    tag: 'sponsorship',
                    titleI18NPath: 'ticketSponsorship',
                    price: 'NT$ 5,000',
                    image: require('~/static/img/registration/tickets/sponsor_disabled.svg'),
                    // TODO:
                    //  個人贊助票需要有一個錨點可以連到個人贊助票回饋說明
                    features: ['SpecialSouvenir', 'pyckage', 'conference'],
                    link: null,
                },
                {
                    tag: 'latebird',
                    titleI18NPath: 'ticketLateBird',
                    price: 'NT$ 3,600',
                    image: require('~/static/img/registration/tickets/lateBird_disabled.svg'),
                    features: ['conference'],
                    link: null,
                },
                {
                    tag: 'enterprise',
                    titleI18NPath: 'ticketEnterprise',
                    price: 'NT$ 3,600',
                    image: require('~/static/img/registration/tickets/corporate.svg'),
                    features: ['vatAvailable', 'pyckage', 'conference'],
                    link: 'https://pycontw.kktix.cc/events/2022-corporate',
                },
            ],
        }
    },
    computed: {
        bannerStyle() {
            return {
                'background-image': `url(${this.ticketsBanner})`,
                'background-repeat': 'no-repeat',
                'background-position': 'center',
            }
        },
        ticketTitleStyle() {
            return {
                'font-size': this.$i18n.locale === 'en-us' ? '22px' : '32px',
            }
        },
    },
    methods: {
        isStrikethrough(indicator) {
            return indicator ? { 'line-through': true } : {}
        },
    },
    head() {
        return {
            title: this.$i18n.t('og.title'),
            meta: [
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: this.$i18n.t('og.title'),
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: this.$i18n.t('pageAbstract'),
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: this.$i18n.t('pageAbstract'),
                },
            ],
        }
    },
}
</script>

<style lang="postcss" scoped>
.conferenceContent {
    @apply leading-5;
    font-size: 16px;
    @media (min-width: 1440px) {
        font-size: 18px;
    }
}

.introContent {
    @apply leading-5;
    font-size: 16px;
    @media (min-width: 1440px) {
        font-size: 18px;
    }
}

.tickets {
    @apply w-full;
}

.ticketContainer {
    @apply flex flex-col xl:flex-row justify-around;
    @apply py-10 xl:py-8;
}

.ticketContainer .tickerHeader {
    @apply m-auto;
    padding: 0 0 24px;
    @media (min-width: 1440px) {
        padding: 0;
    }
}
.ticketContainer .icon {
    @apply w-20 mx-auto;
    padding: 0 0 12px;
}
.ticketContainer .title {
    @apply font-serif font-semibold text-center;
    min-width: 190px;
    @media (max-width: 1440px) {
        font-size: 24px;
    }
}

.ticketContainer .features {
    @apply flex flex-col justify-center mx-auto;
    margin-bottom: 0 !important;
    padding: 0 0 24px;
    min-width: 0;
    @media (min-width: 1440px) {
        min-width: 240px;
        padding: 0;
    }
}
.ticketContainer .feature {
    @apply font-sans;
    font-size: 16px;
    @media (min-width: 1440px) {
        font-size: 18px;
    }
}

.ticketContainer .price {
    @apply flex flex-row-reverse xl:flex-col;
    @apply text-center m-auto;
    padding: 0 0 24px;
    font-size: 22px;
    @media (min-width: 1440px) {
        padding: 0;
        font-size: 28px;
    }
}
.ticketContainer .priceOnSale {
    @apply font-bold text-center mx-1.5 my-auto text-pink-500;
}

.ticketContainer .button {
    @apply flex items-center mx-auto;
}

h2 {
    @apply font-serif font-bold text-center pb-4 pt-8 xl:pb-10 xl:pt-14;
    @apply mt-0 mb-2 tracking-widest text-pink-500;
    font-size: 28px;

    @media (min-width: 1440px) {
        font-size: 32px;
    }
}
</style>
