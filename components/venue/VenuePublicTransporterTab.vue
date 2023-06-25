<template>
    <div
        class="publicTransporter flex flex-col rounded-xl bg-primary-900 px-6 py-10 md:px-16 md:py-20"
    >
        <img class="md:hidden" :src="icon.publicTransporterGuide" />
        <img class="hidden md:block" :src="icon.publicTransporterGuideMd" />

        <div class="md:flex md:gap-10">
            <div class="md:flex md:flex-1 md:flex-col">
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
            <div class="md:flex md:flex-1 md:flex-col">
                <div class="flex items-center pb-3 pt-6">
                    <img :src="icon.uBike" />
                </div>
                <i18n path="publicTransport.uBike.description1" tag="p">
                    <a
                        href="https://www.youbike.com.tw/region/taipei/stations/"
                        class="text-pink-500 underline"
                        target="_blank"
                        >{{ $t('publicTransport.uBike.link.description1') }}</a
                    >
                    <a
                        href="https://www.opencyclemap.org/?zoom=16&lat=25.04974&lon=121.61213&layers=B000"
                        class="text-pink-500 underline"
                        target="_blank"
                        >{{ $t('publicTransport.uBike.link.description2') }}</a
                    >
                    <br />
                </i18n>
            </div>
        </div>

        <div class="publicTransporter-trafficInfo pt-6 md:pb-10 md:pt-16">
            <div class="publicTransporter-trafficInfo-container flex-1">
                <h3>
                    <img class="mr-1" :src="icon.airplane" />
                    {{ $t('publicTransport.title') }}
                </h3>
            </div>
        </div>
        <div class="md:flex md:gap-10">
            <div>
                <div class="flex items-center pb-3 pt-6 md:pb-4">
                    <img :src="icon.transporterWhite" />
                    <h5 class="pl-2">
                        {{ $t('publicTransportInfo.title') }}
                    </h5>
                </div>
                <p>
                    {{ $t('publicTransportInfo.info') }}
                </p>
                <div>
                    <span>
                        {{ $t('publicTransportInfo.1843infoTitle') }}
                    </span>
                    <ul class="ml-[19px] list-outside list-disc">
                        <li>
                            {{ $t('publicTransportInfo.description1') }}
                        </li>
                        <li>
                            {{ $t('publicTransportInfo.description2') }}
                        </li>
                        <li>
                            {{ $t('publicTransportInfo.description3') }}
                        </li>
                        <li>
                            {{ $t('publicTransportInfo.description4') }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import i18n from '@/i18n/venue/index.i18n'

export default {
    i18n,
    name: 'VenuePublicTransporterTab',
    data() {
        return {
            icon: {
                carWhite: require('~/static/img/venue/car-white.svg'),
                publicTransporterGuide: require('~/static/img/venue/publicTransporterGuide.svg'),
                publicTransporterGuideMd: require('~/static/img/venue/publicTransporterGuide-md.svg'),
                taxiWhite: require('~/static/img/venue/taxi-white.svg'),
                transporterWhite: require('~/static/img/venue/transporter-white.svg'),
                uBike: require('~/static/img/venue/uBike.svg'),
                parking: require('~/static/img/venue/parking.svg'),
                airplane: require('~/static/img/venue/airplane.svg'),
            },
        }
    },
}
</script>

<style lang="postcss" scoped>
.publicTransporter {
    & >>> ul {
        padding-left: 0px;
    }
}
.publicTransporter-trafficInfo {
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    color: #9387ff;
    & >>> h3 {
        padding: 0 14px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        &::before {
            position: absolute;
            content: '';
            left: 0;
            border: 4px solid #9387ff;
            display: inline-block;
            border-radius: 50%;
        }
        &::after {
            position: absolute;
            content: '';
            right: 0;
            border: 4px solid #9387ff;
            display: inline-block;
            border-radius: 50%;
        }
        margin: 0;
    }
    &::before {
        max-width: 280px;
        content: '';
        width: 100%;
        border-top: 1px solid #9387ff;
        display: inline-block;
    }
    &::after {
        max-width: 280px;
        width: 100%;
        content: '';
        border-top: 1px solid #9387ff;
        display: inline-block;
    }
}
</style>
