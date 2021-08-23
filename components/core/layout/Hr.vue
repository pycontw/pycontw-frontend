<template>
    <div :class="classObject"></div>
</template>

<script>
export default {
    name: 'CoreHr',
    props: {
        customColor: {
            type: Boolean,
            default: false,
        },
        customMarginY: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        classObject() {
            return {
                hr: true,
                'mx-auto': true,
                'my-8': !this.customMarginY,
                defaultColor: !this.customColor,
            }
        },
    },
}
</script>

<style scoped>
.hr {
    width: 100%;
    border: 1px solid;
}
.defaultColor {
    color: #868686;
}
</style>
