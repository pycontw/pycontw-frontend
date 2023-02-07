<template>
    <div class="two-col-layout grid my-4 lg:gap-6">
        <div class="justify-self-start mb-2 text-primary-500 text-[24px]">
            <slot></slot>
        </div>
        <div
            class="h-full leading-[28px] lg:leading-6 mt-auto mb-5 text-[18px]"
        >
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
.two-col-layout {
    @media (min-width: 1024px) {
        grid-template-columns: 1fr 5fr;
    }
}
</style>
