<template>
    <i18n-page-wrapper>
        <core-h1 :title="$t('title')"></core-h1>
        <i18n path="intro.0" tag="p">
            <template #cfp>
                <locale-link to="/speaking/cfp" highlight>{{
                    $t('terms.cfp')
                }}</locale-link>
            </template>
        </i18n>

        <!-- Tips -->
        <i18n path="intro.1" tag="p"></i18n>
        <ul class="list-disc">
            <i18n
                v-for="(tip, i) in $t('tips')"
                :key="`talk_tips_${i}`"
                :path="`tips.${i}`"
                tag="li"
            ></i18n>
        </ul>

        <!-- Required Fields -->
        <i18n path="requiredFields-description" tag="p"> </i18n>
        <ul class="list-disc">
            <i18n
                v-for="(field, i) in $t('requiredFields-fields')"
                :key="`talk_required_field_${i}`"
                :path="`requiredFields-fields.${i}`"
                tag="li"
            ></i18n>
        </ul>
        <i18n path="requiredFields-encouragement" tag="p"></i18n>
        <i18n path="requiredFields-reviewOnly" tag="p"></i18n>
        <ul class="list-disc">
            <i18n
                v-for="(content, i) in $t('requiredFields-reviewOnlyFields')"
                :key="`talk_review_only_field_${i}`"
                :path="`requiredFields-reviewOnlyFields.${i}`"
                tag="li"
            ></i18n>
        </ul>
        <i18n path="requiredFields-summaries.0" tag="p">
            <template #myPyCon>
                <ext-link :href="myPyConLink" highlight>My PyCon</ext-link>
            </template>
        </i18n>
        <i18n path="requiredFields-summaries.1" tag="p"></i18n>

        <!-- Advices -->
        <two-col-wrapper>
            <template #default>
                <h2>{{ $t('advice-title') }}</h2>
            </template>
            <template #right-col>
                <i18n path="advice-previousConf" tag="p"> </i18n>
                <ul class="list-disc list-inside">
                    <li
                        v-for="(conf, i) in previousConfLinks"
                        :key="`talk_previous_conf_${i}`"
                    >
                        <ext-link :href="conf[1]" highlight>
                            {{ conf[0] }}
                        </ext-link>
                    </li>
                </ul>
            </template>
        </two-col-wrapper>

        <!-- Good & Bad Ideas -->
        <div
            v-for="(tag, i) in ['goodIdea', 'badIdea']"
            :key="`talk_idea_type_${i}`"
        >
            <two-col-wrapper>
                <template #default>
                    <h3>{{ $t(`advice-${tag}-title`) }}</h3>
                </template>
                <template #right-col>
                    <ul class="list-disc">
                        <li
                            v-for="(idea, j) in $t(`advice-${tag}-ideas`)"
                            :key="`talk_idea_type_${i}_idea_${j}`"
                        >
                            {{ idea[0] }}
                            <ul v-if="idea[1]" class="list-disc list-inside">
                                <li
                                    v-for="(detail, k) in idea[1]"
                                    :key="`talk_idea_type_${i}_idea_${j}_detail_${k}`"
                                >
                                    {{ detail }}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </template>
            </two-col-wrapper>
        </div>

        <!-- Choose Level -->
        <h2>{{ $t('chooseLevel-title') }}</h2>
        <i18n
            v-for="(content, i) in $t('chooseLevel-descriptions')"
            :key="`talk_choose_level_description_${i}`"
            :path="`chooseLevel-descriptions.${i}`"
            tag="p"
        >
            <template #important>
                <b>{{ $t('terms.important') }}</b>
            </template>
        </i18n>
        <div
            v-for="(levelInfo, i) in $t('chooseLevel-levels')"
            :key="`talk_choose_level_level_${i}`"
        >
            <two-col-wrapper>
                <template #default>
                    <h3>{{ levelInfo[0] }}</h3>
                </template>
                <template #right-col>
                    <p
                        v-for="(description, j) in levelInfo[1]"
                        :key="`talk_choose_level_level_${i}_content_${j}`"
                    >
                        {{ description }}
                    </p>
                </template>
            </two-col-wrapper>
        </div>
    </i18n-page-wrapper>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import CoreH1 from '@/components/core/titles/H1'
import LocaleLink from '@/components/core/links/LocaleLink.vue'
import ExtLink from '@/components/core/links/ExtLink.vue'
import i18n from '@/i18n/speaking/talk.i18n'
import TwoColWrapper from '@/components/core/layout/TwoColWrapper'

export default {
    i18n,
    name: 'PageSpeakingTalk',
    components: {
        I18nPageWrapper,
        CoreH1,
        ExtLink,
        LocaleLink,
        TwoColWrapper,
    },
    computed: {
        myPyConLink() {
            return `https://tw.pycon.org/prs/${this.$i18n.locale}/dashboard`
        },
        previousConfLinks() {
            return [
                ['PyCon APAC 2021', `https://th.pycon.org/pages/schedule`],
                [
                    'PyCon APAC 2020',
                    `https://pycon.my/pycon-apac-2020-conference-talks/`,
                ],
                ['PyCon APAC 2019', `https://pycon.python.ph/`],
                [
                    'PyCon Taiwan 2021',
                    `https://tw.pycon.org/2021/${this.$i18n.locale}/conference/schedule/`,
                ],
                [
                    'PyCon Taiwan 2020',
                    `https://tw.pycon.org/2020/${this.$i18n.locale}/conference/schedule/`,
                ],
                [
                    'PyCon Taiwan 2019',
                    `https://tw.pycon.org/2019/${this.$i18n.locale}/events/schedule/`,
                ],
            ]
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

<style scoped></style>
