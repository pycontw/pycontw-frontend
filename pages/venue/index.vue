<template>
    <i18n-page-wrapper>
        <core-h1
            class="venue-title whitespace-pre-line text-center"
            :title="$t('venueInfo.name')"
            center
        >
        </core-h1>
        <h3 class="venue-address text-center">
            {{ $t('venueInfo.address') }}
        </h3>
        <div class="venue-map-section">
            <div class="venue-map-image flex justify-center py-8">
                <picture>
                    <source
                        media="(max-width: 768px)"
                        :srcset="venueMapIcon.venueMap"
                    />
                    <img
                        :src="venueMapIcon.venueMapMd"
                        :alt="$t('venueMap.title')"
                        class="h-auto max-w-full rounded-lg shadow-lg"
                    />
                </picture>
            </div>
        </div>
        <div class="sprintIframeWrapper">
            <!-- Sprint 地圖 -->
            <div class="sprint-map-section mb-8">
                <core-h1
                    class="venue-title whitespace-pre-line text-center"
                    :title="$t('sprintInfo.title')"
                    center
                >
                </core-h1>
                <div class="sprint-map-container flex justify-center py-8">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.8656604741122!2d121.5409432!3d25.038632699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a983817f600d%3A0xa055f2f16c67c77d!2z56S-5pyD5Ym15paw5a-m6amX5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1756343564151!5m2!1szh-TW!2stw"
                        width="600"
                        height="450"
                        style="border: 0"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        class="rounded-lg shadow-lg"
                    ></iframe>
                </div>
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
