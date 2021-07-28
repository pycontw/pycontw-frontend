<template>
    <I18nPageWrapper>
        <core-h1 :title="$t('title')"></core-h1>
        <div v-if="!isValidAttendee">{{ $t('invalidAttendee') }}</div>
        <div v-else>
            <div v-for="videoInfo in youtubeInfo" :key="videoInfo.video_id">
                <p class="paragraph-title">{{ videoInfo.room }}</p>
                <youtube :video-id="videoInfo.video_id"></youtube>
            </div>
        </div>
    </I18nPageWrapper>
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
    async asyncData({ store, query }) {
        const token = query.token
        await store.dispatch('$verifyAttendee', { token })
    },
    computed: {
        isValidAttendee() {
            return (
                this.$store.state.youtubeInfo &&
                this.$store.state.youtubeInfo.length !== 0
            )
        },
        youtubeInfo() {
            return this.$store.state.youtubeInfo
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

<style scoped>
.paragraph-title {
    @apply font-serif font-bold mt-10;
    color: #c2a53a;
}
</style>
