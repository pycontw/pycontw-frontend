<template>
    <i18n-page-wrapper>
        <core-h1 :title="$t('title')"></core-h1>
        <div>
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
        </div>
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
    </i18n-page-wrapper>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import CoreH1 from '@/components/core/titles/H1'
import i18n from '@/i18n/about/sponsor.i18n'
import SponsorCard from '@/components/sponsors/SponsorCard'
import SponsorCardCollection from '@/components/sponsors/SponsorCardCollection'

export default {
    layout(context) {
        const ccip = context.query.ccip // to determine if it's opass mobile app
        if (ccip) {
            return 'ccip'
        }
        return 'default'
    },
    i18n,
    name: 'PageSponsor',
    components: {
        I18nPageWrapper,
        CoreH1,
        SponsorCard,
        SponsorCardCollection,
    },
    data() {
        return {
            selectedSponsor: {},
        }
    },
    computed: {
        isBulleted() {
            if (process.client) {
                const width = window.innerWidth
                if (width < 768) {
                    return false
                }
            }
            return true
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
    },
}
</script>

<style lang="postcss" scoped></style>
