<template>
    <i18n-page-wrapper>
        <core-h1 :title="$t('title')"></core-h1>
        <div class="sprints_image">
            <img
                src="~@/static/img/events/sprints/sprints-photo.webp"
                alt="Photo of PyCon Taiwan Sprints"
            />
        </div>
        <i18n path="intro" tag="p" class="intro whitespace-pre-line"></i18n>
        <two-col-wrapper class="spacing">
            <template #default>
                <p>{{ $t('mode') }}</p>
            </template>
            <template #right-col>
                <i18n
                    v-for="(paragraph, i) in $t('modeDescriptions')"
                    :key="`mode_descriptions_${i}`"
                    :path="`modeDescriptions.${i}`"
                    tag="p"
                >
                    <template #kktix>
                        <ext-link
                            href="https://pycontw.kktix.cc/events/2025-sprints"
                            highlight
                            >KKTIX</ext-link
                        >
                    </template>
                    <template #hackmd>
                        <ext-link
                            href="https://hackmd.io/@pycontw/ry31NKlIgg"
                            highlight
                            >HackMD</ext-link
                        >
                    </template>
                    <template #form>
                        <ext-link
                            href="https://forms.gle/LcPV4zn2HFky1SsMA"
                            highlight
                            >{{ $t('form') }}</ext-link
                        >
                    </template>
                </i18n>
            </template>
        </two-col-wrapper>
        <iframe
            class="hackmd"
            src="https://hackmd.io/@pycontw/ry31NKlIgg"
        ></iframe>
    </i18n-page-wrapper>
</template>

<script>
import i18n from '@/i18n/events/sprints.i18n'
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import CoreH1 from '@/components/core/titles/H1'
import ExtLink from '@/components/core/links/ExtLink'
import TwoColWrapper from '@/components/core/layout/TwoColWrapper'

export default {
    i18n,
    name: 'PageEventsSprints',
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
                    content: this.$i18n.t('title'),
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: this.$i18n.t('intro'),
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: this.$i18n.t('intro'),
                },
            ],
        }
    },
}
</script>

<style lang="postcss" scoped>
.sprints_image {
    @apply my-4 flex h-32 w-full items-center justify-between overflow-hidden md:h-80;
    @apply rounded-lg ring-2 ring-pink-700;
}
.sprints_image__img {
    @apply min-h-full object-cover;
}
.intro {
    font-size: 16px;
    @media (min-width: 1024px) {
        font-size: 18px;
    }
}
.spacing {
    @apply py-2 lg:py-5;
}
.hackmd {
    @apply w-full;
    height: 800px;
}
</style>
