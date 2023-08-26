<template>
    <div class="landing">
        <div class="landing__background flex pt-4 md:pt-24">
            <div class="landing__background__items">
                <img
                    class="landing__background__items__meter"
                    src="~@/static/img/landing/meteor-1.png"
                />
                <img
                    class="landing__background__items__meter"
                    src="~@/static/img/landing/meteor-2.png"
                />
                <div class="landing__background__items__curly">
                    <img src="~@/static/img/landing/curly-1.png" />
                </div>
                <div class="landing__background__items__curly">
                    <img src="~@/static/img/landing/curly-2.png" />
                </div>
                <div class="landing__background__items__circle"></div>
                <div class="landing__background__items__square"></div>
                <div class="landing__background__items__cone"></div>
            </div>
            <div
                class="flex h-full w-full flex-col items-start text-pink-700 md:mx-24 lg:mx-32"
            >
                <div class="landing__title" />
                <div
                    class="mt-20 flex w-full flex-wrap justify-center gap-[32px] md:mt-32 md:justify-start"
                >
                    <text-button
                        :href="
                            primaryButton.isExternalLink
                                ? primaryButton.path
                                : ''
                        "
                        :to="
                            !primaryButton.isExternalLink
                                ? primaryButton.path
                                : ''
                        "
                        :primary="primaryButton.isPrimary"
                        :large="primaryButton.isLarge"
                    >
                        {{ $t(primaryButton.textKey) }}
                    </text-button>
                    <text-button
                        v-if="isDisplayingSecondaryBtn"
                        :href="
                            secondaryButton.isExternalLink
                                ? secondaryButton.path
                                : ''
                        "
                        :to="
                            !secondaryButton.isExternalLink
                                ? secondaryButton.path
                                : ''
                        "
                        :primary="secondaryButton.isPrimary"
                        :bordered="secondaryButton.isBordered"
                        :large="secondaryButton.isLarge"
                    >
                        {{ $t(secondaryButton.textKey) }}
                    </text-button>
                </div>
            </div>
        </div>

        <I18nPageWrapper>
            <Intro :is-bulleted="isBulleted"></Intro>
            <div class="pt-12 lg:mx-auto lg:w-full">
                <core-h2
                    :title="$t('bulletinList')"
                    :is-bulleted="isBulleted"
                    class="mx-auto justify-center md:justify-start"
                ></core-h2>
                <bulletin-card-collection></bulletin-card-collection>
            </div>
            <div
                v-if="showIndexSponsorSection"
                id="sponsor"
                class="lg:w-full; pt-12 lg:mx-auto"
            >
                <core-h2
                    :title="$t('sponsorList')"
                    :is-bulleted="isBulleted"
                    class="mx-auto justify-center md:justify-start"
                ></core-h2>
                <sponsor-card-collection
                    v-for="(leveledSponsors, i) in sponsorsData"
                    :key="`index_sponsor_level_${i}`"
                    v-slot="slotProps"
                    :level-name="leveledSponsors.level_name"
                >
                    <sponsor-card
                        v-for="(sponsor, j) in leveledSponsors.sponsors"
                        :key="`index_sponsor_level_${i}_sponsor_${j}`"
                        :class="slotProps.className"
                        :sponsor-name="sponsor.name_en_us"
                        :logo-url="sponsor.logo_url"
                        :tag="getAttributeByLocale(sponsor, 'subtitle')"
                        @click.native="showModal(sponsor)"
                    >
                    </sponsor-card>
                </sponsor-card-collection>
            </div>
        </I18nPageWrapper>
        <transition name="fade">
            <modal
                v-if="isOpened"
                v-model="isOpened"
                :img-urls="selectedSponsor.logo_url"
                :img-bg="true"
                :name="getAttributeByLocale(selectedSponsor, 'name')"
                :intro="getAttributeByLocale(selectedSponsor, 'intro')"
                :website-url="selectedSponsor.website_url"
            />
        </transition>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import i18n from '@/i18n/index.i18n'
import { landingButtonConfig } from '@/configs/pageLanding'
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import TextButton from '@/components/core/buttons/TextButton'
import { BulletinCardCollection } from '@/components/bulletins'
import CoreH2 from '@/components/core/titles/H2'
import SponsorCard from '@/components/sponsors/SponsorCard'
import Modal from '@/components/core/modal/Modal'
import SponsorCardCollection from '@/components/sponsors/SponsorCardCollection'
import Intro from '@/components/intro/Intro'

export default {
    i18n,
    name: 'PageIndex',
    components: {
        CoreH2,
        TextButton,
        BulletinCardCollection,
        SponsorCard,
        Modal,
        SponsorCardCollection,
        I18nPageWrapper,
        Intro,
    },
    data() {
        return {
            isOpened: false,
            primaryButton: landingButtonConfig.CHECK_EVENTS,
            secondaryButton: landingButtonConfig.SECONDARY_JOIN_US,
            selectedSponsor: {},
        }
    },
    fetchOnServer: false,
    computed: {
        ...mapState(['sponsorsData']),
        isBulleted() {
            if (process.client) {
                const width = window.innerWidth
                if (width < 768) {
                    return false
                }
            }
            return true
        },
        conferenceName() {
            return this.$store.state.configs.conferenceName
        },
        conferenceYear() {
            return this.$store.state.configs.conferenceYear
        },
        isDisplayingSecondaryBtn() {
            return this.$store.state.configs.showIndexSecondaryBtn
        },
        showIndexSponsorSection() {
            return this.$store.state.configs.showIndexSponsorSection
        },
    },
    created() {
        this.$store.dispatch('$getSponsorsData')
    },
    methods: {
        showModal(sponsor) {
            this.isOpened = true
            this.selectedSponsor = sponsor
        },
        getAttributeByLocale(data, attr) {
            const localeMap = { 'en-us': 'en_us', 'zh-hant': 'zh_hant' }
            const attributeName = `${attr}_${localeMap[this.$i18n.locale]}`
            return data[attributeName]
        },
    },
}
</script>

