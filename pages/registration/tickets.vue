<template>
    <div class="tickets">
        <banner class="tickets__banner">
            <template #default>
                <div class="tickets__banner__image" :style="bannerStyle"></div>
            </template>
            <template #text>
                <core-h1 :title="$t('pageTitle')"></core-h1>
                <p class="tickets__banner__summary">
                    {{ $t('pageSummary') }}
                </p>
            </template>
        </banner>
        <i18n-page-wrapper class="i18n__custom">
            <div class="tickets__individual">
                <h3>{{ $t('individualTicket.title') }}</h3>
                <i18n
                    path="individualTicket.summary"
                    tag="span"
                    class="tickets__summary"
                >
                    <template #highlight>
                        <span class="purple__highlight">
                            {{ $t('individualTicket.highlight') }}
                        </span>
                    </template>
                </i18n>
                <div class="tickets__box__wrapper">
                    <div
                        v-for="(individual, index) in $t(
                            'individualTicket.type',
                        )"
                        :key="`individual_${index}`"
                        class="tickets__box"
                    >
                        <h5>{{ individual.name }}</h5>
                        <div class="tickets__box__price">
                            <div>
                                <p>{{ individual.discount }}</p>
                            </div>
                            <div class="flex">
                                <p class="tickets__box__price__highlight">
                                    {{ individualPrice[index] }}
                                </p>
                                <p>NTD</p>
                            </div>
                        </div>
                        <ext-link
                            :href="links.individual"
                            class="tickets__box__link"
                            >{{ $t('ticketLinkText') }}</ext-link
                        >
                    </div>
                </div>
                <img
                    class="images tickets__individual__circle"
                    src="~/static/img/registration/TicketsRightCircle.svg"
                    alt="PyConTW Tickets Page Circle Icon"
                />
            </div>
            <div class="tickets__corporate">
                <h3>{{ $t('corporateTicket.title') }}</h3>
                <i18n
                    path="corporateTicket.summary"
                    tag="span"
                    class="tickets__summary"
                >
                    <template #highlight>
                        <span class="purple__highlight">
                            {{ $t('corporateTicket.highlight') }}
                        </span>
                    </template>
                </i18n>
                <div class="tickets__box__wrapper">
                    <div class="tickets__box">
                        <h5>{{ $t('corporateTicket.type.name') }}</h5>
                        <div class="tickets__box__price">
                            <div>
                                <p>{{ $t('corporateTicket.type.discount') }}</p>
                            </div>
                            <div class="flex">
                                <p class="tickets__box__price__highlight">
                                    {{ corporatePrice }}
                                </p>
                                <p>NTD</p>
                            </div>
                        </div>
                        <ext-link
                            :href="links.corporate"
                            class="tickets__box__link"
                            >{{ $t('ticketLinkText') }}</ext-link
                        >
                    </div>
                </div>
                <img
                    class="images tickets__corporate__circle"
                    src="~/static/img/registration/TicketsLeftCircle.svg"
                    alt="PyConTW Tickets Page Circle Icon"
                />
            </div>
            <div class="tickets__reserved">
                <h3>{{ $t('reservedTicket.title') }}</h3>
                <span class="tickets__summary">
                    {{ $t('reservedTicket.summary') }}
                </span>
                <div class="tickets__box__wrapper">
                    <div
                        v-for="(reserved, index) in $t('reservedTicket.type')"
                        :key="`reserved_${index}`"
                        class="tickets__box"
                    >
                        <h5>{{ reserved.name }}</h5>
                        <div class="tickets__box__price">
                            <div>
                                <p>{{ reserved.discount }}</p>
                            </div>
                            <div class="flex">
                                <p class="tickets__box__price__highlight">
                                    {{ reservedPrice[index] }}
                                </p>
                                <p>NTD</p>
                            </div>
                        </div>
                        <ext-link
                            :href="links.reserved"
                            class="tickets__box__link"
                            >{{ $t('ticketLinkText') }}</ext-link
                        >
                    </div>
                </div>
                <img
                    class="images tickets__curve__decorate"
                    src="~/static/img/registration/TicketsCurve.svg"
                    alt="PyConTW Tickets Page Curve Icon"
                />
            </div>
            <div class="tickets__notices">
                <h2>{{ $t('notices.title') }}</h2>
                <ul class="list-disc">
                    <li
                        v-for="(notice, index) in $t(
                            'notices.description',
                        ).slice(0, 3)"
                        :key="`notice_${index}`"
                        :style="highlightNotices(index)"
                    >
                        {{ notice }}
                    </li>
                    <i18n path="notices.everybodyPays.description" tag="li">
                        <template #everybodyPays>
                            <ext-link
                                :href="everybodyPays"
                                highlight
                                underline
                                >{{
                                    $t('notices.everybodyPays.text')
                                }}</ext-link
                            >
                        </template>
                    </i18n>
                    <li
                        v-for="(notice, index) in $t(
                            'notices.description',
                        ).slice(-2)"
                        :key="`notice_${index}`"
                    >
                        {{ notice }}
                    </li>
                </ul>
                <img
                    class="images tickets__notices__circle"
                    src="~/static/img/registration/TicketsRightCircle.svg"
                    alt="PyConTW Tickets Page Circle Icon"
                />
            </div>
            <div class="tickets__financial__aid">
                <h2>{{ $t('financialAid.title') }}</h2>
                <ul class="list-disc">
                    <i18n path="financialAid.description" tag="li">
                        <template #highlight>
                            <span class="purple__highlight">{{
                                $t('financialAid.highlight')
                            }}</span>
                        </template>
                        <template #financialAidLink>
                            <locale-link
                                to="/registration/financial-aid"
                                highlight
                                >{{
                                    $t('financialAid.financialAidLink')
                                }}</locale-link
                            >
                        </template>
                    </i18n>
                </ul>
            </div>
        </i18n-page-wrapper>
    </div>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import i18n from '@/i18n/registration/tickets.i18n'
