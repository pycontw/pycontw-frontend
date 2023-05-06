<template>
    <div class="text-center font-serif font-bold">
        <p class="text-2xl md:text-[1.2rem]">
            {{ achievement }}
        </p>
        <p class="milestone__number">
            {{ achievementNumber }}
        </p>
        <p class="mb-2 text-2xl md:mb-12 md:text-[1.2rem]">
            {{ achievementUnit }}
        </p>
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
.milestone__number {
    background: linear-gradient(
        302.44deg,
        #8be1c2 0.18%,
        #5b69e2 43.9%,
        #a764c9 53.21%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 5.4rem;
    filter: drop-shadow(4px 6px 0px #4f4f4f);
    @media (max-width: 833px) {
        font-size: 4.8rem;
    }
}
</style>
