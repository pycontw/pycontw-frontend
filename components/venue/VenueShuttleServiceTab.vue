<template>
    <div
        class="flex flex-col rounded-xl bg-primary-900 px-6 py-10 md:px-16 md:py-20"
    >
        <img class="md:hidden" :src="icon.shuttleServiceGuide" />
        <img
            class="hidden md:m-auto md:block md:w-3/5"
            :src="icon.shuttleServiceGuideMd"
        />

        <VenueDivision>
            <h3>
                <img class="mr-1" :src="icon.busAlert" />
                {{ $t('shuttleService.title') }}
            </h3>
        </VenueDivision>

        <div>
            <i18n
                path="shuttleService.description"
                tag="p"
                class="pb-3 md:pb-0"
            >
                <a
                    :href="shuttleServiceFromLink"
                    class="text-pink-500 underline"
                    target="_blank"
                    >{{ $t('shuttleService.descriptionLink') }}</a
                >
            </i18n>
            <div class="flex items-center pb-3 pt-6 md:pb-4">
                <img :src="icon.moreTimeWhite" />
                <h5 class="pl-2">
                    {{ $t('shuttleService.shuttleTime.title') }}
                </h5>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 md:gap-10">
                <div v-for="(shuttleTime, idx) in shuttleTimes" :key="idx">
                    <p class="pb-2 md:pb-3">{{ shuttleTime.title }}</p>
                    <ul class="ml-[19px] list-outside list-disc pb-3 md:pb-0">
                        <li>
                            {{ shuttleTime.from }}
                        </li>
                        <li>
                            {{ shuttleTime.to }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import i18n from '@/i18n/venue/index.i18n'
import VenueDivision from './VenueDivision.vue'
import { venueShuttleServiceIconConfig } from './config/venueIconConfig'

export default {
    i18n,
    name: 'VenueShuttleServiceTab',
    components: { VenueDivision },
    data() {
        return {
            shuttleTimes: [
                {
                    title: this.$t('shuttleService.shuttleTime.day1.title'),
                    from: this.$t('shuttleService.shuttleTime.day1.from'),
                    to: this.$t('shuttleService.shuttleTime.day1.to'),
                },
                {
                    title: this.$t('shuttleService.shuttleTime.day2.title'),
                    from: this.$t('shuttleService.shuttleTime.day2.from'),
                    to: this.$t('shuttleService.shuttleTime.day2.to'),
                },
            ],
            shuttleServiceFromLink:
                'https://www.google.com/maps/place/YouBike%E5%BE%AE%E7%AC%91%E5%96%AE%E8%BB%8A+2.0:+%E6%8D%B7%E9%81%8B%E5%8D%97%E6%B8%AF%E7%AB%99(1%E8%99%9F%E5%87%BA%E5%8F%A3)/@25.0519359,121.6062539,21z/data=!4m6!3m5!1s0x3442ab5d93d797fb:0xc2121057a7e3a87!8m2!3d25.05192!4d121.60642!16s%2Fg%2F11qg14my35?entry=tts&shorturl=1',
        }
    },

    computed: {
        icon() {
            return venueShuttleServiceIconConfig[this.$i18n.locale]
        },
    },
}
</script>

<style lang="postcss" scoped></style>
