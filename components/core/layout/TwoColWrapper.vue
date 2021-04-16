<template>
    <div class="two-col-layout">
        <div class="left-col">
            <slot></slot>
        </div>
        <div class="right-col">
            <slot name="right-col"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TwoColWrapper',
}
</script>

<style scpoed>
.two-col-layout {
    display: grid;
    grid-template-columns: 3fr 8fr;
    margin: 20px auto;
}

.left-col {
    color: #9387ff;
    justify-self: center;
}

.right-col {
    width: 100%;
    justify-self: start;
    font-size: 18px;
    line-height: 23px;
    color: #c7c7c7;
}
</style>
