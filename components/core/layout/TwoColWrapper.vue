<template>
    <div class="two-col-layout">
        <div class="left-col">
            <slot></slot>
        </div>
        <div class="right-col">
            <slot name="right-col"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TwoColWrapper',
}
</script>

<style lang="postcss" scpoed>
@media (min-width: 640px) {
    .two-col-layout {
        grid-template-columns: 3fr 8fr;
    }
}
.two-col-layout {
    @apply grid my-4;
}
.left-col {
    @apply justify-self-start md:justify-self-center mb-2 md:my-auto;
    color: #9387ff;
    font-size: 20px;
    @media (min-width: 640px) {
        font-size: 24px;
    }
}
.right-col {
    @apply leading-4 md:leading-6 my-auto;
    color: #c7c7c7;
    font-size: 16px;
    line-height: 28px;
    @media (min-width: 640px) {
        font-size: 18px;
    }
}
</style>
