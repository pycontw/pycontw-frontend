<template>
    <div class="relative flex flex-col items-start cursor-default">
        <div @mouseenter="isHovering = true" @mouseleave="isHovering = false">
            {{ title }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'CoreHeaderNavBarItemDropdown',
    props: {
        title: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            isHovering: false,
        }
    },
    computed: {
        dropdownMenuClasses() {
            return {
                hidden: !this.isHovering,
            }
        },
    },
}
</script>

<style scoped></style>
