<template>
    <div class="landing">
        <div class="landing__background flex pt-16 md:pt-24">
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
                        v-if="isCallingForProposals"
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
            <Intro
                :is-showing-apac-intro="showIndexAPACSection"
                :is-bulleted="isBulleted"
            ></Intro>
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
                    :level-name="leveledSponsors.level_name"
                >
                    <sponsor-card
                        v-for="(sponsor, j) in leveledSponsors.sponsors"
                        :key="`index_sponsor_level_${i}_sponsor_${j}`"
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
            primaryButton: landingButtonConfig.JOIN_US,
            secondaryButton: landingButtonConfig.CFP,
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
        isCallingForProposals() {
            return this.$store.state.configs.showSpeakingPage
        },
        showIndexSponsorSection() {
            return this.$store.state.configs.showIndexSponsorSection
        },
        showIndexAPACSection() {
            return this.$store.state.configs.showIndexAPACSection
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
    position: relative;
    left: 0;
    right: 0;
    height: calc(100vh - 3rem);
    min-height: 750px;
}

.landing__background::after {
    height: 100vh;
    position: absolute;
    top: -72px;
    z-index: -10;
    content: '';
    background-image: url('~@/static/landing-background-rwd.svg');
    background-repeat: no-repeat;
    background-position: center top 4rem;
    background-size: 100%;
}

.landing__title {
    position: relative;
    top: 2.5rem;
    background-image: url('~@/static/landing-title-rwd.png');
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: 2rem;
    background-size: 100%;
    min-height: 50vh;
    min-width: 100vw;
}

@media (min-width: 768px) {
    .landing__background::after {
        background-image: url('~@/static/landing-background.svg');
        background-size: cover;
        background-position-y: 0;
    }
    .landing__title {
        background-image: url('~@/static/landing-title.png');
        background-repeat: no-repeat;
        background-position-x: 0;
        background-position-y: 2.5rem;
        background-size: 100%;
        min-height: 35vh;
        min-width: 45vw;
    }
}
</style>
