<template>
    <div class="flex font-serif font-semibold w-full flex-1">
        <div
            class="image hidden md:block lg:block w-full md:w-3/6 lg:w-3/6 md:h-64 lg:h-64"
        >
            <slot></slot>
        </div>
        <div
            class="flex flex-col items-start mx-8 w-full md:w-3/6 lg:w-3/6 text-xs md:text-base lg:text-base"
        >
            <slot name="text"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Banner',
}
</script>

<style scpoed></style>
