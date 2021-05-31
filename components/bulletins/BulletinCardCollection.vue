<template>
    <div class="flex flex-col w-full">
        <div
            class="bulletinCardCollection__cardContainer justify-center md:justify-start"
        >
            <!-- <slot></slot> -->
            <bulletin-card
                v-for="(bulletin, i) in $t('bulletins')"
                :key="`index_bulletin_${i}`"
                :title="bulletin.title"
                :description="bulletin.description"
                :linkStr="bulletin.linkStr"
                :linkUrl="bulletin.linkUrl"
            >
            </bulletin-card>
        </div>
    </div>
</template>

<script>
import i18n from './BulletinCard.i18n'
export default {
    i18n,
    name: 'BulletinCardCollection',
}
</script>

<style lang="postcss" scoped>
.bulletinCardCollection__cardContainer {
    @apply flex flex-wrap justify-center;
}

.bulletinCardCollection__cardContainer > .bulletinCard {
    margin: 0 0 60px 0;
    padding: 5px;
    @media (min-width: 415px) {
        margin: 30px 50px 40px 5px;
    }
}

.bulletinCardCollection__cardContainer > .bulletinCard:hover {
    @apply cursor-pointer box-content;
    margin: 25px 45px 35px 0px;
}
</style>
