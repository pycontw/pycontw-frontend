<template>
    <div class="px-48 py-24">
        <h1 class="text-3xl my-6 text-center">{{ $t('title') }}</h1>
        <p
            v-for="(content, idx) in $t('intro.descriptions')"
            :key="idx"
            class="my-6"
            v-html="content"
        ></p>
        <ul class="list-disc">
            <li
                v-for="(content, idx) in $t('intro.requirements')"
                :key="idx"
                class="my-1 ml-12"
                v-html="content"
            ></li>
        </ul>
        <p class="my-6" v-html="$t('intro.proviso')"></p>

        <div
            v-for="(content, i) in [
                'duration',
                'dateAndLocation',
                'chargingPolicy',
                'howTo',
            ]"
            :key="i"
        >
            <h2 class="text-2xl my-6 text-center">
                {{ $t(`${content}.title`) }}
            </h2>
            <p
                v-for="(description, idx) in $t(`${content}.descriptions`)"
                :key="idx"
                class="my-6"
                v-html="description"
            ></p>
        </div>
    </div>
</template>

<script>
import i18n from './tutorial.i18n'

export default {
    i18n,
    name: 'PageSpeakingTutorial',
}
</script>

<style scoped></style>
