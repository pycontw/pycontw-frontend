<template>
    <div class="intro">
        <div class="description-wrapper">
            <div class="what-is-pyCon-wrapper">
                <core-h2
                    :title="$t('whatIsPyConAPAC')"
                    :is-bulleted="isBulleted"
                ></core-h2>
                <p class="info-section-description">
                    {{ $t('whatIsPyConAPACContent') }}
                </p>
            </div>
            <div class="pyCon-held-online-wrapper">
                <core-h2
                    :title="$t('pyConWillBeHeldOnline')"
                    :is-bulleted="isBulleted"
                ></core-h2>
                <p class="info-section-description">
                    {{ $t('pyConWillBeHeldOnlineContent') }}
                </p>
            </div>
        </div>
        <core-h2
            class="intro-milestones-title"
            :title="$t('pyconIntro')"
            :is-bulleted="isBulleted"
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
    },
}
</script>

<style lang="postcss" scoped>
.intro {
    @apply relative font-serif my-0 mx-auto;
    max-width: 1040px;
    @media (max-width: 767px) {
        @apply px-0 py-4;
    }
}

.intro-milestones {
    @apply grid grid-cols-3;
    @media (max-width: 767px) {
        @apply flex flex-col;
    }
}

.description-wrapper {
    @apply flex mb-28;
    @media (max-width: 767px) {
        @apply mb-0 flex-col;
    }
}

.description-wrapper > div {
    @apply flex-1;
    @media (max-width: 767px) {
        @apply mb-24;
    }
}

.description-wrapper > div > * {
    @media (max-width: 767px) {
        @apply pb-7;
    }
}

.info-section-description {
    @apply pl-14;
    @media (max-width: 767px) {
        @apply pl-0 my-0 mx-auto;
    }
}

.intro-milestones-title {
    @media (max-width: 767px) {
        @apply hidden;
    }
}
</style>
