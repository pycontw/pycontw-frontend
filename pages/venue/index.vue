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
        <client-only v-if="showVenueMap">
            <core-h1
                class="venue-title whitespace-pre-line pt-20 text-center"
                :title="$t('venueMap.title')"
                center
            >
            </core-h1>
            <VenueMap class=""></VenueMap>
        </client-only>
        <core-h1
            class="venue-title whitespace-pre-line pt-6 text-center"
            :title="$t('howToGetThere.title')"
            center
        >
        </core-h1>
        <div class="how-to-get-there-content mx-auto max-w-4xl px-4 text-left">
            <div class="transportation-info">
                <div class="mb-8">
                    <h3 class="mb-2 text-2xl font-bold">
                        {{ $t('transportation.mrt') }}
                    </h3>
                    <div class="space-y-6">
                        <div class="ml-4">
                            <div
                                class="mb-2 text-lg font-semibold text-gray-200"
                            >
                                <span class="text-sm">•</span>
                                {{ $t('transportation.mrtStation1') }}
                            </div>
                            <div class="ml-8 text-base text-gray-200">
                                {{ $t('transportation.mrtDetail1') }}
                            </div>
                        </div>
                        <div class="ml-4">
                            <div
                                class="mb-2 text-lg font-semibold text-gray-200"
                            >
                                <span class="text-sm">•</span>
                                {{ $t('transportation.mrtStation2') }}
                            </div>
                            <div class="ml-8 text-base text-gray-200">
                                {{ $t('transportation.mrtDetail2') }}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 class="mb-2 text-2xl font-bold">
                        {{ $t('transportation.bus') }}
                    </h3>
                    <div class="space-y-6">
                        <div class="ml-4">
                            <div
                                class="mb-2 text-lg font-semibold text-gray-200"
                            >
                                <span class="text-sm">•</span>
                                {{ $t('transportation.busStation1') }}
                            </div>
                            <div class="ml-8 text-base text-gray-200">
                                {{ $t('transportation.busRoutes1') }}
                            </div>
                        </div>
                        <div class="ml-4">
                            <div
                                class="mb-2 text-lg font-semibold text-gray-200"
                            >
                                <span class="text-sm">•</span>
                                {{ $t('transportation.busStation2') }}
                            </div>
                            <div class="ml-8 text-base text-gray-200">
                                {{ $t('transportation.busRoutes2') }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <core-h1
            class="venue-title whitespace-pre-line pt-20 text-center"
            :title="$t('sprintsVenueInfo.name')"
            center
        >
        </core-h1>
        <h3 class="venue-address">
            {{ $t('sprintsVenueInfo.address') }}
        </h3>
    </i18n-page-wrapper>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import CoreH1 from '@/components/core/titles/H1'
import i18n from '@/i18n/venue/index.i18n'
// import VenueMap from '@/components/venue/VenueMap.vue'
export default {
    i18n,
    name: 'PageVenue',
    components: {
        I18nPageWrapper,
        CoreH1,
        VenueMap: () => import('@/components/venue/VenueMap.vue'),
    },
    data() {
        return {
            showVenueMap: true,
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
    @apply m-0 pt-6 text-center text-lg font-normal;
}
</style>
