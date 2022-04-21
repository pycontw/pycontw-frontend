<template>
    <i18n-page-wrapper>
        <core-h1 :title="$t('title')"></core-h1>
        <i18n
            v-for="(content, i) in $t('intro')"
            :key="`tutorial_intro_${i}`"
            :path="`intro.${i}`"
            tag="p"
        >
            <template #cfp>
                <locale-link to="/speaking/cfp" highlight>{{
                    $t('terms.cfp')
                }}</locale-link>
            </template>
        </i18n>
        <ul class="list-disc">
            <li
                v-for="(item, i) in $t('requirements')"
                :key="`tutorial_requirement_${i}`"
            >
                {{ item }}
            </li>
        </ul>
        <i18n path="proviso" tag="p"></i18n>

        <!-- Policies -->
        <div
            v-for="(policy, i) in $t('policies')"
            :key="`tutorial_policy_${i}`"
        >
            <h2>{{ policy[0] }}</h2>
            <i18n
                v-for="(description, j) in policy[1]"
                :key="`tutorial_policy_${i}_description_${j}`"
                :path="`policies.${i}[1].${j}`"
                tag="p"
            >
                <template #contact>
                    <ext-link href="mailto:organizers@python.tw" highlight>{{
                        $t('terms.contact')
                    }}</ext-link>
                </template>
            </i18n>
        </div>
    </i18n-page-wrapper>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import CoreH1 from '@/components/core/titles/H1'
import ExtLink from '@/components/core/links/ExtLink.vue'
import LocaleLink from '@/components/core/links/LocaleLink.vue'
import i18n from '@/i18n/speaking/tutorial.i18n'

export default {
    i18n,
    name: 'PageSpeakingTutorial',
    components: {
        I18nPageWrapper,
        CoreH1,
        LocaleLink,
        ExtLink,
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
