<template>
    <div class="intro">
        <div v-if="isShowingApacIntro" class="description-wrapper">
            <div>
                <core-h2
                    :title="$t('whatIsPyConAPAC')"
                    :is-bulleted="isBulleted"
                    class="intro-h2"
                ></core-h2>
                <p class="info-section-description">
                    {{ $t('whatIsPyConAPACContent') }}
                </p>
            </div>
            <div>
                <core-h2
                    :title="$t('pyConWillBeHeldOnline')"
                    :is-bulleted="isBulleted"
                    class="intro-h2"
                ></core-h2>
                <p class="info-section-description">
                    {{ $t('pyConWillBeHeldOnlineContent') }}
                </p>
            </div>
        </div>

        <core-h2
            :title="$t('pyconIntro')"
            :is-bulleted="isBulleted"
            class="intro-h2 intro-milestones-title"
        >
        </core-h2>
        <div class="intro-milestones">
            <intro-milestone
                v-for="(item, index) in $t('milestone')"
                :key="`milestone_${index}`"
                :achievement="item.achievement"
                :achievement-number="item.achievementNumber"
                :achievement-unit="item.achievementUnit"
            >
            </intro-milestone>
        </div>
    </div>
</template>

<script>
import i18n from './Intro.i18n'
import IntroMilestone from './IntroMilestone'
import CoreH2 from '~/components/core/titles/H2'

export default {
    i18n,
    name: 'Intro',
    components: {
        IntroMilestone,
        CoreH2,
    },
    props: {
        isBulleted: {
            type: Boolean,
            default: true,
        },
        isShowingApacIntro: {
            type: Boolean,
            default: true,
        },
    },
}
</script>

<style lang="postcss" scoped>
.intro {
    @apply relative mx-auto my-0 px-0 py-4 font-serif md:py-0;
}

.intro-milestones {
    @apply flex flex-col;
    @apply md:grid md:grid-cols-3;
}

.description-wrapper {
    @apply mb-0 flex flex-col md:mb-28 md:flex-row;
}

.description-wrapper > div {
    @apply mb-24 flex-1 md:mb-0;
}

.description-wrapper > div > * {
    @apply pb-7 md:pb-0;
}

.info-section-description {
    @apply mx-auto my-0 pl-0 md:pl-14;
    @apply text-justify;
}

.intro-h2 {
    @apply mx-auto justify-center md:justify-start;
}

.intro-milestones-title {
    @apply mb-14 md:mb-7;
}
</style>
