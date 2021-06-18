<template>
    <I18nPageWrapper>
        <core-h1 :title="$t('title')"></core-h1>
        <div class="h-64 w-full my-4" :style="communityMapStyle"></div>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12">
            <div
                v-for="community in $t('communities')"
                :key="`community_${community.tag}`"
            >
                <div class="flex flex-col box p-5 min-h-full">
                    <ext-link
                        :href="communityLink[community.tag]"
                        class="community-title"
                    >
                        {{ community.title }}
                    </ext-link>
                    <p
                        v-for="(paragraph, i) in community.desc"
                        :key="`paragraph_${i}`"
                        class="text-sm"
                    >
                        {{ paragraph }}
                    </p>
                </div>
            </div>
        </div>
    </I18nPageWrapper>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import i18n from '@/i18n/about/community.i18n'
import CoreH1 from '@/components/core/titles/H1'
import CommunityMap from '@/static/img/about/CommunityInTW.svg'
import ExtLink from '../../components/core/links/ExtLink.vue'

export default {
    i18n,
    name: 'PageCommunity',
    components: {
        I18nPageWrapper,
        CoreH1,
        ExtLink,
    },
    data() {
        return {
            communityMap: CommunityMap,
            communityLink: {
                taipei: 'http://www.meetup.com/Taipei-py/',
                pyhug: 'http://www.meetup.com/pythonhug/',
                tainan:
                    'http://www.meetup.com/Tainan-py-Python-Tainan-User-Group/',
                pyladiestw: 'https://tw.pyladies.com/',
                kaohsiung: 'http://www.meetup.com/Kaohsiung-Python-Meetup/',
                hualien: 'http://www.meetup.com/Hualien-Py/',
                djangogirlstaipei: 'https://djangogirls.org/taipei/',
                nantou:
                    'https://www.facebook.com/%E5%8D%97%E6%8A%95python-113209870215893/',
                taichung: 'https://www.facebook.com/groups/780250978715991/',
            },
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

<style lang="postcss" scoped>
.community-title {
    @apply mt-1 mb-4 font-bold text-xl cursor-pointer;
    font-family: 'Noto Serif TC';
    color: #c2a53a;
}
.box {
    background: #121023;
    border: 2px solid #c2a53a;
    box-sizing: border-box;
    box-shadow: 6px 6px 0px #c2a53a;
    border-radius: 24px;
}
</style>
