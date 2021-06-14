<template>
    <i18n-page-wrapper>
        <h1>{{ $t('title') }}</h1>
        <i18n
            v-for="(paragraph, i) in $t('paragraphs')"
            :key="`recording_${i}`"
            :path="`paragraphs.${i}`"
            tag="p"
        >
            <template #pyvideo>
                <ext-link href="https://pyvideo.org" highlight
                    >pyvideo.org</ext-link
                >
            </template>
        </i18n>
    </i18n-page-wrapper>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import ExtLink from '@/components/core/links/ExtLink'
import i18n from '@/i18n/speaking/recording.i18n'

export default {
    i18n,
    name: 'PageSpeakingRecording',
    components: {
        I18nPageWrapper,
        ExtLink,
    },
    head() {
        return {
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
            ],
        }
    },
}
</script>

<style scoped></style>
