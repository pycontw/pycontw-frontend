<template>
    <div class="flex flex-col w-full">
        <div
            class="
                grid
                place-items-center
                gap-10
                grid-cols-1
                mt-9
                md:grid-cols-3 md:mx-auto md:mt-0 md:w-10/12
                justify-center
                lg:justify-start
            "
        >
            <bulletin-card
                v-for="(item, index) in landingBulletinsConfig"
                :key="`landing-bulletin-${index}`"
                :title="$t(item.titleI18nKey)"
                :description="$t(item.descriptionI18nKey)"
                :link="item.link"
                :is-external-link="item.isExternalLink"
                :icon="item.icon"
                :show-bulletin="item.showBulletin"
            >
            </bulletin-card>
        </div>
    </div>
</template>

<script>
import { landingBulletinsConfig } from '@/configs/pageLanding'
import BulletinCard from './BulletinCard.vue'
import i18n from './BulletinCard.i18n'

export default {
    i18n,
    name: 'BulletinCardCollection',
    components: {
        BulletinCard,
    },
    data() {
        return {
            landingBulletinsConfig,
        }
    },
}
</script>
