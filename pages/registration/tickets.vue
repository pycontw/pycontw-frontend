<template>
    <div class="py-10 md:py-24 lg:py24">
        <banner>
            <template #default>
                <div
                    class="hidden md:block md:w-full md:h-full"
                    :style="bannerStyle"
                ></div>
            </template>
            <template #text>
                <core-h1 :title="$t('title')"></core-h1>
                <p class="w-full md:w-3/4 leading-6">
                    {{ $t('pageAbstract') }}
                </p>
            </template>
        </banner>

        <i18n-page-wrapper class="i18n__custom pt-8 px-8 md:px-57 lg:px-56">
            <!-- intro -->
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
                        <div class="title">
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
                        <text-button v-else small>{{
                            $t('buttonDisabledText')
                        }}</text-button>
                    </div>
                </div>
            </div>
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
                    image: require('~/static/img/registration/tickets/earlyBird.svg'),

                    // The strings in this array are the tags listed in `features` object
                    // of i18n file (~i18n/registration/tickets.i18n.js).
                    features: [
                        'onSales',
                        'limited100',
                        'pyckage',
                        'conference',
                    ],
                    link: 'https://pycontw.kktix.cc',
                },
                {
                    tag: 'regular',
                    titleI18NPath: 'ticketRegular',
                    price: 'NT$ 2,600',
                    image: require('~/static/img/registration/tickets/regular_disabled.svg'),
                    features: ['pyckage', 'conference'],
                    link: null,
                },
                {
                    tag: 'enterprise',
                    titleI18NPath: 'ticketEnterprise',
                    price: 'NT$ 3,600',
                    image: require('~/static/img/registration/tickets/enterprise_disabled.svg'),
                    features: ['vatAvailable', 'pyckage', 'conference'],
                    link: null,
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
    },
    methods: {
        isStrikethrough(indicator) {
            return indicator ? { 'line-through': true } : {}
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
.introContent {
    @apply leading-5;
    font-size: 16px;
    @media (min-width: 1280px) {
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
    @apply my-auto;
    padding: 0 0 24px;
    @media (min-width: 1280px) {
        padding: 0;
    }
}
.ticketContainer .icon {
    @apply w-20 mx-auto;
    padding: 0 0 12px;
}
.ticketContainer .title {
    @apply font-serif font-semibold text-center;
    font-size: 22px;
    @media (min-width: 1280px) {
        font-size: 32px;
    }
}

.ticketContainer .features {
    @apply flex flex-col justify-center mx-auto;
    margin-bottom: 0 !important;
    padding: 0 0 24px;
    @media (min-width: 1280px) {
        padding: 0;
    }
}
.ticketContainer .feature {
    @apply font-sans;
    font-size: 16px;
    @media (min-width: 1280px) {
        font-size: 18px;
    }
}

.ticketContainer .price {
    @apply flex flex-row-reverse xl:flex-col;
    @apply text-center m-auto;
    padding: 0 0 24px;
    font-size: 22px;
    @media (min-width: 1280px) {
        padding: 0;
        font-size: 28px;
    }
}
.ticketContainer .priceOnSale {
    @apply font-bold text-center mx-1.5 my-auto;
    color: #c386ae;
}

.ticketContainer .button {
    @apply flex items-center mx-auto;
}

h2 {
    @apply font-serif font-bold text-center pb-4 pt-8 xl:pb-10 xl:pt-14;
    @apply mt-0 mb-2 tracking-widest;
    font-size: 28px;
    color: #c386ae;

    @media (min-width: 1280px) {
        font-size: 32px;
    }
}
</style>
