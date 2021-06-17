<template>
    <div>
        <p class="achievement">{{ $t(achievement) }}</p>
        <p class="number">{{ $t(achievementNumber) }}</p>
        <p class="achievement text-2xl mb-2">
            {{ $t(achievementUnit) }}
        </p>
    </div>
</template>

<script>
export default {
    name: 'IntroMilestone',
    components: {},
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

<style scoped>
.number {
    color: #c2a53a;
    font-weight: 700;
    font-size: 5.4rem;
    filter: drop-shadow(4px 6px 0px #4f4f4f);
    @media (max-width: 767px) {
        font-size: 4.8rem;
    }
}

.achievement {
    @apply text-2xl;
    font-weight: 700;
    @media (max-width: 767px) {
        position: relative;
        bottom: -30px;
        font-size: 1.2rem;
    }
}

.achievement:last-child {
    @media (max-width: 767px) {
        top: -8px;
    }
}
</style>
