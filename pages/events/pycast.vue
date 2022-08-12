<template>
    <i18n-page-wrapper class="px-8 sm:px-10 md:px-32 lg:px-60" custom-x>
        <core-h1 title="PyCast"></core-h1>
        <p class="intro whitespace-pre-line">{{ description }}</p>
        <h2>Hosts</h2>

        <h2>Platforms</h2>

        <h2>Episodes</h2>
        <div v-for="podcast in podcasts" :key="podcast.id">
            <h3>{{ podcast.title }}</h3>
            <markdown-renderer :markdown="podcast.description">
            </markdown-renderer>
            <iframe
                :src="`https://open.spotify.com/embed/episode/${podcast.id}?theme=0`"
                width="100%"
                height="232"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
        </div>
    </i18n-page-wrapper>
</template>

<script>
import i18n from '@/i18n/events/open-spaces.i18n'
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import CoreH1 from '@/components/core/titles/H1'
import MarkdownRenderer from '@/components/core/markdown/MarkdownRenderer'

export default {
    i18n,
    name: 'PageEventsPycast',
    components: {
        I18nPageWrapper,
        CoreH1,
        MarkdownRenderer,
    },
    data() {
        return {
            title: 'PyCast',
            description:
                'PyCast 是由 PyCon Taiwan 熱血志工組成的 Podcast 節目，在這個節目中，' +
                '我們將邀請 Python 社群元老級人物、 神人講者以及 PyCon TW 歷年志工來和' +
                '我們聊聊與 Python 相關的二三事，歡迎跟我們一起「Py」起來！',
            hosts: [
                { name: '四貓', photo: '' },
                { name: 'Benson', photo: '' },
            ],
            platforms: [
                { tag: '', icon: '', link: '' },
                { tag: '', icon: '', link: '' },
                { tag: '', icon: '', link: '' },
                { tag: '', icon: '', link: '' },
                { tag: '', icon: '', link: '' },
                { tag: '', icon: '', link: '' },
            ],
            podcasts: [],
        }
    },
    async mounted() {
        await this.$store.dispatch('$getPycastData')
        this.podcasts = this.$store.state.pycastData
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
                    content: this.description,
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: this.description,
                },
            ],
        }
    },
}
</script>

<style lang="postcss" scoped>
h2 {
    @apply font-serif font-black text-base md:text-lg text-center mx-auto;
    margin-top: 3rem !important;
    color: #f3cc39;
}
h3 {
    @apply font-serif font-black text-base md:text-lg;
    color: #9387ff;
}
</style>
