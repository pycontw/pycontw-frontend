<template>
    <div class="intro">
        <img
            class="big-circle"
            src="~@/static/page-home-intro-bigcircle.svg"
            alt="big-circle"
        />
        <img
            class="curve"
            src="~@/static/page-home-intro-curve.svg"
            alt="curve"
        />
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
        <div class="intro-descriptions">
            <intro-description
                v-for="(item, index) in $t('description')"
                :key="`description_${index}`"
                :description="item"
            >
            </intro-description>
        </div>
        <img
            class="small-circle"
            src="~@/static/page-home-intro-smallcircle.svg"
            alt="small-circle"
        />
    </div>
</template>

<script>
import i18n from './Intro.i18n'
import IntroMilestone from './IntroMilestone'
import IntroDescription from './IntroDescription'
export default {
    i18n,
    name: 'Intro',
    components: {
        IntroMilestone,
        IntroDescription,
    },
}
</script>

<style scoped>
.intro {
    @apply relative font-serif;
}

.intro-milestones {
    @apply grid grid-cols-3;
    @media (max-width: 767px) {
        @apply flex flex-col;
    }
}

.intro-descriptions {
    @apply mx-40;
    @media (max-width: 1279px) {
        @apply mx-12;
    }
}

img.big-circle {
    position: absolute;
    right: 3rem;
    top: -8.5rem;
    @media (max-width: 767px) {
        zoom: 90%;
        right: 1rem;
        top: -2.5rem;
    }
}

img.small-circle {
    position: absolute;
    left: 1.2rem;
    top: 11rem;
    @media (max-width: 767px) {
        zoom: 90%;
        left: 1rem;
        top: 32.6rem;
    }
}

img.curve {
    display: none;
    @media (max-width: 767px) {
        position: absolute;
        display: block;
        left: 0rem;
        top: 12.5rem;
    }
}
</style>
