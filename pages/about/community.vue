<template>
    <i18n-page-wrapper>
        <core-h1 :title="$t('title')"></core-h1>
        <div
            class="h-64 md:h-96 lg:h-96 w-full mt-4 mb-8"
            :style="communityMapStyle"
        ></div>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
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
                        class="text-xs"
                    >
                        {{ paragraph }}
                    </p>
                </div>
            </div>
        </div>
    </i18n-page-wrapper>
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
                tainan: 'http://www.meetup.com/Tainan-py-Python-Tainan-User-Group/',
                pyladiestw: 'https://tw.pyladies.com/',
                kaohsiung: 'http://www.meetup.com/Kaohsiung-Python-Meetup/',
                hualien: 'http://www.meetup.com/Hualien-Py/',
                djangogirlstaipei: 'https://djangogirls.org/taipei/',
                nantou: 'https://www.facebook.com/%E5%8D%97%E6%8A%95python-113209870215893/',
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
    head() {
        return {
            title: this.$i18n.t('title'),
            meta: [
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: this.$i18n.t('og.title'),
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: this.$i18n.t('og.description'),
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: this.$i18n.t('og.description'),
                },
            ],
        }
    },
}
</script>

<style lang="postcss" scoped>
.community-title {
    @apply mt-1 mb-4 font-serif font-bold text-xl cursor-pointer text-pink500;
}
.box {
    @apply bg-black900 border-2 border-pink500 box-border rounded-3xl shadow-pink500;
}
</style>
