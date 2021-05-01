<template>
    <div class="page-home">
        <div
            class="page-homeLandingFocus flex flex-col-reverse justify-center items-center px-8 py-12 md:items-stretch sm:px-20 md:px-32 md:py-24 md:flex-row lg:px-40"
        >
            <div
                class="page-homeLandingFocus__mobileButtons flex mt-8 md:hidden"
            >
                <text-button to="/sponsor">{{ $t('sponsor') }}</text-button>
            </div>
            <div class="page-homeLandingFocus__image mx-12 md:mx-0">
                <img src="~/static/key-vision-logo.png" alt="" />
            </div>
            <div
                class="page-homeLandingFocus__context flex flex-col text-golden text-center md:text-left mb-4 ml-0 md:mb-0 md:ml-8"
            >
                <div class="font-serif">
                    <div class="text-3xl lg:text-5xl">PyCon Taiwan 2021</div>
                    <div class="text-2xl lg:text-4xl">10th Anniversary</div>
                    <div class="text-xl lg:text-3xl">21 - 22 Aug. NTU</div>
                </div>
                <div
                    class="page-homeLandingFocus__desktopButtons hidden md:flex md:mt-8"
                >
                    <text-button to="/sponsor">{{ $t('sponsor') }}</text-button>
                </div>
            </div>
        </div>

        <i18n-page-wrapper>
            <h2>{{ $t('sponsorList') }}</h2>
            <sponsor-card-collection
                v-for="(leveledSponsors, i) in sponsorsData"
                :key="`index_sponsor_level_${i}`"
                :level-name="leveledSponsors.level_name"
            >
                <sponsor-card
                    v-for="(sponsor, j) in leveledSponsors.sponsors"
                    :key="`index_sponsor_level_${i}_sponsor_${j}`"
                    :logo-url="sponsor.logo_url"
                    :tag="sponsor.subtitle_en_us"
                >
                </sponsor-card>
            </sponsor-card-collection>
        </i18n-page-wrapper>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import i18n from '@/i18n/index.i18n'
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import TextButton from '~/components/core/buttons/TextButton'
import { SponsorCard, SponsorCardCollection } from '~/components/sponsors'

export default {
    i18n,
    name: 'PageIndex',
    components: {
        TextButton,
        I18nPageWrapper,
        SponsorCard,
        SponsorCardCollection,
    },
    data() {
        return {
            volunteerFormUrl: 'https://forms.gle/wuG2w42cbhamyGdv9',
        }
    },
    fetchOnServer: false,
    computed: {
        ...mapState(['sponsorsData']),
    },
    created() {
        this.$store.dispatch('$getSponsorsData')
    },
}
</script>

<style>
.page-home .page-homeLandingFocus::before {
    position: absolute;
    top: 48px;
    left: 0;
    z-index: -10;
    display: block;
    width: 100vw;
    height: calc(100vh - 48px);
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
</style>
