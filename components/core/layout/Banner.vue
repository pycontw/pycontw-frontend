<template>
    <div class="flex font-serif font-semibold w-full flex-1">
        <div class="image hidden md:block w-full md:w-3/6 md:h-64">
            <slot></slot>
        </div>
        <div
            class="
                flex flex-col
                items-start
                mx-8
                w-full
                text-xs
                md:w-3/6 md:text-base
            "
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

<style scoped></style>
