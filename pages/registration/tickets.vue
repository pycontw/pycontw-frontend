<template>
    <div>
        <banner>
            <div class="mt-8 flex flex-col">
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
            <div class="mt-10 pb-8 md:mt-0">
                <h2 class="mt-[-40px] text-[32px]">
                    {{ $t('about.title') }}
                </h2>
                <ul class="ul-p-0 list-disc text-[18px]">
                    <i18n class="p-0 leading-[30px]" path="about.date" tag="li">
                        <template #br><br /></template>
                    </i18n>
                    <i18n
                        class="p-0 leading-[30px]"
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
                    class="text-[18px] leading-[30px]"
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
            <section class="mb-[50px] flex w-full flex-col gap-20">
                <div
                    v-for="(ticket, index) in ticketInfoConfig"
                    :key="`tickets.${index}`"
                    class="flex flex-col xl:flex-row"
                >
                    <div
                        class="m-auto flex flex-1 flex-col items-center justify-center pb-6 xl:mr-2 xl:flex-grow-[2] xl:items-start xl:pb-0"
                    >
                        <img
                            :src="ticket.image"
                            :alt="ticket.title"
                            class="mx-auto w-20 px-0 pb-[12px] pt-0 xl:m-0"
                        />
                        <div
                            class="font-serif font-semibold"
                            :style="ticketTitleStyle"
                        >
                            {{ $t(ticket.titleI18nKey) }}
                        </div>
                    </div>
                    <ul
                        class="features mx-auto flex flex-1 flex-col justify-center xl:flex-grow-[4]"
                    >
                        <li
                            v-for="(feature, i) in ticket.featuresI18nKey"
                            :key="`tickets.features.${i}`"
                            class="li-mt-0 li-mb-6 flex gap-1 font-sans text-[18px]"
                        >
                            ✓
                            <i18n
                                class="inline-block"
                                :path="`features.${feature}`"
                                tag="div"
                            >
                                <template #sponsorshipFromPyConTW>
                                    <locale-link
                                        :to="pageLinks.financialAid"
                                        underline
                                        highlight
                                    >
                                        {{ $t('terms.sponsorshipFromPyConTW') }}
                                    </locale-link>
                                </template>
                                <template #groupBuyCorporateApplication>
                                    <ext-link
                                        :href="
                                            pageLinks.groupBuyCorporateTicketsForm
                                        "
                                        highlight
                                        underline
                                        >{{
                                            $t(
                                                'terms.groupBuyCorporateApplication',
                                            )
                                        }}</ext-link
                                    >
                                </template>
                            </i18n>
                        </li>
                    </ul>

                    <div
                        class="mx-auto pb-6 xl:flex xl:flex-1 xl:flex-grow-[2] xl:items-center xl:pb-0"
                    >
                        <div
                            v-if="ticket.priceOnSale"
                            class="mx-1.5 my-auto text-center font-bold text-pink-700"
                        >
                            {{ ticket.priceOnSale }}
                        </div>
                        <div
                            v-if="ticket.price"
                            :class="isStrikethrough(!!ticket.priceOnSale)"
                        >
                            {{ ticket.price }}
                        </div>
                        <div v-else-if="ticket.priceI18nKey">
                            {{ $t(ticket.priceI18nKey) }}
                        </div>
                        <div v-else-if="ticket.prices">
                            <div
                                v-for="(priceItem, priceIndex) in ticket.prices"
                                :key="`price-${priceIndex}`"
                                class="mb-[24px]"
                            >
                                <div class="text-[20px] font-bold">
                                    {{ $t(priceItem.titleI18nKey) }}
                                </div>
                                <div>{{ priceItem.price }}</div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="sellingStatusButton flex items-center justify-center xl:justify-end"
                    >
                        <text-button
                            :href="
                                ticket.statusI18nKey ===
                                    ticketSellingStatus.SELLING ||
                                ticket.statusI18nKey ===
                                    ticketSellingStatus.APPLY
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
            </section>

            <!-- 購票前請留意 -->
            <div class="mb-[60px]">
                <h2 class="text-[32px]">
                    {{ $t('beforeBuyingTickets.title') }}
                </h2>
                <ul class="ul-p-0 list-disc text-[18px]">
                    <li
                        v-for="(_, i) in $t('beforeBuyingTickets.content')"
                        :key="`beforeBuyingTickets.${i}`"
                        class="li-mb-44 leading-[30px]"
                    >
                        <i18n
                            :path="`beforeBuyingTickets.content.${i}.title`"
                            tag="div"
                        >
                            <template #br><br /></template>
                            <template #corporateTicketPage>
                                <ext-link
                                    :href="pageLinks.kktixCorporate2023"
                                    underline
                                    highlight
                                    >{{
                                        $t('terms.corporateTicketPage')
                                    }}</ext-link
                                >
                            </template>
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
                            <template #corporateTicketPage>
                                <ext-link
                                    :href="pageLinks.kktixCorporate2023"
                                    underline
                                    highlight
                                    >{{
                                        $t('terms.corporateTicketPage')
                                    }}</ext-link
                                >
                            </template>
                            <template #nonCorporateTicketsInvoicing>
                                <ext-link
                                    :href="
                                        pageLinks.nonCorporateTicketsInvoicing
                                    "
                                    highlight
                                    underline
                                    >{{
                                        $t('terms.nonCorporateTicketsInvoicing')
                                    }}</ext-link
                                >
                            </template>
                            <template #groupBuyCorporateTicketsForm>
                                <ext-link
                                    :href="
                                        pageLinks.groupBuyCorporateTicketsForm
                                    "
                                    highlight
                                    underline
                                    >{{
                                        $t('terms.groupBuyCorporateTicketsForm')
                                    }}</ext-link
                                >
                            </template>
                            <template #groupBuyCorporateTickets>
                                <ext-link
                                    :href="pageLinks.kktixCorporate2023"
                                    highlight
                                    underline
                                    >{{
                                        $t('terms.groupBuyCorporateTickets')
                                    }}</ext-link
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
                            <template #sponsorshipFromPyConTW>
                                <ext-link
                                    :href="pageLinks.kktixReserved2023"
                                    underline
                                    highlight
                                    >{{
                                        $t('tickets.sponsorshipFromPyConTW')
                                    }}</ext-link
                                >
                            </template>
                        </i18n>
                    </li>
                </ul>
            </div>

            <!-- 注意事項 -->
            <div>
                <h2>{{ $t('notice.title') }}</h2>
                <ul class="ul-p-0 list-decimal text-[18px]">
                    <li
                        v-for="(_, i) in $t('notice.content')"
                        :key="`notice.${i}`"
                        class="li-mt-0 li-mb-44 leading-[30px]"
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
                                <ext-link
                                    :href="
                                        pageLinks.everybodyContributesPrinciple
                                    "
                                    underline
                                    highlight
                                    >{{
                                        $t(
                                            'terms.everybodyContributesPrinciple',
                                        )
                                    }}</ext-link
                                >
                            </template>
                            <template #corporateTicketPage>
                                <ext-link
                                    :href="pageLinks.kktixCorporate2023"
                                    highlight
                                    underline
                                    >{{
                                        $t('terms.corporateTicketPage')
                                    }}</ext-link
                                >
                            </template>
                            <template #nonCorporateTicketsInvoicing>
                                <ext-link
                                    :href="
                                        pageLinks.nonCorporateTicketsInvoicing
                                    "
                                    highlight
                                    underline
                                    >{{
                                        $t('terms.nonCorporateTicketsInvoicing')
                                    }}</ext-link
                                >
                            </template>
                            <template #corporateTickets>
                                <ext-link
                                    :href="pageLinks.kktixCorporate2023"
                                    highlight
                                    underline
                                    >{{
                                        $t('terms.corporateTickets')
                                    }}</ext-link
                                >
                            </template>
                            <template #groupBuyCorporateTicketsForm>
                                <ext-link
                                    :href="
                                        pageLinks.groupBuyCorporateTicketsForm
                                    "
                                    highlight
                                    underline
                                    >{{
                                        $t('terms.groupBuyCorporateTicketsForm')
                                    }}</ext-link
                                >
                            </template>
                            <template #concessionTicket>
                                <ext-link
                                    :href="pageLinks.kktixIndividual2023"
                                    underline
                                    highlight
                                    >{{
                                        $t('tickets.concessionTicket')
                                    }}</ext-link
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
                            <template #kktixOnBehalf>
                                <locale-link
                                    :href="pageLinks.kktixOnBehalf"
                                    underline
                                    highlight
                                    >{{
                                        $t('terms.kktixOnBehalf')
                                    }}</locale-link
                                >
                            </template>
                            <template #kktixTicketExchangeRefundPolicy>
                                <locale-link
                                    :href="pageLinks.kktixOnBehalf"
                                    underline
                                    highlight
                                    >{{
                                        $t(
                                            'terms.kktixTicketExchangeRefundPolicy',
                                        )
                                    }}</locale-link
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
                            <template #contact>
                                <ext-link
                                    :href="pageLinks.organizerEmail"
                                    underline
                                    highlight
                                >
                                    organizers@python.tw
                                </ext-link>
                            </template>
                            <template #officialWebsite>
                                <ext-link
                                    :href="pageLinks.officialWebsite"
                                    highlight
                                    underline
                                    >{{ $t('terms.officialWebsite') }}</ext-link
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
                            <template #concession>
                                <ext-link
                                    :href="pageLinks.kktixIndividual2023"
                                    underline
                                    highlight
                                    >{{ $t('tickets.concession') }}</ext-link
                                >
                            </template>
                            <template
                                #identityVerificationOfPeopleWithDisability
                            >
                                <ext-link
                                    :href="
                                        pageLinks.identityVerificationOfPeopleWithDisability
                                    "
                                    highlight
                                    underline
                                    >{{
                                        $t(
                                            'terms.identityVerificationOfPeopleWithDisability',
                                        )
                                    }}</ext-link
                                >
                            </template>
                            <template #disabilityCertification>
                                <ext-link
                                    :href="pageLinks.disabilityCertification"
                                    underline
                                    highlight
                                    >{{
                                        $t('terms.disabilityCertification')
                                    }}</ext-link
                                >
                            </template>
                            <template #individualRegular>
                                <ext-link
                                    :href="pageLinks.kktixIndividual2023"
                                    underline
                                    highlight
                                    >{{
                                        $t('tickets.individualRegular')
                                    }}</ext-link
                                >
                            </template>
                            <template #nonCorporateTicketsInvoicing>
                                <ext-link
                                    :href="
                                        pageLinks.nonCorporateTicketsInvoicing
                                    "
                                    highlight
                                    underline
                                    >{{
                                        $t('terms.nonCorporateTicketsInvoicing')
                                    }}</ext-link
                                >
                            </template>
                            <template #groupBuyCorporateTicketsForm>
                                <ext-link
                                    :href="
                                        pageLinks.groupBuyCorporateTicketsForm
                                    "
                                    highlight
                                    underline
                                    >{{
                                        $t('terms.groupBuyCorporateTicketsForm')
                                    }}</ext-link
                                >
                            </template>
                            <template #contact>
                                <ext-link
                                    :href="pageLinks.organizerEmail"
                                    highlight
                                    underline
                                >
                                    organizers@python.tw
                                </ext-link>
                            </template>
                            <template #concessionTicket>
                                <ext-link
                                    :href="pageLinks.kktixIndividual2023"
                                    underline
                                    highlight
                                    >{{
                                        $t('tickets.concessionTicket')
                                    }}</ext-link
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
import { ExtLink, LocaleLink } from '@/components/core/links'
import TextButton from '@/components/core/buttons/TextButton'

export default {
    i18n,
    name: 'PageTickets',
    components: {
        Banner,
        CoreH1,
        ExtLink,
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

.features {
    @apply xl:mb-0;
}
.sellingStatusButton {
    @media (min-width: 1480px) {
        flex-basis: 160px;
    }
}

h2 {
    @apply font-serif font-bold;
    @apply text-center text-[28px] text-pink-700;
    @apply pb-4 pt-0 xl:pb-10 xl:pt-4;
    @apply mb-2 mt-0 tracking-widest;
    @media (min-width: 1440px) {
        @apply text-[32px];
    }
}
</style>
