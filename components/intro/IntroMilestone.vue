<template>
    <div class="milestone">
        <p class="milestone__achievement">{{ achievement }}</p>
        <p class="milestone__number">{{ achievementNumber }}</p>
        <p class="milestone__unit">{{ achievementUnit }}</p>
    </div>
</template>

<script>
export default {
    name: 'IntroMilestone',
    props: {
        achievement: {
            type: String,
            default: '',
        },
        achievementNumber: {
            type: String,
            default: '',
        },
        achievementUnit: {
            type: String,
            default: '',
        },
    },
}
</script>

<style lang="postcss" scoped>
.milestone {
    @apply text-center font-bold font-serif;
}

.milestone__achievement,
.milestone__unit {
    @apply text-2xl;
    @media (max-width: 767px) {
        position: relative;
        bottom: -30px;
        font-size: 1.2rem;
    }
}

.milestone__number {
    background: linear-gradient(
        302.44deg,
        #8be1c2 0.18%,
        #5b69e2 43.9%,
        #a764c9 53.21%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 5.4rem;
    filter: drop-shadow(4px 6px 0px #4f4f4f);
    @media (max-width: 767px) {
        font-size: 4.8rem;
    }
}

.milestone__unit {
    @apply mb-2;
    @media (max-width: 767px) {
        top: -8px;
    }
}
</style>
