<template>
    <i18n-page-wrapper>
        <core-h1 :title="$t('title')"></core-h1>
        <two-col-wrapper>
            <template #default>
                <p>{{ $t('coreValueTitle') }}</p>
            </template>
            <template #right-col>
                <p class="content-text paragraph">
                    <ext-link
                        href="https://pyfound.blogspot.com/2017/10/psfs-october-board-meeting.html"
                        highlight
                        underline
                    >
                        {{ $t('everybodyContributes') }}
                    </ext-link>
                    {{ $t('coreValueContent')[0] }}
                </p>
                <p class="content-text paragraph">
                    {{ $t('coreValueContent')[1] }}
                </p>
            </template>
        </two-col-wrapper>
        <core-hr></core-hr>
        <two-col-wrapper
            v-for="(field, i) in $t('plainTextFields')"
            :key="`field_${i}`"
        >
            <template #default>
                <p>{{ field.title }}</p>
            </template>
            <template #right-col>
                <p class="content-text">
                    {{ field.content }}
                </p>
            </template>
        </two-col-wrapper>
        <two-col-wrapper>
            <template #default>
                <p>{{ $t('visaTitle') }}</p>
            </template>
            <template #right-col>
                <p class="content-text">
                    {{ $t('visaContent') }}
                    <ext-link
                        href="mailto:organizers@pycon.tw"
                        highlight
                        underline
                    >
                        {{ $t('orgEmail') }}
                    </ext-link>
                </p>
            </template>
        </two-col-wrapper>
        <core-hr></core-hr>
        <two-col-wrapper>
            <template #default>
                <p>{{ $t('applicationHowTo') }}</p>
            </template>
            <template #right-col>
                <p class="content-text">
                    {{ $t('applicationHowTo') }}
                    <ext-link
                        href="mailto:organizers@pycon.tw"
                        highlight
                        underline
                    >
                        {{ $t('orgEmail') }}
                    </ext-link>
                </p>
            </template>
        </two-col-wrapper>
        <two-col-wrapper>
            <template #default>
                <p>{{ $t('remarkTitle') }}</p>
            </template>
            <template #right-col>
                <ul class="list-disc">
                    <li
                        class="list-item"
                        v-for="(content, i) in $t('remarkContent')"
                        :key="`remark_content_${i}`"
                    >
                        {{ content }}
                    </li>
                </ul>
            </template>
        </two-col-wrapper>
        <core-hr></core-hr>
        <two-col-wrapper>
            <template #default>
                <p>{{ $t('applicationTipsTitle') }}</p>
            </template>
            <template #right-col>
                <ul class="list-disc">
                    <li
                        class="list-item"
                        v-for="(content, i) in $t('applicationTipsContent')"
                        :key="`application_tips_content_${i}`"
                    >
                        {{ content }}
                    </li>
                </ul>
            </template>
        </two-col-wrapper>
        <core-hr></core-hr>
        <two-col-wrapper>
            <template #default>
                <p>{{ $t('othersTitle') }}</p>
            </template>
            <template #right-col>
                <p class="content-text">{{ $t('othersContent') }}</p>
            </template>
        </two-col-wrapper>
    </i18n-page-wrapper>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import i18n from '@/i18n/registration/financial-aid.i18n'
import CoreH1 from '@/components/core/titles/H1'
import TwoColWrapper from '@/components/core/layout/TwoColWrapper'
import ExtLink from '@/components/core/links/ExtLink.vue'
import CoreHr from '@/components/core/layout/Hr.vue'

export default {
    i18n,
    name: 'PageRegistrationFinancialAid',
    components: {
        CoreH1,
        I18nPageWrapper,
        TwoColWrapper,
        ExtLink,
        CoreHr,
    },
}
</script>
<style scoped>
.content-text {
    width: 85%;
    margin: 0px 0px 0px 0px;
}

.paragraph {
    margin: 0px 0px 40px 0px;
}

.list-item {
    width: 85%;
    margin: 3px 0px;
}

.ul-disc {
    list-style: normal;
}
</style>