import CoreH1 from '@/components/core/titles/H1'
import Banner from '@/components/core/layout/Banner'
import ExtLink from '@/components/core/links/ExtLink.vue'
import LocaleLink from '@/components/core/links/LocaleLink.vue'
import TicketsBanner from '@/static/img/registration/TicketsBanner.svg'
import CurveImage from '@/static/img/registration/TicketsCurve.svg'

export default {
    i18n,
    name: 'PageRegistrationConferenceTickets',
    components: {
        CoreH1,
        I18nPageWrapper,
        Banner,
        ExtLink,
        LocaleLink,
    },
    data() {
        return {
            ticketsBanner: TicketsBanner,
            curveImage: CurveImage,
            individualPrice: ['2,600', '3,500'],
            corporatePrice: '5,500',
            reservedPrice: ['1,500', '1,500'],
            links: {
                individual: 'https://pycontw.kktix.cc/events/2021-individual',
                reserved: 'https://pycontw.kktix.cc/events/2021-reserved',
                corporate: 'https://pycontw.kktix.cc/events/2021-corporate',
            },
            everybodyPays:
                'http://jessenoller.com/blog/2011/05/25/pycon-everybody-pays',
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
        highlightNotices() {
            return (noticeIndex) => {
                if (noticeIndex === 0) {
                    return {
                        color: '#9387ff',
                    }
                }
            }
        },
    },
}
</script>

<style scoped>
.i18n__custom {
    @apply pt-8 pb-7 md:pb-20 px-10 md:px-20 lg:px-36 xl:px-56 2xl:px-80;
}

.tickets {
    @apply pt-1 md:pt-24;
}

.tickets h2 {
    @apply font-serif font-bold text-center text-xl mt-14 mb-10 md:text-2xl tracking-widest;
    color: #f3cc39;
}

.tickets h3 {
    @apply font-serif font-bold text-base md:text-xl;
}

.tickets h5 {
    @apply text-center text-base sm:text-lg md:text-xl font-bold mt-4 md:mt-5;
    color: #c2a53a;
}

.tickets ul {
    @apply pl-3;
}

.tickets span {
    @apply text-xs md:text-base;
}

.tickets .images {
    @apply hidden md:block z-0;
}

.tickets__banner {
    @apply px-2 sm:px-12 md:px-10 pt-28 md:pt-0;
}

.tickets__banner__image {
    @apply hidden md:block lg:block md:w-full lg:w-full md:h-full lg:h-full;
}

.tickets__banner__summary {
    @apply w-full md:w-3/4 lg:w-3/4 leading-relaxed text-sm sm:text-base md:text-lg;
}

.tickets__reserved {
    @apply hidden md:block;
}

.tickets .tickets__box {
    @apply text-center box-border rounded-3xl h-48 md:h-56 z-10;
    border: 2px solid #c2a53a;
    box-shadow: 6px 6px 0px #c2a53a;
}

.tickets__box__wrapper {
    @apply grid md:grid-cols-2 gap-10;
}

.tickets__box__price {
    @apply flex justify-evenly mt-5 mb-3 md:mt-4 md:mb-6 text-xs sm:text-sm md:text-base leading-10;
    @media (min-width: 768px) {
        line-height: 2.85rem;
    }
}

.tickets__box__price .tickets__box__price__highlight {
    @apply font-bold mr-1 text-2xl md:text-3xl;
    color: #f3cc39;
}

.tickets__box__link {
    @apply rounded-3xl px-5 py-3 md:px-9 md:py-3 font-bold text-xs md:text-sm;
    border: 4px solid #c7c7c7;
}

.tickets__box__link:hover {
    color: #9387ff;
    border: 4px solid #9387ff;
}

.tickets__summary {
    @apply pb-9 block text-xs sm:text-sm;
}

.purple__highlight {
    color: #9387ff;
}

.tickets__financial__aid a {
    @apply underline;
}

.tickets__notices li,
.tickets__financial__aid li {
    @apply text-xs mb-2 md:text-base;
}

.tickets__individual__circle {
    @apply absolute md:right-2 lg:right-6 xl:right-14 2xl:right-28;
    top: 40rem;
}

.tickets__notices__circle {
    @apply absolute md:right-2 lg:right-6 xl:right-14 2xl:right-28;
    top: 104.5rem;
}

.tickets__corporate__circle {
    @apply absolute md:left-2 lg:left-6 xl:left-14 2xl:left-20;
    top: 51rem;
}

.tickets__curve__decorate {
    @apply absolute md:left-0;
}

@media (min-width: 768px) {
    .tickets__curve__decorate {
        top: 75rem;
    }
}

@media (min-width: 1024px) {
    .tickets__curve__decorate {
        top: 70rem;
    }
}

@media (min-width: 1280px) {
    .tickets__curve__decorate {
        top: 65rem;
    }
}

@media (min-width: 1440px) {
    .tickets__curve__decorate {
        top: 60rem;
    }
}
</style>
