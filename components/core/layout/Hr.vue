<template>
    <div
        class="hr"
        :style="{
            margin: `${marginVertical}px auto`,
            borderColor: color,
        }"
    ></div>
</template>

<script>
export default {
    name: 'CoreHr',
    props: {
        color: {
            type: String,
            default: '#868686',
        },
        marginVertical: {
            type: Number,
            default: 40,
        },
    },
}
</script>

<style scoped>
.hr {
    width: 100%;
    border: 1px solid;
}
</style>
