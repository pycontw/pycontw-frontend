<template>
    <div class="page-home">
        <div class="page-homeLandingFocus flex py-8 md:py-12">
            <div
                class="w-full flex flex-col items-start text-golden mx-4 sm:mx-8 md:mx-16"
            >
                <div class="font-serif text-3xl lg:text-5xl">
                    PyCon Taiwan <br />
                    10th Anniversary
                </div>
                <landing-focus-info class="my-12 md:my-8" />
                <div
                    class="w-full flex flex-col justify-between items-center md:flex-row"
                >
                    <text-button
                        to="/sponsor"
                        class="mb-8 ml-12 self-start md:mb-0 md:self-center"
                    >
                        {{ $t('sponsor') }}
                    </text-button>
                    <landing-focus-slogan />
                </div>
            </div>
        </div>
<<<<<<< HEAD
        <div class="intro-section">
            <h2 class="intro-title">{{ $t('pyconIntro') }}</h2>
            <intro></intro>
        </div>
=======

        <i18n-page-wrapper class="pt-12 bg-blue-primary">
            <h1 class="text-yellow-500">{{ $t('bulletinList') }}</h1>
            <bulletin-card-collection></bulletin-card-collection>
        </i18n-page-wrapper>

>>>>>>> 70ab4693... chore(index): add bulletins on index page
        <i18n-page-wrapper class="pt-12">
            <h1 class="text-yellow-500">{{ $t('sponsorList') }}</h1>
            <sponsor-card-collection
                v-for="(leveledSponsors, i) in sponsorsData"
                :key="`index_sponsor_level_${i}`"
                :level-name="leveledSponsors.level_name"
            >
                <sponsor-card
                    v-for="(sponsor, j) in leveledSponsors.sponsors"
                    :key="`index_sponsor_level_${i}_sponsor_${j}`"
                    :logo-url="sponsor.logo_url"
                    :tag="getAttributeByLocale(sponsor, 'subtitle')"
                    @click.native="showModal(sponsor)"
                >
                </sponsor-card>
            </sponsor-card-collection>
            <div class="text-center">
                <text-button to="/sponsor">{{ $t('sponsorUs') }}</text-button>
            </div>
        </i18n-page-wrapper>
        <sponsor-modal v-model="isOpened" :context="selectedSponsor" />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import i18n from '@/i18n/index.i18n'
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import TextButton from '~/components/core/buttons/TextButton'
import {
    SponsorCardCollection,
    SponsorModal,
    SponsorCard,
} from '~/components/sponsors'
import { BulletinCardCollection } from '~/components/bulletins'
import {
    LandingFocusSlogan,
    LandingFocusInfo,
} from '~/components/landing-focus'
import Intro from '~/components/intro/Intro'

export default {
    i18n,
    name: 'PageIndex',
    components: {
        TextButton,
        I18nPageWrapper,
        LandingFocusSlogan,
        LandingFocusInfo,
        SponsorCard,
        SponsorCardCollection,
        SponsorModal,
        Intro,
        BulletinCardCollection,
    },
    data() {
        return {
            isOpened: false,
            selectedSponsor: {},
        }
    },
    fetchOnServer: false,
    computed: {
        ...mapState(['sponsorsData']),
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

<style>
.page-home .page-homeLandingFocus,
.page-home .page-homeLandingFocus::after {
    position: relative;
    top: 48px;
    width: 100vw;
    height: calc(100vh - 48px);
}

.page-home .page-homeLandingFocus::after {
    position: absolute;
    top: 0;
    z-index: -10;
    content: '';
    background-image: url('~@/static/page-home-background.png');
    background-position: center center;
    background-size: cover;
}

/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.text-golden {
    color: #c2a53a;
}

.bg-golden-primary {
    background: #c2a53a;
}

.bg-dark-primary {
    background: #212121;
}

.bg-dark-secondary {
    background-color: #2b2b2b;
}

.bg-blue-primary {
    background-color: #121023;
}

.title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
        BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
        sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}

.intro-section h2.intro-title {
    @apply text-center text-3xl mt-8 mb-16 font-bold;
    color: #e6ba17;
    font-family: 'Noto Serif TC';
    @media (max-width: 767px) {
        @apply mt-2 mb-8 text-2xl;
    }
}

.intro-section {
    @apply pt-8 pb-20;
    background-color: #16132a;
}
</style>
