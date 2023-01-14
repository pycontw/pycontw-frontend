<template>
    <i18n-page-wrapper>
        <core-h1 :title="$t('title')"></core-h1>
        <i18n
            v-for="(content, i) in $t('intro')"
            :key="`recording_${i}`"
            :path="`intro.${i}`"
            tag="p"
            class="recording__intro"
        >
            <template #pyvideo>
                <ext-link href="https://pyvideo.org" highlight
                    >pyvideo.org</ext-link
                >
            </template>
        </i18n>

        <div class="recording__policies">
            <div
                v-for="(policy, i) in $t('policies')"
                :key="`recording_policy_${i}`"
                class="recording__policy"
            >
                <two-col-wrapper>
                    <template #default>
                        <h2>{{ policy[0] }}</h2>
                    </template>
                    <template #right-col>
                        <i18n
                            v-for="(description, j) in policy[1]"
                            :key="`recording_policy_${i}_description_${j}`"
                            :path="`policies.${i}[1].${j}`"
                            tag="p"
                        >
                        </i18n>
                    </template>
                </two-col-wrapper>
            </div>
        </div>
    </i18n-page-wrapper>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import CoreH1 from '@/components/core/titles/H1'
import ExtLink from '@/components/core/links/ExtLink'
import i18n from '@/i18n/speaking/recording.i18n'
import TwoColWrapper from '@/components/core/layout/TwoColWrapper'

export default {
    i18n,
    name: 'PageSpeakingRecording',
    components: {
        I18nPageWrapper,
        CoreH1,
        ExtLink,
        TwoColWrapper,
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

<style lang="postcss" scpoed>
.recording__intro {
    @apply text-[18px];
    @media (min-width: 1024px) {
        @apply text-base;
    }
}

.recording__policies {
    @apply md:pt-2;
}

.recording__policy {
    @apply md:py-2;
    @media (min-width: 1024px) {
        @apply px-6;
    }
}
</style>
