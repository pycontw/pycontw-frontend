<template>
    <div class="px-48 py-24">
        <h1 class="text-3xl my-6 text-center">{{ $t('cfp') }}</h1>
        <p class="my-6" v-html="$t('paragraph.intro')"></p>

        <h2 class="text-2xl my-6 text-center">
            {{ $t('paragraph.importantDates.title') }}
        </h2>
        <p
            v-for="(content, idx) in $t('paragraph.importantDates.content')"
            :key="idx"
            class="my-6"
            v-html="content"
        ></p>

        <h2 class="text-2xl my-6 text-center">
            {{ $t('paragraph.howToSubmit.title') }}
        </h2>
        <p
            v-for="(content, idx) in $t('paragraph.howToSubmit.content')"
            :key="idx"
            class="my-6"
            v-html="content"
        ></p>
        <h2 class="text-2xl my-6 text-center">
            {{ $t('paragraph.guidelines.title') }}
        </h2>
        <h3 class="text-xl my-6">
            {{ $t('paragraph.guidelines.talks.title') }}
        </h3>
        <p
            v-for="(content, idx) in $t('paragraph.guidelines.talks.content')"
            :key="idx"
            class="my-6"
            v-html="content"
        ></p>
        <h3 class="text-xl my-6">
            {{ $t('paragraph.guidelines.tutorials.title') }}
        </h3>
        <p
            v-for="(content, idx) in $t(
                'paragraph.guidelines.tutorials.content',
            )"
            :key="idx"
            class="my-6"
            v-html="content"
        ></p>

        <h2 class="text-2xl my-6 text-center">
            {{ $t('paragraph.reviewProcess.title') }}
        </h2>
        <p class="my-6" v-html="$t('paragraph.reviewProcess.content')"></p>
        <ul class="list-disc">
            <li
                v-for="(content, idx) in $t('paragraph.reviewProcess.stages')"
                :key="idx"
                class="my-1 ml-12"
            >
                <b>{{ content.title }}</b>
                {{ content.description }}
            </li>
        </ul>
        <h3 class="text-xl my-6">
            {{ $t('paragraph.reviewProcess.modificationStep.title') }}
        </h3>
        <p
            v-for="(content, idx) in $t(
                'paragraph.reviewProcess.modificationStep.content',
            )"
            :key="idx"
            class="my-6"
            v-html="content"
        ></p>
        <h3 class="text-xl my-6">
            {{ $t('paragraph.reviewProcess.inappropriate.title') }}
        </h3>
        <p
            v-for="(content, idx) in $t(
                'paragraph.reviewProcess.inappropriate.content',
            )"
            :key="idx"
            class="my-6"
            v-html="content"
        ></p>
    </div>
</template>

<script>
import i18n from './cfp.i18n'

export default {
    i18n,
    name: 'PageSpeakingCfp',
}
</script>

<style scoped></style>
