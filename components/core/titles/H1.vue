<template>
    <div class="h1-wrapper">
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
export default {
    name: 'CoreH1',
    props: {
        title: String,
        required: () => true,
    },
}
</script>
<style scoped>
.h1-wrapper {
    display: flex;
    justify-content: center;
}
h1 {
    font-family: Noto Serif, Source Sans Pro;
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 41px;
    letter-spacing: 4px;
    color: #f3cc39;
    padding: 9px 0px;
    border-bottom: 8px solid #f3cc39;
}
</style>
