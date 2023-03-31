<template>
    <div>
        <banner>
            <div class="flex flex-col mt-8">
                <core-h1
                    :title="$t('titlePart1')"
                    class="mx-4 text-[40px] md:mb-0"
                ></core-h1>
                <core-h1
                    v-if="$t('titlePart2')"
                    :title="$t('titlePart2')"
                    class="mx-4"
                ></core-h1>
            </div>
            <div class="flex flex-col md:grid-cols-2">
                <i18n
                    class="md:text-align-center"
                    path="pageAbstract"
                    tag="div"
                >
                    <template #br><br /></template>
                    <template v-if="shouldBreak" #conditionalBr>
                        <br />
                    </template>
                </i18n>
            </div>
        </banner>

        <i18n-page-wrapper class="px-8 sm:px-10 md:px-32 lg:px-60" custom-x>
            <!-- 大會資訊 -->
            <div class="pb-8 mt-10 md:mt-0">
                <h2 class="mt-[-40px] text-[32px]">
                    {{ $t('about.title') }}
                </h2>
                <ul class="list-disc text-[18px] ul-p-0">
                    <i18n class="leading-[30px] p-0" path="about.date" tag="li">
                        <template #br><br /></template>
                    </i18n>
                    <i18n
                        class="leading-[30px] p-0"
                        path="about.place"
                        tag="li"
                    >
                        <template #br><br /></template>
                    </i18n>
                </ul>
            </div>

            <!-- 購票方案 -->
            <div class="mb-12">
                <h2 class="text-[32px]">{{ $t('ticketsIntro.title') }}</h2>
                <i18n
                    path="ticketsIntro.description"
                    tag="p"
                    class="leading-[30px] text-[18px]"
                >
                    <template #financialAid>
                        <locale-link
                            :to="pageLinks.financialAid"
                            underline
                            highlight
                            >{{ $t('terms.financialAid') }}</locale-link
                        >
                    </template>
                </i18n>
            </div>
            <div class="w-full flex flex-col gap-[80px] mb-[50px]">
                <div
                    v-for="(ticket, index) in ticketInfoConfig"
                    :key="`ticket_info_${index}`"
                    class="
                        ticketContainer
                        flex flex-col
                        xl:flex-row
                        justify-around
                    "
                >
                    <div class="m-auto pt-0 px-0 pb-[24px] min-[1440px]:p-0">
                        <img
                            :src="ticket.image"
                            :alt="ticket.title"
                            class="w-20 mx-auto pt-0 px-0 pb-[12px]"
                        />
                        <div
                            class="
                                font-serif font-semibold
                                text-center
                                min-w-[190px]
                            "
                            :style="ticketTitleStyle"
                        >
                            {{ $t(ticket.titleI18nKey) }}
                        </div>
                    </div>
                    <ul class="features">
                        <li
                            v-for="(feature, i) in ticket.features"
                            :key="`ticket_info_${ticket.tag}_features_${i}`"
                            class="font-sans text-[18px] li-mt-0 li-mb-6"
                        >
                            ✓ {{ $t(`features.${feature}`) }}
                        </li>
                    </ul>
                    <div class="price">
                        <div
                            v-if="ticket.priceOnSale"
                            class="
                                font-bold
                                text-center
                                mx-1.5
                                my-auto
                                text-pink-700
                            "
                        >
                            {{ ticket.priceOnSale }}
                        </div>
                        <div
                            v-if="ticket.price"
                            :class="isStrikethrough(!!ticket.priceOnSale)"
                        >
                            {{ ticket.price }}
                        </div>
                        <div v-if="ticket.priceI18nKey">
                            {{ $t(ticket.priceI18nKey) }}
                        </div>
                    </div>
                    <div class="flex items-center mx-auto">
                        <text-button
                            :href="
                                ticket.statusI18nKey ===
                                ticketSellingStatus.SELLING
                                    ? ticket.link
                                    : null
                            "
                            small
                            >{{
                                $t(`sellingStatus.${ticket.statusI18nKey}`)
                            }}</text-button
                        >
                    </div>
                </div>
            </div>

            <!-- 購票前請留意 -->
            <div class="mb-[60px]">
                <h2 class="text-[32px]">
                    {{ $t('beforeBuyingTickets.title') }}
                </h2>
                <ul class="list-disc text-[18px] ul-p-0">
                    <li
                        v-for="(_, i) in $t('beforeBuyingTickets.content')"
                        :key="`beforeBuyingTickets.${i}`"
                        class="leading-[30px] li-mb-44"
                    >
                        <i18n
                            :path="`beforeBuyingTickets.content.${i}.title`"
                            tag="div"
                        >
                            <template #br><br /></template>
                        </i18n>
                        <i18n
                            v-for="(string, index) in $t(
                                `beforeBuyingTickets.content.${i}.description`,
                            )"
                            :key="`${string}.${index}`"
                            class="leading-[30px]"
                            :path="`beforeBuyingTickets.content.${i}.description.${index}`"
                            tag="div"
                        >
                            <template #financialAid>
                                <locale-link
                                    :to="pageLinks.financialAid"
                                    underline
                                    highlight
                                    >{{ $t('terms.financialAid') }}</locale-link
                                >
                            </template>
                        </i18n>
                    </li>
                </ul>
            </div>

            <!-- 注意事項 -->
            <div>
                <h2>{{ $t('notice.title') }}</h2>
                <ul class="list-decimal text-[18px] ul-p-0">
                    <li
                        v-for="(_, i) in $t('notice.content')"
                        :key="`notice.${i}`"
                        class="leading-[30px] li-mt-0 li-mb-44"
                    >
                        <i18n :path="`notice.content.${i}.title`" tag="div">
                            <template #br><br /></template>
                            <template #codeOfConduct>
                                <locale-link
                                    :to="pageLinks.codeOfConduct"
                                    underline
                                    highlight
                                    >{{
                                        $t('terms.codeOfConduct')
                                    }}</locale-link
                                >
                            </template>
                            <template #everybodyContributesPrinciple>
                                <locale-link
                                    :to="
                                        pageLinks.everybodyContributesPrinciple
                                    "
                                    underline
                                    highlight
                                    >{{
                                        $t(
                                            'terms.everybodyContributesPrinciple',
                                        )
                                    }}</locale-link
                                >
                            </template>
                            <template #financialAid>
                                <locale-link
                                    :to="pageLinks.financialAid"
                                    underline
                                    highlight
                                    >{{ $t('terms.financialAid') }}</locale-link
                                >
                            </template>
                            <template #privacyPolicy>
                                <locale-link
                                    :to="pageLinks.privacyPolicy"
                                    underline
                                    highlight
                                    >{{
                                        $t('terms.privacyPolicy')
                                    }}</locale-link
                                >
                            </template>
                            <template #organizerEmail>
                                <locale-link
                                    :to="pageLinks.organizerEmail"
                                    underline
                                    highlight
                                    >{{
                                        $t('terms.organizerEmail')
                                    }}</locale-link
                                >
                            </template>
                        </i18n>
                        <i18n
                            v-for="(string, index) in $t(
                                `notice.content.${i}.description`,
                            )"
                            :key="`${string}.${index}`"
                            :path="`notice.content.${i}.description.${index}`"
                            class="leading-[30px]"
                            tag="div"
                        >
                            <template #nonCorporateTicketsInvoicing>
                                <locale-link
                                    :to="pageLinks.nonCorporateTicketsInvoicing"
                                    highlight
                                    underline
                                    >{{
                                        $t('terms.nonCorporateTicketsInvoicing')
                                    }}</locale-link
                                >
                            </template>
                            <template #organizerEmail>
                                <locale-link
                                    :to="pageLinks.organizerEmail"
                                    highlight
                                    underline
                                    >{{
                                        $t('terms.organizerEmail')
                                    }}</locale-link
                                >
                            </template>
                        </i18n>
                    </li>
                </ul>
            </div>
        </i18n-page-wrapper>
    </div>
