<template>
    <div class="two-col-layout my-4 grid lg:gap-6">
        <div class="mb-2 justify-self-start text-[24px] text-primary-500">
            <slot></slot>
        </div>
        <div
            class="mb-5 mt-auto h-full text-[18px] leading-[28px] lg:leading-6"
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
    @media (min-width: 1194px) {
        grid-template-columns: 1fr 5fr;
    }
}
</style>
