<template>
    <div class="tickets py-10 md:py-24 lg:py24">
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
            <div class="tickets__individual">
                <h3>{{ $t('individualTicket.title') }}</h3>
                <div class="tickets__summary">
                    <i18n path="individualTicket.summary" tag="p">
                        <template #highlight>
                            <span class="purple__highlight">
                                {{ $t('individualTicket.highlight') }}
                            </span>
                        </template>
                    </i18n>
                    <p>{{ $t('individualTicket.pySafe') }}</p>
                </div>
                <div class="tickets__boxWrapper">
                    <div
                        v-for="(individual, index) in $t(
                            'individualTicket.type',
                        )"
                        :key="`individual_${index}`"
                        class="tickets__box"
                    >
                        <h5>{{ individual.name }}</h5>
                        <div class="tickets__boxPrice">
                            <div>
                                <p>{{ individual.discount }}</p>
                            </div>
                            <div class="flex">
                                <p class="tickets__boxPriceHighlight">
                                    {{ individualPrice[index] }}
                                </p>
                                <p>NTD</p>
                            </div>
                        </div>
                        <text-button :href="links.individual" secondary>{{
                            $t('ticketLinkText')
                        }}</text-button>
                    </div>
                </div>
                <img
                    class="tickets__individualCircle"
                    src="~/static/img/registration/TicketsRightCircle.svg"
                    alt="PyConTW Tickets Page Circle Icon"
                />
            </div>
            <div class="tickets__corporate">
                <h3>{{ $t('corporateTicket.title') }}</h3>
                <div class="tickets__summary">
                    <p>
                        <i18n
                            v-for="(text, index) in $t(
                                'corporateTicket.summary',
                            )"
                            :key="`text_${index}`"
                            :path="`corporateTicket.summary.${index}`"
                            tag="span"
                        >
                            <template #discount>
                                <i18n
                                    path="corporateTicket.discount"
                                    tag="span"
                                    class="purple__highlight"
                                >
                                    <template #formLink>
                                        <ext-link
                                            :href="links.corporateGroup"
                                            underline
                                        >
                                            {{ $t('corporateTicket.formLink') }}
                                        </ext-link>
                                    </template>
                                </i18n>
                            </template>
                        </i18n>
                    </p>
                    <p>{{ $t('corporateTicket.pySafe') }}</p>
                </div>
                <div class="tickets__boxWrapper">
                    <div class="tickets__box">
                        <h5>{{ $t('corporateTicket.type.name') }}</h5>
                        <div class="tickets__boxPrice">
                            <div>
                                <p>{{ $t('corporateTicket.type.discount') }}</p>
                            </div>
                            <div class="flex">
                                <p class="tickets__boxPriceHighlight">
                                    {{ corporatePrice }}
                                </p>
                                <p>NTD</p>
                            </div>
                        </div>
                        <text-button :href="links.corporate" secondary>{{
                            $t('ticketLinkText')
                        }}</text-button>
                    </div>
                </div>
                <img
                    class="tickets__corporateCircle"
                    src="~/static/img/registration/TicketsLeftCircle.svg"
                    alt="PyConTW Tickets Page Circle Icon"
                />
            </div>
            <div class="tickets__notices">
                <h2>{{ $t('notices.title') }}</h2>
                <ul class="list-disc">
                    <i18n
                        v-for="(notice, index) in $t('notices.description')"
                        :key="`notice_${index}`"
                        :path="`notices.description.${index}`"
                        tag="li"
                    >
                        <template #reimbursement>
                            <li class="purple__highlight">
                                {{ $t('notices.reimbursement') }}
                            </li>
                        </template>
                        <template #everybodyPays>
                            <ext-link
                                :href="links.everybodyPays"
                                highlight
                                underline
                            >
                                {{ $t('notices.everybodyPays') }}
                            </ext-link>
                        </template>
                    </i18n>
                </ul>
                <img
                    class="tickets__curveDecorate"
                    src="~/static/img/registration/TicketsCurve.svg"
                    alt="PyConTW Tickets Page Curve Icon"
                />
                <img
                    class="tickets__noticesCircle"
                    src="~/static/img/registration/TicketsRightCircle.svg"
                    alt="PyConTW Tickets Page Circle Icon"
                />
            </div>
            <div class="tickets__financialAid">
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
                                class="underline"
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
import TicketsBanner from '@/static/img/about/Banner.svg'
import TextButton from '@/components/core/buttons/TextButton'

export default {
    i18n,
    name: 'PageRegistrationConferenceTickets',
    components: {
        CoreH1,
        I18nPageWrapper,
        Banner,
        ExtLink,
        LocaleLink,
        TextButton,
    },
    data() {
        return {
            ticketsBanner: TicketsBanner,
            individualPrice: ['1,500', '1,800'],
            corporatePrice: '3,000',
            links: {
                individual: 'https://pycontw.kktix.cc/events/2021-individual',
                corporate: 'https://pycontw.kktix.cc/events/2021-corporate',
                corporateGroup: 'https://forms.gle/3DRBk24HBZLMsV7w6',
                everybodyPays:
                    'http://jessenoller.com/blog/2011/05/25/pycon-everybody-pays',
            },
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
}
</script>

<style scoped>
.purple__highlight {
    color: #9387ff;
}

.tickets h2 {
    @apply font-serif font-bold text-center;
    @apply text-xl mt-14 mb-10 md:text-2xl tracking-widest;
    color: #f3cc39;
}

.tickets h3 {
    @apply font-serif font-bold text-base md:text-xl;
}

.tickets h5 {
    @apply text-center text-base sm:text-lg;
    @apply md:text-xl font-bold mt-6 md:mt-8;
    color: #c2a53a;
}

.tickets span {
    @apply text-xs md:text-base;
}

.tickets ul.list-disc {
    @apply pl-4 md:pl-14;
}

.tickets__summary {
    @apply pb-9;
}

.tickets__summary p {
    @apply text-xs md:text-base my-0;
}

.tickets .tickets__box {
    @apply text-center box-border rounded-3xl h-56 md:h-72 z-10;
    border: 2px solid #c2a53a;
    box-shadow: 6px 6px 0px #c2a53a;
}

.tickets__boxWrapper {
    @apply grid md:grid-cols-2 gap-10;
}

.tickets__boxPrice {
    @apply flex justify-evenly mt-8 mb-3 md:mt-10 md:mb-6;
    @apply text-xs sm:text-sm md:text-base;
    line-height: 2.4rem;
    @media (min-width: 768px) {
        line-height: 2.85rem;
    }
}

.tickets__boxPrice .tickets__boxPriceHighlight {
    @apply font-bold mr-1 text-2xl md:text-3xl;
    color: #f3cc39;
}

.tickets__notices li,
.tickets__financialAid li {
    @apply text-xs mb-2 md:text-base;
}

.tickets__individualCircle {
    @apply hidden absolute md:block md:right-2 lg:right-12 z-0;
    top: 40rem;
}

.tickets__noticesCircle {
    @apply hidden absolute md:block md:right-2 lg:right-12 z-0;
    top: 107.5rem;
}

.tickets__corporateCircle {
    @apply hidden absolute md:block md:left-2 lg:left-10 z-0;
    top: 54rem;
}

.tickets__curveDecorate {
    @apply hidden absolute md:block md:left-0;
    z-index: -1;
    @media (min-width: 768px) {
        top: 78rem;
    }
    @media (min-width: 1440px) {
        top: 62rem;
    }
}
</style>
