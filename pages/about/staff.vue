<template>
    <i18n-page-wrapper>
        <h1>{{ $t('title') }}</h1>
        <div class="flex flex-col items-center">
            <div
                v-for="(content, i) in $t('contents')"
                :key="`staff_content_${i}`"
            >
                <h2 class="flex flex-col items-center">
                    {{ content.organization }}
                </h2>
                <p
                    class="flex flex-col items-center"
                    v-for="(member, j) in content.members"
                    :key="`staff_members_${j}`"
                >
                    {{ member }}
                </p>
            </div>
        </div>
    </i18n-page-wrapper>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import i18n from '@/i18n/about/staff.i18n'

export default {
    i18n,
    name: 'PageStaff',
    components: {
        I18nPageWrapper,
    },
}
</script>

<style scoped></style>
