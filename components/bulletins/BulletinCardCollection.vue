<template>
    <div class="flex flex-col w-full">
        <div class="bulletinCardCollection__cardContainer justify-start">
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
    @apply flex flex-wrap m-5;
}

.bulletinCardCollection__cardContainer > .bulletinCard {
    @media (min-width: 415px) {
        margin: 30px 20px 22px 21px;
        padding: 5px;
    }
}
</style>
