<template>
    <div class="page-home">
        <i18n-page-wrapper class="sponsor-section pt-12">
            <h1 class="sponsor-title">{{ $t('sponsorList') }}</h1>
            <sponsor-card-collection
                v-for="(leveledSponsors, i) in sponsorsData"
                :key="`sponsor_list_level_${i}`"
                :level-name="leveledSponsors.level_name"
            >
                <sponsor-card
                    v-for="(sponsor, j) in leveledSponsors.sponsors"
                    :key="`sponsor_list_level_${i}_sponsor_${j}`"
                    :logo-url="sponsor.logo_url"
                    :tag="getAttributeByLocale(sponsor, 'subtitle')"
                    @click.native="showModal(sponsor)"
                >
                </sponsor-card>
            </sponsor-card-collection>
        </i18n-page-wrapper>
        <sponsor-modal v-model="isOpened" :context="selectedSponsor" />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import i18n from '@/i18n/index.i18n'
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import {
    SponsorCardCollection,
    SponsorModal,
    SponsorCard,
} from '~/components/sponsors'

export default {
    i18n,
    name: 'PageIndex',
    layout: 'empty',
    components: {
        I18nPageWrapper,
        SponsorCard,
        SponsorCardCollection,
        SponsorModal,
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
.sponsor-title {
    @apply font-serif;
    color: #f3cc39;
}
.sponsor-section {
    background-color: #121023;
}
</style>
