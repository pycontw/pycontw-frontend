<template>
    <div class="px-64 py-24">
        <h1 class="text-3xl my-8 text-center">{{ $t('title') }}</h1>
        <i18n
            v-for="(paragraph, i) in $t('paragraphs')"
            :key="`recording_${i}`"
            :path="`paragraphs.${i}`"
            tag="p"
            class="my-8"
        >
            <template #pyvideo>
                <ext-link href="https://pyvideo.org" highlight
                    >pyvideo.org</ext-link
                >
            </template>
        </i18n>
    </div>
</template>

<script>
import i18n from './recording.i18n'
import ExtLink from '~/components/core/links/ExtLink'

export default {
    i18n,
    name: 'PageSpeakingRecording',
    components: {
        ExtLink,
    },
}
</script>

<style scoped></style>
