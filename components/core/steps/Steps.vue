<template>
    <div :class="{ ['mt-6']: !showStepLine }">
        <div
            v-if="showStepLine"
            class="ml-[50px] h-[26px] border-l-[1.5px] border-dashed border-[#5FAAE0]"
        ></div>
        <div class="step-layout grid gap-[30px]">
            <div
                class="flex h-[100px] w-[100px] items-center justify-center rounded-full border-[1.5px] border-solid border-[#5FAAE0] text-[16px]"
            >
                <div class="w-[65px] text-center font-semibold leading-[20px]">
                    <slot name="title"></slot>
                </div>
            </div>
            <div
                class="my-auto; flex h-full items-center leading-[28px] lg:leading-6"
            >
                <slot name="description"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Steps',
    props: {
        showStepLine: {
            type: Boolean,
            default: false,
        },
    },
}
</script>

<style lang="postcss" scpoed>
.step-layout {
    grid-template-columns: 1fr 5fr;
}
</style>