<style lang="postcss" scoped>
.landing__background,
.landing__background::after {
    @apply relative inset-0;
    height: calc(100vh - 3rem);
    min-height: 750px;
}

.landing__background::after {
    @apply absolute top-0 h-screen bg-contain bg-center bg-no-repeat;
    content: '';
    background-image: url('~@/static/landing-background-rwd.png');
    z-index: -10;
}
.landing__background__items {
    @apply absolute h-full w-full;
}
.landing__background__items__meter:nth-of-type(1) {
    @apply absolute opacity-0;
    top: 2%;
    left: -29%;
    width: 60vw;
    animation: meteor-fade-in 0.75s ease-out forwards;
}
.landing__background__items__meter:nth-of-type(2) {
    @apply absolute opacity-0;
    top: 29%;
    left: -25%;
    width: 51vw;
    animation: meteor-fade-in 0.75s 0.5s ease-out forwards;
}
@keyframes meteor-fade-in {
    0% {
        transform: translateX(-20%) translateY(-20%);
        opacity: 0;
    }
    100% {
        transform: translateX(0%) translateY(0%);
        opacity: 1;
    }
}
.landing__background__items__curly:nth-of-type(1) {
    @apply absolute w-5/12;
    top: 16%;
    left: 61%;
}
.landing__background__items__curly:nth-of-type(2) {
    @apply absolute w-5/12;
    top: 88%;
    left: 8%;
}
.landing__background__items__curly::after {
    @apply absolute inset-0 h-full w-full bg-black-900;
    content: '';
}
.landing__background__items__curly:nth-of-type(1)::after {
    animation: curly-fade-in 1s linear forwards;
}
.landing__background__items__curly:nth-of-type(2)::after {
    animation: curly-fade-in 1s 0.5s linear forwards;
}
@keyframes curly-fade-in {
    0% {
        width: 100%;
    }
    100% {
        width: 0%;
    }
}
.landing__background__items__circle {
    @apply absolute h-0 w-1/5 bg-no-repeat;
    top: 64%;
    left: 40%;
    background-image: url('~@/static/img/landing/geometry-1.png');
    background-size: 100%;
    animation: geometry-fade-in 1s linear forwards;
}
.landing__background__items__square {
    @apply absolute h-0 bg-no-repeat;
    top: 63%;
    left: -5%;
    width: 19vw;
    background-image: url('~@/static/img/landing/geometry-2.png');
    background-size: 100%;
    animation: geometry-fade-in 1s 0.5s linear forwards;
}
@keyframes geometry-fade-in {
    0% {
        height: 0vw;
    }
    100% {
        height: 20vw;
    }
}
.landing__background__items__cone {
    @apply absolute hidden bg-contain bg-no-repeat md:block;
    top: 66%;
    left: 79%;
    width: 7.7vw;
    aspect-ratio: 1;
    background-image: url('~@/static/img/landing/cone.png');
    animation: cone-fade-in 1.5s forwards;
}
@keyframes cone-fade-in {
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
}

.landing__title {
    @apply relative top-20 min-w-full bg-contain bg-no-repeat opacity-0;
    background-image: url('~@/static/landing-title-rwd.png');
    min-height: 50vh;
    animation: title-fade-in 0.5s 1s linear forwards;
}
@keyframes title-fade-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@media (min-width: 768px) {
    .landing__background::after {
        background-image: url('~@/static/landing-background.png');
    }
    .landing__title {
        background-image: url('~@/static/landing-title.png');
        background-repeat: no-repeat;
        background-position-x: 0;
        background-position-y: 2.5rem;
        background-size: 100%;
        min-height: 280px;
        min-width: 45vw;
    }
    .landing__background__items__meter:nth-of-type(1) {
        top: -28%;
        left: -8%;
        width: 35vw;
    }
    .landing__background__items__meter:nth-of-type(2) {
        top: 8%;
        left: -8%;
        width: 30vw;
    }
    .landing__background__items__curly:nth-of-type(1) {
        width: 13vw;
        top: -2%;
        left: 41%;
    }
    .landing__background__items__curly:nth-of-type(2) {
        width: 13vw;
        top: 41%;
        left: 64%;
    }
    .landing__background__items__circle {
        top: 44%;
        left: 90%;
        width: 8.4vw;
    }
    .landing__background__items__square {
        top: 58%;
        left: 63%;
        width: 7vw;
    }
}
@media (min-width: 1600px) {
    .landing__title {
        min-height: 330px;
        min-width: 864px;
    }
}
</style>
