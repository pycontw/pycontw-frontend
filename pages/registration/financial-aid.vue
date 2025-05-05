<template>
    <i18n-page-wrapper>
        <core-h1 :title="$t('title')"></core-h1>
        <div class="mb-[50px]">
            <i18n path="intro" tag="div"></i18n>
        </div>
        <div>
            <two-col-wrapper
                v-for="(field, i) in $t('plainTextFields')"
                :key="`financial_plain_text_field_${i}`"
            >
                <template #default>
                    <p>{{ field.title }}</p>
                </template>
                <template #right-col>
                    <p>{{ field.content }}</p>
                </template>
            </two-col-wrapper>
            <two-col-wrapper
                v-for="(field, i) in $t('plainTextFieldsTwo')"
                :key="`financial_plain_text_field_${i}`"
            >
                <template #default>
                    <p>{{ field.title }}</p>
                </template>
                <template #right-col>
                    <ul class="list-disc">
                        <li
                            v-for="(item, j) in field.content"
                            :key="`auxiliary_item_content_${j}`"
                        >
                            {{ item.title }}
                            <ul class="list-disc">
                                <li
                                    v-for="(content, k) in item.content"
                                    :key="`auxiliary_item_subcontent_${j}_${k}`"
                                    class="ml-6"
                                >
                                    {{ content }}
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <p v-if="field.remark" class="list-disc">
                        {{ field.remark }}
                    </p>
                </template>
            </two-col-wrapper>

            <two-col-wrapper class="spacing">
                <template #default>
                    <p>{{ $t('applicationHowTo') }}</p>
                </template>
                <template #right-col>
                    <div class="bg-img" :style="bgImgStyle"></div>
                </template>
            </two-col-wrapper>

            <div v-for="(section, i) in info" :key="`cfp.${i}`">
                <two-col-wrapper>
                    <div slot="default">
                        <i18n
                            :key="`info.${section.tag}.title`"
                            :path="`info.${section.tag}.title`"
                            class="title"
                            tag="p"
                        >
                        </i18n>
                    </div>
                    <div slot="right-col">
                        <i18n
                            v-for="(description, index) in $t(
                                `info.${section.tag}.description`,
                            )"
                            :key="`info.${section.tag}.description.${index}`"
                            :path="`info.${section.tag}.description.${index}`"
                            :tag="`${section.isDescriptionList ? 'li' : 'div'}`"
                        >
                            <template
                                v-for="link in section.links"
                                :slot="link.slot"
                            >
                                <ext-link
                                    v-if="link.isExternalLink"
                                    :key="`${link.textKey}.external`"
                                    :href="link.url"
                                    highlight
                                >
                                    {{ $t(link.textKey) }}
                                </ext-link>
                            </template>
                        </i18n>
                    </div>
                </two-col-wrapper>
            </div>

            <two-col-wrapper class="spacing">
                <template #default>
                    <p>{{ $t('remarkTitle') }}</p>
                </template>
                <template #right-col>
                    <ul class="list-disc">
                        <i18n path="fillFormProcess" tag="li">
                            <template #form>
                                <ext-link
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSfwCkM_N8KZeMeZCwGaFpQZyuXbI5J4mQ2UIgj4xTwqTjvW2Q/viewform"
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
            info: [
                {
                    tag: 'applicationDeadline',
                    isDescriptionList: true,
                    links: [
                        {
                            slot: 'aoe0',
                            textKey: 'terms.aoe0',
                            url: 'https://www.timeanddate.com/worldclock/converter.html?iso=20250401T235000&p1=tz_aoe&p2=241&p3=1440',
                            isExternalLink: true,
                        },
                        {
                            slot: 'aoe1',
                            textKey: 'terms.aoe1',
                            url: 'https://www.timeanddate.com/worldclock/converter.html?iso=20250620T235000&p1=tz_aoe&p2=241&p3=1440',
                            isExternalLink: true,
                        },
                        {
                            slot: 'aoe2',
                            textKey: 'terms.aoe2',
                            url: 'https://www.timeanddate.com/worldclock/converter.html?iso=20250701T235000&p1=tz_aoe&p2=241&p3=1440',
                            isExternalLink: true,
                        },
                        {
                            slot: 'taipeiTime',
                            textKey: 'terms.taipeiTime',
                            url: 'https://www.timeanddate.com/worldclock/converter.html?iso=20250905T180000&p1=tz_aoe&p2=241&p3=1440',
                            isExternalLink: true,
                        },
                    ],
                },
            ],
        }
    },
    computed: {
        bgImgStyle() {
            return {
                'background-image':
                    this.$i18n.locale === 'en-us'
                        ? `url(${this.applicationHowToEN})`
                        : `url(${this.applicationHowToZH})`,
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
    @media (min-width: 1024px) {
        font-size: 18px;
    }
}

.bg-img {
    @apply mt-4 bg-contain bg-left bg-no-repeat pt-40 lg:pt-52;
}

.spacing {
    @apply py-2 lg:py-5;
}
</style>
