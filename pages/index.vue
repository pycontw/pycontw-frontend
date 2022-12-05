<template>
    <div class="page-home">
        <div class="page-homeLandingFocus flex pt-16 md:pt-24">
            <div
                class="
                    w-full
                    h-full
                    flex flex-col
                    items-start
                    text-golden
                    sm:mx-8
                    md:mx-12
                    lg:mx-32
                "
            >
                <div class="page-home__title" />
                <div
                    v-if="isCallingForProposals"
                    class="
                        w-full
                        flex flex-col
                        justify-between
                        items-center
                        md:flex-row
                        mt-32
                    "
                >
                    <text-button
                        to="/speaking/cfp"
                        class="
                            proposalButton
                            hidden
                            md:block md:mb-0 md:self-center
                        "
                        :uppercase="false"
                        large
                    >
                        {{ $t('callForProposals') }}
                    </text-button>
                </div>
                <div class="text-button-wrapper">
                    <text-button to="/conference/schedule">{{
                        $t('joinUs')
                    }}</text-button>
                </div>
            </div>
        </div>

        <i18n-page-wrapper>
            <intro :is-bulleted="isBulleted"></intro>
            <div class="bulletin-section">
                <core-h2
                    :title="$t('bulletinList')"
                    :is-bulleted="isBulleted"
                    class="index-h2"
                ></core-h2>
                <bulletin-card-collection></bulletin-card-collection>
            </div>
            <div id="sponsor" class="sponsor-section">
                <core-h2
                    :title="$t('sponsorList')"
                    :is-bulleted="isBulleted"
                    class="index-h2"
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
        </i18n-page-wrapper>
        <transition name="fade">
            <sponsor-modal
                v-if="isOpened"
                v-model="isOpened"
                :context="selectedSponsor"
            />
        </transition>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import i18n from '@/i18n/index.i18n'
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import TextButton from '~/components/core/buttons/TextButton'
import { BulletinCardCollection } from '~/components/bulletins'
import CoreH2 from '~/components/core/titles/H2'
import SponsorCard from '~/components/sponsors/SponsorCard'
import SponsorModal from '~/components/sponsors/SponsorModal'
import SponsorCardCollection from '~/components/sponsors/SponsorCardCollection'
import Intro from '~/components/intro/Intro'

export default {
    i18n,
    name: 'PageIndex',
    components: {
        CoreH2,
        TextButton,
        BulletinCardCollection,
        SponsorCard,
        SponsorModal,
        SponsorCardCollection,
        I18nPageWrapper,
        Intro,
    },
    data() {
        return {
            isOpened: false,
            isCallingForProposals: false,
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
    },
    created() {
        this.$store.dispatch('$getSponsorsData')
    },
    methods: {
        showModal(sponsor) {
            this.isOpened = true
            this.selectedSponsor = sponsor
            document.body.classList.add('modal-open')
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
.page-home .page-homeLandingFocus,
.page-home .page-homeLandingFocus::after {
    position: relative;
    top: 48px;
    left: 0;
    right: 0;
    height: calc(100vh - 48px);
    min-height: 720px;
}

.page-home .page-homeLandingFocus::after {
    position: absolute;
    top: -80px;
    z-index: -10;
    content: '';
    background-image: url('~@/static/landing-background.svg');
    background-position: center center;
    background-size: 100;
    background-repeat: no-repeat;
}

.page-home__title {
    min-height: 40%;
    min-width: 100%;
    background-image: url('~@/static/landing-title.svg');
    background-repeat: no-repeat;

    @apply font-serif text-3xl font-semibold;
    @media (min-width: 1024px) {
        @apply leading-snug;
        font-size: 2.8rem;
    }
}

@media (max-width: 567px) {
    .page-home .page-homeLandingFocus::after {
        content: '';
        background-image: url('~@/static/landing-background-rwd.svg');
        background-repeat: no-repeat;
        background-position: 80% 20%;
        background-size: 100%;
    }
    .page-home__title {
        position: relative;
        top: 10%;
        content: '';
        background-image: url('~@/static/landing-title-rwd.svg');
        background-repeat: no-repeat;
        background-position-x: center;
        background-size: 100%;
        min-height: 50%;
        min-width: 100%;
    }
}

.text-golden {
    @apply text-pink-700;
}

.bulletin-section {
    @apply pt-12 lg:mx-auto lg:w-full;
}

.sponsor-section {
    @apply pt-12 lg:mx-auto lg:w-full;
}

.index-h2 {
    @apply mx-auto justify-center md:justify-start;
}

.text-button-wrapper {
    @apply mt-48 md:mt-32;
    @apply w-full flex justify-center md:justify-start;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
