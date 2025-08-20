<template>
    <i18n-page-wrapper>
        <core-h1
            class="venue-title whitespace-pre-line text-center"
            :title="$t('venueInfo.name')"
            center
        >
        </core-h1>
        <div class="venue-map-section">
            <div class="venue-map-image flex justify-center py-8">
                <picture>
                    <source
                        media="(max-width: 768px)"
                        :srcset="venueMapIcon.venueMapMd"
                    />
                    <img
                        :src="venueMapIcon.venueMap"
                        :alt="$t('venueMap.title')"
                        class="h-auto max-w-full rounded-lg shadow-lg"
                    />
                </picture>
            </div>
        </div>
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
import { venueMapIconConfig } from '@/components/venue/config/venueIconConfig'
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
            ],
        }
    },
    computed: {
        venueMapIcon() {
            return venueMapIconConfig[this.$i18n.locale]
        },
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
