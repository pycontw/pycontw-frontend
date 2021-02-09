<template>
    <div class="px-48 py-24">
        <h1 class="text-3xl my-6 text-center">{{ $t('title') }}</h1>
        <p
            v-for="(content, idx) in $t('descriptions')"
            :key="idx"
            class="my-6"
            v-html="content"
        ></p>
    </div>
</template>

<script>
import i18n from './recording.i18n'

export default {
    i18n,
    name: 'PageSpeakingRecording',
}
</script>

<style scoped></style>
