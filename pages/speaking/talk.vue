<template>
    <div class="px-48 py-24">
        <h1 class="text-3xl my-6 text-center">{{ $t('title') }}</h1>
        <p
            v-for="(content, idx) in $t('intro.greetings')"
            :key="idx"
            class="my-6"
            v-html="content"
        ></p>

        <!-- Tips -->
        <p class="my-6" v-html="$t('intro.tips.description')"></p>
        <ul class="list-disc">
            <li
                v-for="(content, idx) in $t('intro.tips.items')"
                :key="idx"
                class="my-1 ml-12"
                v-html="content"
            ></li>
        </ul>

        <p class="my-6" v-html="$t('intro.requiredFields.description')"></p>
        <ul class="list-disc">
            <li
                v-for="(content, idx) in $t('intro.requiredFields.items')"
                :key="idx"
                class="my-1 ml-12"
                v-html="content"
            ></li>
        </ul>
        <p class="my-6" v-html="$t('intro.requiredFields.summary')"></p>

        <p class="my-6" v-html="$t('intro.forReviewers.description')"></p>
        <ul class="list-disc">
            <li
                v-for="(content, idx) in $t('intro.forReviewers.items')"
                :key="idx"
                class="my-1 ml-12"
                v-html="content"
            ></li>
        </ul>

        <p
            v-for="(content, idx) in $t('intro.summaries')"
            :key="idx"
            class="my-6"
            v-html="content"
        ></p>

        <!-- Advices -->
        <h2 class="text-2xl my-6 text-center">{{ $t('advice.title') }}</h2>
        <p class="my-6" v-html="$t('advice.previousConf.description')"></p>
        <ul class="list-disc">
            <li
                v-for="(content, idx) in $t('advice.previousConf.items')"
                :key="idx"
                class="my-1 ml-12"
                v-html="content"
            ></li>
        </ul>

        <!-- Good Ideas -->
        <h3 class="text-xl my-6">
            {{ $t('advice.goodIdea.title') }}
        </h3>
        <ul class="list-disc">
            <li
                v-for="(content, idx) in $t('advice.goodIdea.items')"
                :key="idx"
                class="my-1 ml-12"
            >
                {{ content.description }}
                <ul class="list-disc">
                    <li
                        v-for="(detail, detail_idx) in content.details"
                        :key="detail_idx"
                        class="my-1 ml-12"
                        v-html="detail"
                    ></li>
                </ul>
            </li>
        </ul>

        <!-- Bad Ideas -->
        <h3 class="text-xl my-6">
            {{ $t('advice.badIdea.title') }}
        </h3>
        <ul class="list-disc">
            <li
                v-for="(content, idx) in $t('advice.badIdea.items')"
                :key="idx"
                class="my-1 ml-12"
            >
                {{ content.description }}
                <ul class="list-disc">
                    <li
                        v-for="(detail, detail_idx) in content.details"
                        :key="detail_idx"
                        class="my-1 ml-12"
                        v-html="detail"
                    ></li>
                </ul>
            </li>
        </ul>

        <!-- Choose Level -->
        <h2 class="text-2xl my-6 text-center">{{ $t('chooseLevel.title') }}</h2>
        <p
            v-for="(content, idx) in $t('chooseLevel.descriptions')"
            :key="idx"
            class="my-6"
            v-html="content"
        ></p>

        <h3 class="text-xl my-6">
            {{ $t('chooseLevel.novice.title') }}
        </h3>
        <p
            v-for="(content, idx) in $t('chooseLevel.novice.descriptions')"
            :key="idx"
            class="my-6"
            v-html="content"
        ></p>
        <h3 class="text-xl my-6">
            {{ $t('chooseLevel.intermediate.title') }}
        </h3>
        <p
            v-for="(content, idx) in $t(
                'chooseLevel.intermediate.descriptions',
            )"
            :key="idx"
            class="my-6"
            v-html="content"
        ></p>
        <h3 class="text-xl my-6">
            {{ $t('chooseLevel.experienced.title') }}
        </h3>
        <p
            v-for="(content, idx) in $t('chooseLevel.experienced.descriptions')"
            :key="idx"
            class="my-6"
            v-html="content"
        ></p>
    </div>
</template>

<script>
import i18n from './talk.i18n'

export default {
    i18n,
    name: 'PageSpeakingTalk',
}
</script>

<style scoped></style>
