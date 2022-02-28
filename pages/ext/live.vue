<template>
    <i18n-page-wrapper>
        <core-h1 :title="$t('title')"></core-h1>
        <div v-if="!isValidAttendee">{{ $t('invalidAttendee') }}</div>
        <div v-else>
            <div v-for="videoInfo in youtubeInfo" :key="videoInfo.video_id">
                <p class="paragraph-title">{{ videoInfo.room }}</p>
                <youtube :video-id="videoInfo.video_id"></youtube>
            </div>
        </div>
    </i18n-page-wrapper>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import i18n from '@/i18n/ext/live.i18n'
import CoreH1 from '@/components/core/titles/H1'
import Youtube from '@/components/core/embed/Youtube'

export default {
    i18n,
    name: 'Live',
    components: {
        I18nPageWrapper,
        CoreH1,
        Youtube,
    },
    fetchOnServer: false,
    async fetch() {
        const token = this.$nuxt.context.query.token
        const store = this.$nuxt.context.store
        await store.dispatch('$verifyAttendee', { token })
        this.isValidAttendee =
            store.state.youtubeInfo && store.state.youtubeInfo.length !== 0
        this.youtubeInfo = store.state.youtubeInfo
    },
    data() {
        return {
            isValidAttendee: false,
            youtubeInfo: [],
        }
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

<style scoped>
.paragraph-title {
    @apply font-serif font-bold mt-10;
    color: #c386ae;
}
</style>