</template>

<script>
import i18n from '@/i18n/registration/tickets.i18n'
import {
    ticketSellingStatus,
    ticketInfoConfig,
    pageLinks,
} from '@/configs/pageTickets'
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import CoreH1 from '@/components/core/titles/H1'
import Banner from '@/components/core/layout/Banner'
import { LocaleLink } from '@/components/core/links'
import TextButton from '@/components/core/buttons/TextButton'

export default {
    i18n,
    name: 'PageTickets',
    components: {
        Banner,
        CoreH1,
        I18nPageWrapper,
        LocaleLink,
        TextButton,
    },
    data() {
        return {
            pageLinks,
            ticketsBanner: require('~/static/img/about/Banner.svg'),
            ticketInfoConfig,
            ticketSellingStatus,
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
        shouldBreak() {
            if (process.client) {
                const width = window.innerWidth
                if (width < 768) {
                    return true
                }
            }
            return false
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
ul.ul-p-0 {
    padding: 0;
}

li.li-mt-0 {
    margin-top: 0;
}

li.li-mb-44 {
    margin-bottom: 44px;
}

li.li-mb-6 {
    margin-bottom: 6px;
}

.ticketContainer .ticketHeader {
    @apply m-auto pt-0 px-0 pb-[24px];
    @media (min-width: 1440px) {
        @apply p-0;
    }
}

.ticketContainer .features {
    @apply flex flex-col justify-center mx-auto min-w-0 pt-0 px-0 pb-[24px];
    margin-bottom: 0 !important;
    @media (min-width: 1440px) {
        @apply p-0 min-w-[240px];
    }
}

.ticketContainer .price {
    @apply flex flex-row-reverse xl:flex-col text-center m-auto text-[22px] pt-0 px-0 pb-[24px];
    @media (min-width: 1440px) {
        @apply text-[28px] p-0;
    }
}

h2 {
    @apply font-serif font-bold;
    @apply text-center text-[28px] text-pink-700;
    @apply pb-4 pt-0 xl:pb-10 xl:pt-4;
    @apply mt-0 mb-2 tracking-widest;
    @media (min-width: 1440px) {
        @apply text-[32px];
    }
}
</style>
