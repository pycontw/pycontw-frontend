<template>
    <div class="flex flex-col w-full">
        <div
            class="
                bulletinCardCollection__cardContainer
                justify-center
                lg:justify-start
            "
        >
            <!-- <slot></slot> -->
            <bulletin-card
                v-for="(bulletin, i) in $t('bulletins')"
                :key="`index_bulletin_${i}`"
                :title="bulletin.title"
                :description="bulletin.description"
                :link-title="bulletin.linkTitle"
                :link-href="bulletin.linkHref"
                :link-to="bulletin.linkTo"
            >
            </bulletin-card>
        </div>
    </div>
</template>

<script>
import BulletinCard from './BulletinCard.vue'
import i18n from './BulletinCard.i18n'
export default {
    i18n,
    name: 'BulletinCardCollection',
    components: {
        BulletinCard,
    },
}
</script>

<style lang="postcss" scoped>
.bulletinCardCollection__cardContainer {
    @apply grid place-items-center gap-10 grid-cols-1 mt-9 md:grid-cols-3 md:pl-14 md:mt-0 md:w-10/12;
}
</style>
