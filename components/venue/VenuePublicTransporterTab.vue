<template>
    <div
        class="publicTransporter flex flex-col rounded-xl bg-primary-900 px-6 py-10 md:px-16 md:py-20"
    >
        <img class="md:hidden" :src="icon.publicTransporterGuide" />
        <img class="hidden md:block" :src="icon.publicTransporterGuideMd" />

        <div
            class="publicTransporter-two-col grid grid-cols-1 md:grid-cols-2 md:gap-10"
        >
            <div class="md:flex md:flex-col">
                <div class="flex items-center pb-3 pt-6">
                    <img :src="icon.mrt" />
                    <h5 class="whitespace-nowrap pl-2">
                        {{ $t('publicTransport.mrt.title') }}
                    </h5>
                </div>
                <p>
                    {{ $t('publicTransport.mrt.description') }}
                </p>
            </div>
            <div class="md:flex md:flex-col">
                <div class="flex items-center pb-3 pt-6">
                    <img :src="icon.busNew" />
                    <h5 class="whitespace-nowrap pl-2">
                        {{ $t('publicTransport.bus.title') }}
                    </h5>
                </div>
                <p>
                    {{ $t('publicTransport.bus.description') }}
                </p>
            </div>
            <div class="md:flex md:flex-col">
                <div class="flex items-center pb-3 pt-6">
                    <img :src="icon.uBike" />
                </div>
                <i18n path="publicTransport.uBike.description1" tag="p">
                    <a
                        :href="publicTransportUBikeLink[0]"
                        class="text-pink-500 underline"
                        target="_blank"
                        >{{ $t('publicTransport.uBike.link.description1') }}</a
                    >
                    <br />
                </i18n>
            </div>
            <div class="md:flex md:flex-col">
                <div class="flex items-center pb-3 pt-6">
                    {{ $t('publicTransport.uBikePark.title') }}
                </div>
                <ul class="ml-[19px] list-outside list-disc pb-3 md:pb-0">
                    <i18n
                        v-for="info in uBikeParkInfo"
                        :key="info.i18nPath"
                        :path="info.i18nPath"
                        tag="li"
                    >
                        <a
                            :href="info.link"
                            class="text-pink-500"
                            target="_blank"
                            >{{ info.i18nLinkPath }}</a
                        >
                    </i18n>
                </ul>
            </div>
        </div>

        <i18n class="pt-10" path="publicTransportInfo.moreInfo.title" tag="p">
            <a
                :href="publicTransportMoreInfoLink[0]"
                class="text-pink-500"
                target="_blank"
                >{{ $t('publicTransportInfo.moreInfo.info1') }}</a
            >
        </i18n>
    </div>
</template>

<script>
import i18n from '@/i18n/venue/index.i18n'
import { venuePublicTransportIconConfig } from './config/venueIconConfig'

export default {
    i18n,
    name: 'VenuePublicTransporterTab',
    data() {
        return {
            publicTransportUBikeLink: [
                'https://www.youbike.com.tw/region/taipei/stations/',
            ],
            publicTransportMoreInfoLink: [
                'https://www.taipeinewhorizon.com.tw/transportation',
            ],
            uBikeParkInfo: [
                {
                    i18nPath: 'publicTransport.uBikePark.parkingInfo.park1',
                    link: 'https://maps.app.goo.gl/uhwigQMmMT3GhGJ48',
                    i18nLinkPath: this.$t(
                        'publicTransport.uBikePark.parkPlace.park1',
                    ),
                },
                {
                    i18nPath: 'publicTransport.uBikePark.parkingInfo.park2',
                    link: 'https://maps.app.goo.gl/7bLdCeGecVSgXzMg8',
                    i18nLinkPath: this.$t(
                        'publicTransport.uBikePark.parkPlace.park2',
                    ),
                },
                {
                    i18nPath: 'publicTransport.uBikePark.parkingInfo.park3',
                    link: 'https://maps.app.goo.gl/Nug1cQkSuAEQYwyr5',
                    i18nLinkPath: this.$t(
                        'publicTransport.uBikePark.parkPlace.park3',
                    ),
                },
            ],
        }
    },

    computed: {
        icon() {
            return venuePublicTransportIconConfig[this.$i18n.locale]
        },
    },
}
</script>

<style lang="postcss" scoped>
.publicTransporter {
    & >>> ul {
        padding-left: 0px;
    }
}
</style>
