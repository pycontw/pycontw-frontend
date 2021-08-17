<template>
    <div class="two-col-layout">
        <div
            class="
                left-col
                mb-2
                justify-self-start
                text-sm
                md:justify-self-center md:mb-0 md:text-lg
            "
        >
            <slot></slot>
        </div>
        <div class="right-col leading-4 text-xs md:text-sm md:leading-6">
            <slot name="right-col"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TwoColWrapper',
}
</script>

<style scpoed>
@media (min-width: 640px) {
    .two-col-layout {
        grid-template-columns: 3fr 8fr;
    }
}
.two-col-layout {
    @apply grid my-4;
}
.left-col {
    color: #9387ff;
}
.right-col {
    color: #c7c7c7;
}
</style>
