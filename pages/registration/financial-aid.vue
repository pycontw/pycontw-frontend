<template>
    <i18n-page-wrapper>
        <core-h1 :title="$t('title')"></core-h1>
        <p class="intro">{{ $t('intro') }}</p>
        <div class="container">
            <two-col-wrapper
                v-for="(field, i) in $t('plainTextFields')"
                :key="`financial_plain_text_field_${i}`"
                class=""
            >
                <template #default>
                    <p>{{ field.title }}</p>
                </template>
                <template #right-col>
                    <p>{{ field.content }}</p>
                </template>
            </two-col-wrapper>
            <two-col-wrapper class="spacing">
                <template #default>
                    <p>{{ $t('visaTitle') }}</p>
                </template>
                <template #right-col>
                    <p>
                        {{ $t('visaContent') }}
                        <ext-link
                            href="mailto:organizers@python.tw"
                            highlight
                            underline
                            >organizers@python.tw</ext-link
                        >
                    </p>
                </template>
            </two-col-wrapper>

            <two-col-wrapper class="spacing">
                <template #default>
                    <p>{{ $t('applicationHowTo') }}</p>
                </template>
                <template #right-col>
                    <div :style="getImage"></div>
                </template>
            </two-col-wrapper>

            <two-col-wrapper class="spacing">
                <template #default>
                    <p>{{ $t('remarkTitle') }}</p>
                </template>
                <template #right-col>
                    <ul class="list-disc">
                        <i18n path="fillFormProcess" tag="li">
                            <template #form>
                                <ext-link
                                    href="https://forms.gle/vXZNwRPhu84G4NM49"
                                    highlight
                                    underline
                                    >{{ $t('form') }}</ext-link
                                >
                            </template>
                        </i18n>
                        <li
                            v-for="(content, i) in $t('remarkContent')"
                            :key="`remark_content_${i}`"
                        >
                            {{ content }}
                        </li>
                    </ul>
                </template>
            </two-col-wrapper>

            <two-col-wrapper>
                <template #default>
                    <p>{{ $t('applicationTipsTitle') }}</p>
                </template>
                <template #right-col>
                    <ul class="list-disc">
                        <li
                            v-for="(content, i) in $t('applicationTipsContent')"
                            :key="`application_tips_content_${i}`"
                        >
                            {{ content }}
                        </li>
                    </ul>
                </template>
            </two-col-wrapper>
        </div>
    </i18n-page-wrapper>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import i18n from '@/i18n/registration/financial-aid.i18n'
import CoreH1 from '@/components/core/titles/H1'
import TwoColWrapper from '@/components/core/layout/TwoColWrapper'
import ExtLink from '@/components/core/links/ExtLink.vue'

import ApplicationHowToZH from '@/static/img/registration/ApplicationHowToDiagramZH.svg'
import ApplicationHowToEN from '@/static/img/registration/ApplicationHowToDiagramEN.svg'

export default {
    i18n,
    name: 'PageRegistrationFinancialAid',
    components: {
        CoreH1,
        I18nPageWrapper,
        TwoColWrapper,
        ExtLink,
    },
    data() {
        return {
            applicationHowToZH: ApplicationHowToZH,
            applicationHowToEN: ApplicationHowToEN,
        }
    },
    computed: {
        getImage() {
            return {
                'background-image':
                    this.$i18n.locale === 'en-us'
                        ? `url(${this.applicationHowToEN})`
                        : `url(${this.applicationHowToZH})`,
                'background-size': 'contain',
                'background-repeat': 'no-repeat',
                'background-position': 'center',
                'padding-top': '23%',
            }
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
<style lang="postcss" scoped>
.intro {
    @apply mb-14;
    font-size: 16px;
    line-height: 28px;
    @media (min-width: 768px) {
        font-size: 18px;
    }
}

.container {
    @apply w-full md:w-10/12;
}

.spacing {
    @apply pb-6 md:pb-14;
}
</style>
