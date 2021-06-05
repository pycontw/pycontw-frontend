<template>
    <I18nPageWrapper>
        <core-h1 :title="$t('title')"></core-h1>
        <div class="h-64 w-full mt-4" :style="communityMapStyle"></div>
    </I18nPageWrapper>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import i18n from '@/i18n/about/community.i18n'
import CoreH1 from '@/components/core/titles/H1'
import CommunityMap from '@/static/img/about/CommunityInTW.svg'

export default {
    i18n,
    name: 'PageCommunity',
    components: {
        I18nPageWrapper,
        CoreH1,
    },
    data() {
        return {
            communityMap: CommunityMap,
        }
    },
    computed: {
        communityMapStyle() {
            return {
                'background-image': `url(${this.communityMap})`,
                'background-repeat': 'no-repeat',
                'background-size': 'contain',
                'background-position': 'center',
            }
        },
    },
}
</script>

<style scoped></style>
