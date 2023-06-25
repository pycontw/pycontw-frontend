<template>
    <div
        class="flex flex-col rounded-xl bg-primary-900 px-6 py-10 md:px-16 md:py-20"
    >
        <div class="flex flex-col md:flex-row md:items-center">
            <div
                class="flex flex-col items-center justify-center gap-2 md:flex-row md:pr-2"
            >
                <img :src="icon.car" />
                <span class="whitespace-nowrap">
                    {{ $t('carInstructions.title') }}
                </span>
            </div>
            <div class="md:flex md:flex-1 md:justify-center">
                <div class="md:flex md:flex-col">
                    <i18n
                        path="carInstructions.description"
                        tag="span"
                        class="md:my-2"
                    >
                        <a
                            href="https://goo.gl/maps/HfVQkZULCWNs4tfz6"
                            class="text-pink-500 underline"
                            target="_blank"
                            >{{ $t('carInstructions.destination') }}</a
                        >
                    </i18n>
                    <ol class="ml-[20px] list-decimal pt-6 md:pt-0">
                        <li
                            v-for="carInstruction in carInstructions"
                            :key="carInstruction"
                        >
                            {{ carInstruction }}
                        </li>
                    </ol>
                </div>
            </div>

            <img class="max-h-60 py-5 md:hidden" :src="icon.venueDestination" />
            <div class="hidden justify-center px-2 md:flex">
                <img :src="icon.venueDestinationMd" />
            </div>

            <div class="flex flex-col items-center justify-center">
                <img class="h-[60px] w-[60px]" :src="icon.parking" />
                <span> {{ $t('carInstructions.footerTitle') }} </span>
            </div>
        </div>

        <div class="parkingInfo pt-6 md:pb-10 md:pt-16">
            <div class="parkingInfo-container flex-1">
                <h3>
                    <img class="mr-1" :src="icon.parkingPink" />
                    {{ $t('parkingInfo.title') }}
                </h3>
            </div>
        </div>
        <div class="md:flex md:gap-10">
            <div class="md:flex-1">
                <div class="flex items-center pt-6 md:pb-4">
                    <img :src="icon.carWhite" />
                    <h5 class="pl-2">
                        {{ $t('parkingInfo.car.title') }}
                    </h5>
                </div>
                <p>{{ $t('parkingInfo.car.description') }}</p>
            </div>
            <div class="md:flex-1">
                <div class="flex items-center pt-6 md:pb-4">
                    <img :src="icon.motorWhite" />
                    <h5 class="pl-2">
                        {{ $t('parkingInfo.motor.title') }}
                    </h5>
                </div>
                <i18n path="parkingInfo.motor.description" tag="p">
                    <a
                        href="https://goo.gl/maps/DnFQvhu8QiCvRgYE7"
                        class="text-pink-500 underline"
                        target="_blank"
                        >{{ $t('parkingInfo.motor.descriptionLinkTitle1') }}</a
                    >
                    <a
                        href="https://goo.gl/maps/BaJw3ufc4rfqz5wh8"
                        class="text-pink-500 underline"
                        target="_blank"
                        >{{ $t('parkingInfo.motor.descriptionLinkTitle2') }}</a
                    >
                    <a
                        href="https://goo.gl/maps/EZ4RDMZTPYwFxAvh9"
                        class="text-pink-500 underline"
                        target="_blank"
                        >{{ $t('parkingInfo.motor.descriptionLinkTitle3') }}</a
                    >
                </i18n>

                <i18n path="parkingInfo.moreInfo" tag="p">
                    <a
                        href="https://dga.sinica.edu.tw/posts/78705"
                        class="text-pink-500 underline"
                        target="_blank"
                        >{{ $t('parkingInfo.moreInfoLinkTitle') }}</a
                    >
                </i18n>
            </div>
        </div>
    </div>
</template>

<script>
import i18n from '@/i18n/venue/index.i18n'

export default {
    i18n,
    name: 'VenueDriveTab',
    data() {
        return {
            icon: {
                car: require('~/static/img/venue/car.svg'),
                carWhite: require('~/static/img/venue/car-white.svg'),
                motorWhite: require('~/static/img/venue/motor-white.svg'),
                parking: require('~/static/img/venue/parking.svg'),
                parkingPink: require('~/static/img/venue/parking-pink.svg'),
                venueDestination: require('~/static/img/venue/venue-destination.svg'),
                venueDestinationMd: require('~/static/img/venue/venue-destination-md.svg'),
            },
            carInstructions: [
                this.$t('carInstructions.description1'),
                this.$t('carInstructions.description2'),
                this.$t('carInstructions.description3'),
            ],
            parkingInfo: {
                car: '人社館地下室設有汽車停車場，車輛進入院區持證件向大門警衛換證後可駛入院區，停車費用每小時20元。',
            },
        }
    },
}
</script>

<style lang="postcss" scoped>
.parkingInfo {
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
        max-width: 336px;
        content: '';
        width: 100%;
        border-top: 1px solid #9387ff;
        display: inline-block;
    }
    &::after {
        max-width: 336px;
        width: 100%;
        content: '';
        border-top: 1px solid #9387ff;
        display: inline-block;
    }
}
</style>
