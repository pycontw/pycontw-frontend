<template>
    <i18n-page-wrapper>
        <core-h1 :title="$t('title')"></core-h1>
        <div>
            <div id="sponsor" class="lg:w-full; pt-12 lg:mx-auto">
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
import Modal from '@/components/core/modal/Modal'
import SponsorCard from '@/components/sponsors/SponsorCard'
import SponsorCardCollection from '@/components/sponsors/SponsorCardCollection'

export default {
    i18n,
    name: 'PageSponsor',
    components: {
        I18nPageWrapper,
        CoreH1,
        Modal,
        SponsorCard,
        SponsorCardCollection,
    },
    layout(context) {
        const ccip = context.query.ccip // to determine if it's opass mobile app
        return ccip ? 'ccip' : 'default'
    },
    async asyncData({ store, payload }) {
        if (payload) return { sponsorsData: payload }
        await store.dispatch('$getSponsorsData')
        const sponsorsData = store.state.sponsorsData
        return {
            sponsorsData,
        }
    },
    data() {
        return {
            isOpened: false,
            selectedSponsor: {},
        }
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

<style lang="postcss" scoped></style>
