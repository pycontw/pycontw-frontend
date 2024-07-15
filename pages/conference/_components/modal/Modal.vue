<template>
    <div
        v-show="shouldShowModal"
        class="fixed left-0 top-0 z-[9998] flex h-screen w-full items-center justify-center bg-[rgba(18,16,35,0.6)] backdrop-blur-[5px]"
    >
        <div class="absolute z-[9999] h-full w-full" @click="close"></div>
        <div
            class="relative z-[10000] flex w-11/12 flex-col rounded-3xl border-3 border-pink-500 bg-black-900 px-4 py-5 md:w-4/5 md:max-w-2xl md:border-2 md:px-12 md:pb-6 md:pt-14"
        >
            <div
                class="absolute right-[17px] top-[17px] ml-auto flex cursor-pointer text-pink-500 md:right-[38.5px] md:top-[39.25px]"
                @click="close"
            >
                <fa icon="times" class="h-5 w-5" />
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        value: { type: Boolean, default: false },
    },
    data() {
        return {
            shouldShowModal: this.value,
        }
    },
    watch: {
        value(newVal) {
            this.shouldShowModal = newVal
        },
    },
    methods: {
        close() {
            this.shouldShowModal = false
            this.$emit('input', false)
        },
    },
}
</script>
