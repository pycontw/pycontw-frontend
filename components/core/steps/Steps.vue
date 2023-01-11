<template>
    <div :class="{ ['mt-6']: !showStepLine }">
        <div
            v-if="showStepLine"
            class="
                h-[26px]
                ml-[50px]
                border-l-[1.5px] border-dashed border-[#5FAAE0]
            "
        ></div>
        <div class="step-layout grid gap-[30px]">
            <div
                class="
                    rounded-full
                    w-[100px]
                    h-[100px]
                    text-[16px]
                    flex
                    justify-center
                    items-center
                    border-[1.5px] border-solid border-[#5FAAE0]
                "
            >
                <div class="font-semibold text-center leading-[20px] w-[65px]">
                    <slot name="title"></slot>
                </div>
            </div>
            <div
                class="
                    h-full
                    flex
                    items-center
                    leading-[28px]
                    lg:leading-6
                    my-auto;
                "
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
