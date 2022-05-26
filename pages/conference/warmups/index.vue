<template>
    <i18n-page-wrapper class="px-8 sm:px-10 md:px-32 lg:px-60" custom-x>
        <core-h1 :title="title" center></core-h1>
        <div class="eventSection">
            <div
                v-for="(event, i) in events"
                :key="`warmup_events_${i}`"
                class="event"
            >
                <h2>
                    <locale-link :to="event.link" highlight>
                        {{ event.title }}
                    </locale-link>
                </h2>
                <p>{{ event.description }}</p>
            </div>
        </div>
    </i18n-page-wrapper>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import CoreH1 from '@/components/core/titles/H1'
import LocaleLink from '@/components/core/links/LocaleLink'

export default {
    name: 'PageConferenceWarmups',
    components: {
        I18nPageWrapper,
        CoreH1,
        LocaleLink,
    },
    data() {
        return {
            title: '暖身活動',
            intro: 'PyCon TW 暖身活動',
            events: [
                {
                    title: 'Young Inspirers',
                    link: '/conference/young-inspirers',
                    description:
                        'Young Inspirers 是今年第一個由 PyCon Taiwan 所籌備的小型線上會議，' +
                        '我們將邀請具有獨特經歷的學生講者進行分享，期望透過學習經驗的交流與傳承，' +
                        '促進更多 Young Inspirers 的出現。',
                },
                {
                    title: 'PyCon TW x Taichung.py 聯合線上直播',
                    link: '/conference/warmups/taichungpy',
                    description:
                        '接續 Young Inspirers 活動的經驗，PyCon Taiwan 這次合併 Taichung.py 聚會進行線上 Meetup，同時也可以在 Gather Town 上進行虛擬互動。',
                },
                {
                    title: 'PyCon TW x PyHUG.py 聯合線上直播',
                    link: '/conference/warmups/pyhug',
                    description:
                        '暖身活動來到第三場，PyCon Taiwan 與地方社群 PyHUG 聚會進行線上 Meetup。',
                },
            ],
        }
    },
    head() {
        return {
            title: this.title,
            meta: [
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: this.title,
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: this.intro,
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: this.intro,
                },
            ],
        }
    },
}
</script>

<style lang="postcss" scoped>
h2 {
    @apply font-serif font-black mx-auto text-pink500;
    margin-top: 3rem !important;
    margin-bottom: 0.5rem !important;
    font-size: 24px;
}
</style>
