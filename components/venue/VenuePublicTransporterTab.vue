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
                    <img :src="icon.taxiWhite" />
                    <h5 class="whitespace-nowrap pl-2">
                        {{ $t('publicTransport.taxi.title') }}
                    </h5>
                </div>
                <p>
                    {{ $t('publicTransport.taxi.description') }}
                </p>
            </div>
            <div class="md:flex md:flex-col">
                <div class="flex items-center pb-3 pt-6">
                    <img :src="icon.busWhite" />
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
                    <a
                        :href="publicTransportUBikeLink[1]"
                        class="text-pink-500 underline"
                        target="_blank"
                        >{{ $t('publicTransport.uBike.link.description2') }}</a
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

        <VenueDivision>
            <h3>
                <img class="mr-1" :src="icon.airplane" />
                {{ $t('publicTransport.title') }}
            </h3>
        </VenueDivision>

        <div>
            <div class="flex items-center pb-3 pt-6 md:pb-4">
                <img :src="icon.transporterWhite" />
                <h5 class="pl-2">
                    {{ $t('publicTransportInfo.title') }}
                </h5>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 md:gap-10">
                <div>
                    <i18n
                        path="publicTransportInfo.info"
                        tag="p"
                        class="pb-3 md:pb-0"
                    >
                        <a
                            :href="publicTransportBusLink"
                            class="text-pink-500"
                            target="_blank"
                            >{{ $t('publicTransportInfo.publicTransport') }}</a
                        >
                    </i18n>
                </div>
                <div>
                    <i18n path="publicTransportInfo.1843infoTitle">
                        <a
                            :href="publicTransportBusLink"
                            class="text-pink-500"
                            target="_blank"
                            >{{ $t('publicTransportInfo.publicTransport') }}</a
                        >
                    </i18n>

                    <ul class="ml-[19px] list-outside list-disc pb-3 md:pb-0">
                        <li>
                            {{ $t('publicTransportInfo.description1') }}
                        </li>
                        <li>
                            {{ $t('publicTransportInfo.description2.title') }}

                            <ul class="ml-[19px] list-outside list-disc">
                                <li>
                                    {{
                                        $t(
                                            'publicTransportInfo.description2.info1',
                                        )
                                    }}
                                </li>
                                <li>
                                    {{
                                        $t(
                                            'publicTransportInfo.description2.info2',
                                        )
                                    }}
                                </li>
                            </ul>
                        </li>
                        <li>
                            {{ $t('publicTransportInfo.description3.title') }}
                            <ul class="ml-[19px] list-outside list-disc">
                                <li>
                                    {{
                                        $t(
                                            'publicTransportInfo.description3.info1',
                                        )
                                    }}
                                </li>
                                <li>
                                    {{
                                        $t(
                                            'publicTransportInfo.description3.info2',
                                        )
                                    }}
                                </li>
                            </ul>
                        </li>
                        <li>
                            {{ $t('publicTransportInfo.description4') }}
                        </li>
                        <li>
                            {{ $t('publicTransportInfo.description5') }}
                        </li>
                    </ul>
                    <i18n path="publicTransportInfo.moreInfo.title">
                        <a
                            :href="publicTransportMoreInfoLink[0]"
                            class="text-pink-500"
                            target="_blank"
                            >{{ $t('publicTransportInfo.moreInfo.info1') }}</a
                        >
                        <a
                            :href="publicTransportMoreInfoLink[1]"
                            class="text-pink-500"
                            target="_blank"
                            >{{ $t('publicTransportInfo.moreInfo.info2') }}</a
                        >
                    </i18n>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import i18n from '@/i18n/venue/index.i18n'
import VenueDivision from './VenueDivision.vue'

export default {
    i18n,
    name: 'VenuePublicTransporterTab',
    components: { VenueDivision },
    data() {
        return {
            publicTransportBusLink:
                'https://www.taiwanbus.tw/eBUSPage/Query/QueryResult.aspx?rno=18430',
            publicTransportUBikeLink: [
                'https://www.youbike.com.tw/region/taipei/stations/',
                'https://www.opencyclemap.org/?zoom=16&lat=25.04974&lon=121.61213&layers=B000',
            ],
            publicTransportMoreInfoLink: [
                'https://dga.sinica.edu.tw/pages/1349',
                'https://www.taoyuan-airport.com/transportation?lang=ch',
            ],
            uBikeParkInfo: [
                {
                    i18nPath: 'publicTransport.uBikePark.parkingInfo.park1',
                    link: '',
                    i18nLinkPath: this.$t(
                        'publicTransport.uBikePark.parkPlace.park1',
                    ),
                },
                {
                    i18nPath: 'publicTransport.uBikePark.parkingInfo.park2',
                    link: '',
                    i18nLinkPath: this.$t(
                        'publicTransport.uBikePark.parkPlace.park2',
                    ),
                },
                {
                    i18nPath: 'publicTransport.uBikePark.parkingInfo.park3',
                    link: '',
                    i18nLinkPath: this.$t(
                        'publicTransport.uBikePark.parkPlace.park3',
                    ),
                },
                {
                    i18nPath: 'publicTransport.uBikePark.parkingInfo.park4',
                    link: '',
                    i18nLinkPath: this.$t(
                        'publicTransport.uBikePark.parkPlace.park4',
                    ),
                },
                {
                    i18nPath: 'publicTransport.uBikePark.parkingInfo.park5',
                    link: '',
                    i18nLinkPath: this.$t(
                        'publicTransport.uBikePark.parkPlace.park5',
                    ),
                },
            ],
        }
    },

    computed: {
        icon() {
            if (this.$i18n.locale === 'en-us') {
                return {
                    carWhite: require('~/static/img/venue/car-white.svg'),
                    busWhite: require('~/static/img/venue/bus-white.svg'),
                    publicTransporterGuide: require('~/static/img/venue/en-us/publicTransporterGuide.svg'),
                    publicTransporterGuideMd: require('~/static/img/venue/en-us/publicTransporterGuide-md.svg'),
                    taxiWhite: require('~/static/img/venue/taxi-white.svg'),
                    transporterWhite: require('~/static/img/venue/transporter-white.svg'),
                    uBike: require('~/static/img/venue/uBike.svg'),
                    parking: require('~/static/img/venue/parking.svg'),
                    airplane: require('~/static/img/venue/airplane.svg'),
                }
            }
            return {
                carWhite: require('~/static/img/venue/car-white.svg'),
                busWhite: require('~/static/img/venue/bus-white.svg'),
                publicTransporterGuide: require('~/static/img/venue/publicTransporterGuide.svg'),
                publicTransporterGuideMd: require('~/static/img/venue/publicTransporterGuide-md.svg'),
                taxiWhite: require('~/static/img/venue/taxi-white.svg'),
                transporterWhite: require('~/static/img/venue/transporter-white.svg'),
                uBike: require('~/static/img/venue/uBike.svg'),
                parking: require('~/static/img/venue/parking.svg'),
                airplane: require('~/static/img/venue/airplane.svg'),
            }
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
