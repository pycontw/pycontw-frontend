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
                <div class="pt-6 text-center md:flex md:flex-col md:pt-0">
                    <i18n
                        path="carInstructions.description"
                        tag="span"
                        class="md:my-2"
                    >
                        <a
                            :href="carDestinationLink"
                            class="text-pink-500 underline"
                            target="_blank"
                            >{{ $t('carInstructions.destination') }}</a
                        >
                    </i18n>
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
        <VenueDivision>
            <h3>
                <img class="mr-1" :src="icon.parkingPink" />
                {{ $t('parkingInfo.title') }}
            </h3>
        </VenueDivision>
        <div class="md:flex md:gap-10">
            <div class="md:flex-1">
                <div class="flex items-center pt-6 md:pb-4">
                    <img :src="icon.carWhite" />
                    <h5 class="pl-2">
                        {{ $t('parkingInfo.car.title') }}
                    </h5>
                </div>
                <i18n
                    path="parkingInfo.car.description"
                    tag="p"
                    class="whitespace-pre-line"
                >
                </i18n>
            </div>
            <div class="md:flex-1">
                <div class="flex items-center pt-6 md:pb-4">
                    <img :src="icon.motorWhite" />
                    <h5 class="pl-2">
                        {{ $t('parkingInfo.motor.title') }}
                    </h5>
                </div>
                <i18n
                    path="parkingInfo.motor.description"
                    tag="p"
                    class="whitespace-pre-line"
                >
                </i18n>
            </div>
        </div>
        <i18n class="pt-10" path="parkingInfo.moreInfo" tag="p">
            <a
                :href="parkingMoreInfoLink[0]"
                class="text-pink-500 underline"
                target="_blank"
                >{{ $t('parkingInfo.moreInfoLinkTitle') }}</a
            >
        </i18n>
    </div>
</template>

<script>
import i18n from '@/i18n/venue/index.i18n'
import VenueDivision from './VenueDivision.vue'
import { venueDriveIconConfig } from './config/venueIconConfig'
export default {
    i18n,
    name: 'VenueDriveTab',
    components: { VenueDivision },
    data() {
        return {
            carDestinationLink: 'https://maps.app.goo.gl/zA5erbUWEHxjJwwc9',
            parkingMoreInfoLink: [
                'https://www.taipeinewhorizon.com.tw/transportation',
            ],
        }
    },
    computed: {
        icon() {
            return venueDriveIconConfig[this.$i18n.locale]
        },
    },
}
</script>

<style lang="postcss" scoped></style>
