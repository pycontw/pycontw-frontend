<template>
    <i18n-page-wrapper>
        <core-h1
            class="venue-title whitespace-pre-line text-center"
            :title="$t('venueInfo.name')"
            center
        >
        </core-h1>
        <h3 class="venue-address">
            {{ $t('venueInfo.address') }}
        </h3>
        <div class="transportsModesTabs mb-8 flex w-full justify-center">
            <VenueTabs v-model="selectedTransModeIndex">
                <VenueTab
                    v-for="(transMode, index) in transModes"
                    :key="transMode.value"
                    :index="index"
                >
                    {{ transMode.label }}
                </VenueTab>
            </VenueTabs>
        </div>
        <div class="detailWrapper">
            <VenueDriveTab v-if="selectedTransModeIndex === 0"></VenueDriveTab>
            <VenuePublicTransporterTab
                v-if="selectedTransModeIndex === 1"
            ></VenuePublicTransporterTab>

            <VenueShuttleServiceTab
                v-if="selectedTransModeIndex === 2"
            ></VenueShuttleServiceTab>
        </div>
        <client-only v-if="showVenueMap">
            <core-h1
                class="venue-title whitespace-pre-line pt-20 text-center"
                :title="$t('venueMap.title')"
                center
            >
            </core-h1>
            <VenueMap class=""></VenueMap>
        </client-only>
    </i18n-page-wrapper>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import CoreH1 from '@/components/core/titles/H1'
import i18n from '@/i18n/venue/index.i18n'
import VenueTabs from '@/components/venue/VenueTabs.vue'
import VenueTab from '@/components/venue/VenueTab.vue'
import VenuePublicTransporterTab from '@/components/venue/VenuePublicTransporterTab.vue'
import VenueDriveTab from '@/components/venue/VenueDriveTab.vue'
import VenueShuttleServiceTab from '@/components/venue/VenueShuttleServiceTab.vue'
// import VenueMap from '@/components/venue/VenueMap.vue'
export default {
    i18n,
    name: 'PageVenue',
    components: {
        I18nPageWrapper,
        CoreH1,
        VenueTabs,
        VenueTab,
        VenuePublicTransporterTab,
        VenueDriveTab,
        VenueShuttleServiceTab,
        VenueMap: () => import('@/components/venue/VenueMap.vue'),
    },
    data() {
        return {
            selectedTransModeIndex: 0,
            showVenueMap: false,
            transModes: [
                {
                    label: this.$t('transMode.car'),
                    value: 'car',
                },
                {
                    label: this.$t('transMode.publicTransport'),
                    value: 'publicTransport',
                },
                // {
                //     label: this.$t('transMode.shuttleService'),
                //     value: 'shuttleService',
                // },
            ],
        }
    },
    head() {
        return {
            title: this.$i18n.t('title'),
            meta: [
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: this.$i18n.t('og.title'),
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: this.$i18n.t('og.description'),
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: this.$i18n.t('og.description'),
                },
            ],
        }
    },
}
</script>

<style lang="postcss" scoped>
/*
css priority for h3
*/
.venue-address {
    @apply m-0 pt-6 text-center text-base font-normal;
}
</style>
