<template>
    <div class="page-home">
        <div class="page-homeLandingFocus flex py-8 md:py-12">
            <div
                class="
                    w-full
                    flex flex-col
                    items-start
                    text-golden
                    mx-4
                    sm:mx-8
                    md:mx-16
                "
            >
                <div class="page-home__title">
                    <img
                        class="title-img"
                        src="~/static/index-title.svg"
                        alt="Title of PyCon APAC 2022"
                    />
                </div>
                <div
                    class="
                        w-full
                        flex flex-col
                        justify-between
                        items-center
                        md:flex-row
                        mt-48
                    "
                >
                    <text-button
                        to="/speaking/cfp"
                        class="hidden md:block md:mb-0 md:self-center"
                        large
                    >
                        {{ $t('callForProposals') }}
                    </text-button>
                    <text-button
                        to="/speaking/cfp"
                        class="block mb-8 self-start md:hidden"
                    >
                        {{ $t('callForProposals') }}
                    </text-button>
                </div>
            </div>
        </div>

        <!--<i18n-page-wrapper class="sponsor-section pt-12">
            <h1 class="sponsor-title">{{ $t('sponsorList') }}</h1>
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
            <div class="flex justify-end">
                <img
                    src="~@/static/page-home-snake-with-py.svg"
                    alt="snake-with-py"
                    class="hidden md:block"
                />
            </div>
            <div class="text-center">
                <text-button to="/sponsor">{{ $t('sponsorUs') }}</text-button>
            </div>
        </i18n-page-wrapper>
        <sponsor-modal v-model="isOpened" :context="selectedSponsor" />-->
    </div>
</template>

<script>
import { mapState } from 'vuex'
import i18n from '@/i18n/index.i18n'
import TextButton from '~/components/core/buttons/TextButton'

export default {
    i18n,
    name: 'PageIndex',
    components: {
        TextButton,
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
    top: -48px;
    z-index: -10;
    content: '';
    background-image: url('~@/static/page-home-background.svg');
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
}

@media (max-width: 567px) {
    .page-home .page-homeLandingFocus::after {
        background-position: -40vw center;
        background-size: 200vw;
        background-repeat: no-repeat;
    }
}

.page-home__title {
    @apply font-serif text-3xl font-semibold;
    @media (min-width: 1024px) {
        @apply leading-snug;
        font-size: 2.8rem;
    }
}

.text-golden {
    color: #c386ae;
}

.text-purple {
    color: #8c83f5;
}

.bg-blue-primary {
    background-color: #121023;
}

.intro-section {
    @apply pt-8 pb-20;
    background-color: #16132a;
}

.bulletin-section {
    @apply py-12 px-4 sm:px-10 md:px-12 lg:px-20;
}

.sponsor-title {
    @apply font-serif;
    color: #c386ae;
}
.sponsor-section {
    background-color: #121023;
}
</style>
