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
                <i18n path="parkingInfo.car.description" tag="p">
                    <a
                        :href="parkingPlaceCarLink"
                        class="text-pink-500"
                        target="_blank"
                    >
                        {{ $t('parkingInfo.car.parkingPlace') }}
                    </a>
                </i18n>
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
                        :href="parkingPlaceMotorLink[0]"
                        class="text-pink-500 underline"
                        target="_blank"
                        >{{ $t('parkingInfo.motor.descriptionLinkTitle1') }}</a
                    >
                    <a
                        :href="parkingPlaceMotorLink[1]"
                        class="text-pink-500 underline"
                        target="_blank"
                        >{{ $t('parkingInfo.motor.descriptionLinkTitle2') }}</a
                    >
                    <a
                        :href="parkingPlaceMotorLink[2]"
                        class="text-pink-500 underline"
                        target="_blank"
                        >{{ $t('parkingInfo.motor.descriptionLinkTitle3') }}</a
                    >
                </i18n>

                <i18n class="pt-10 md:pt-0" path="parkingInfo.moreInfo" tag="p">
                    <a
                        :href="parkingMoreInfoLink[0]"
                        class="text-pink-500"
                        target="_blank"
                        >{{ $t('parkingInfo.moreInfoLinkTitle') }}</a
                    >
                    <a
                        :href="parkingMoreInfoLink[1]"
                        class="text-pink-500"
                        target="_blank"
                        >{{ $t('parkingInfo.moreInfoLinkTitle2') }}</a
                    >
                </i18n>
            </div>
        </div>
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
            carDestinationLink: 'https://goo.gl/maps/HfVQkZULCWNs4tfz6',
            parkingPlaceCarLink:
                'https://www.google.com/maps/place/%E4%B8%AD%E5%A4%AE%E7%A0%94%E7%A9%B6%E9%99%A2%E4%BA%BA%E6%96%87%E7%A4%BE%E6%9C%83%E7%A7%91%E5%AD%B8%E9%A4%A8/@25.0409679,121.6068671,17z/data=!4m7!3m6!1s0x3442ab46b3aaaaab:0x6ad0b8243ddc70ef!8m2!3d25.0409679!4d121.6113732!15sCiTkuK3lpK7noJTnqbbpmaLkurrmlofnpL7mnIPnp5HlrbjppKhaLCIq5Lit5aSuIOeglOeptiDpmaIg5Lq65paHIOekvuacgyDnp5Hlrbgg6aSokgEGc2Nob29s4AEA!16s%2Fg%2F11f50wylmj?entry=tts&shorturl=1',

            parkingPlaceMotorLink: [
                'https://goo.gl/maps/DnFQvhu8QiCvRgYE7',
                'https://goo.gl/maps/BaJw3ufc4rfqz5wh8',
                'https://goo.gl/maps/EZ4RDMZTPYwFxAvh9',
            ],
            parkingMoreInfoLink: [
                'https://dga.sinica.edu.tw/posts/78705',
                'https://dga.sinica.edu.tw/pages/1442',
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
