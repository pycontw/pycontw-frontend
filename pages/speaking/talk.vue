<template>
    <div class="px-64 py-24">
        <h1 class="text-3xl my-8 text-center">{{ $t('title') }}</h1>
        <i18n path="intro.0" tag="p" class="my-6">
            <template #cfp>
                <locale-link to="/speaking/cfp" highlight>{{
                    $t('terms.cfp')
                }}</locale-link>
            </template>
        </i18n>

        <!-- Tips -->
        <i18n path="intro.1" tag="p" class="mt-6 mb-3"></i18n>
        <ul class="list-disc">
            <i18n
                v-for="(tip, i) in $t('tips')"
                :key="`talk_tips_${i}`"
                :path="`tips.${i}`"
                tag="li"
                class="my-1 ml-12"
            ></i18n>
        </ul>

        <!-- Required Fields -->
        <i18n path="requiredFields-description" tag="p" class="mt-6 mb-3">
        </i18n>
        <ul class="list-disc">
            <i18n
                v-for="(field, i) in $t('requiredFields-fields')"
                :key="`talk_required_field_${i}`"
                :path="`requiredFields-fields.${i}`"
                tag="li"
                class="my-1 ml-12"
            ></i18n>
        </ul>
        <i18n
            path="requiredFields-encouragement"
            tag="p"
            class="mt-3 mb-6"
        ></i18n>
        <i18n path="requiredFields-reviewOnly" tag="p" class="mt-6 mb-3"></i18n>
        <ul class="list-disc">
            <i18n
                v-for="(content, i) in $t('requiredFields-reviewOnlyFields')"
                :key="`talk_review_only_field_${i}`"
                :path="`requiredFields-reviewOnlyFields.${i}`"
                tag="li"
                class="my-1 ml-12"
            ></i18n>
        </ul>
        <i18n path="requiredFields-summaries.0" tag="p" class="my-8">
            <template #myPyCon>
                <ext-link :href="myPyConLink" highlight>My PyCon</ext-link>
            </template>
        </i18n>
        <i18n path="requiredFields-summaries.1" tag="p" class="my-8"></i18n>

        <!-- Advices -->
        <h2 class="text-2xl mt-12 mb-6">{{ $t('advice-title') }}</h2>
        <i18n path="advice-previousConf" tag="p" class="mt-6 mb-3"> </i18n>
        <ul class="list-disc">
            <li
                v-for="(conf, i) in previousConfLinks"
                :key="`talk_previous_conf_${i}`"
                class="my-1 ml-12"
            >
                <ext-link :href="conf[1]" highlight>
                    {{ conf[0] }}
                </ext-link>
            </li>
        </ul>

        <!-- Good & Bad Ideas -->
        <div
            v-for="(tag, i) in ['goodIdea', 'badIdea']"
            :key="`talk_idea_type_${i}`"
        >
            <h3 class="text-xl mt-6 mb-3">{{ $t(`advice-${tag}-title`) }}</h3>
            <ul class="list-disc">
                <li
                    v-for="(idea, j) in $t(`advice-${tag}-ideas`)"
                    :key="`talk_idea_type_${i}_idea_${j}`"
                    class="my-1 ml-12"
                >
                    {{ idea[0] }}
                    <ul v-if="idea[1]" class="list-disc">
                        <li
                            v-for="(detail, k) in idea[1]"
                            :key="`talk_idea_type_${i}_idea_${j}_detail_${k}`"
                            class="my-1 ml-12"
                        >
                            {{ detail }}
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

        <!-- Choose Level -->
        <h2 class="text-2xl mt-12 mb-6">{{ $t('chooseLevel-title') }}</h2>
        <i18n
            v-for="(content, i) in $t('chooseLevel-descriptions')"
            :key="`talk_choose_level_description_${i}`"
            :path="`chooseLevel-descriptions.${i}`"
            tag="p"
            class="my-6"
        >
            <template #important>
                <b>{{ $t('terms.important') }}</b>
            </template>
        </i18n>
        <div
            v-for="(levelInfo, i) in $t('chooseLevel-levels')"
            :key="`talk_choose_level_level_${i}`"
        >
            <h3 class="text-xl mt-6 mb-3">{{ levelInfo[0] }}</h3>
            <p
                v-for="(description, j) in levelInfo[1]"
                :key="`talk_choose_level_level_${i}_content_${j}`"
                class="my-6"
            >
                {{ description }}
            </p>
        </div>
    </div>
</template>

<script>
import LocaleLink from '@/components/core/links/LocaleLink.vue'
import ExtLink from '@/components/core/links/ExtLink.vue'
import i18n from './talk.i18n'

export default {
    i18n,
    name: 'PageSpeakingTalk',
    components: {
        ExtLink,
        LocaleLink,
    },
    computed: {
        myPyConLink() {
            return `https://tw.pycon.org/2021/${this.$i18n.locale}/dashboard`
        },
        previousConfLinks() {
            // use 'en' & 'zh' before 2016
            const shortLocale = { 'en-us': 'en', 'zh-hant': 'zh' }[
                this.$i18n.locale
            ]
            return [
                [
                    'PyCon Taiwan 2020',
                    `https://tw.pycon.org/2020/${this.$i18n.locale}/conference/schedule/`,
                ],
                [
                    'PyCon Taiwan 2019',
                    `https://tw.pycon.org/2019/${this.$i18n.locale}/events/schedule/`,
                ],
                [
                    'PyCon Taiwan 2018',
                    `https://tw.pycon.org/2018/${this.$i18n.locale}/events/schedule/`,
                ],
                [
                    'PyCon Taiwan 2017',
                    `https://tw.pycon.org/2017/${this.$i18n.locale}/events/schedule/`,
                ],
                [
                    'PyCon Taiwan 2016',
                    `https://tw.pycon.org/2016/${this.$i18n.locale}/events/schedule/`,
                ],
                [
                    'PyCon Taiwan PyCon APAC 2015',
                    `https://tw.pycon.org/2015apac/${shortLocale}/schedule/`,
                ],
                [
                    'PyCon Taiwan PyCon APAC 2014',
                    `https://tw.pycon.org/2014apac/${shortLocale}/program/`,
                ],
                [
                    'PyCon Taiwan 2013',
                    `https://tw.pycon.org/2013/${shortLocale}/program/`,
                ],
            ]
        },
    },
}
</script>

<style scoped></style>
