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
@media (min-width: 600px) {
    .two-col-layout {
        grid-template-columns: 3fr 8fr;
    }

    .left-col {
        justify-self: center;
    }

    .right-col {
        font-size: 18px;
        line-height: 30.5px;
    }
}
@media (max-width: 600px) {
    .left-col {
        justify-self: start;
        margin-bottom: 10px;
        font-size: 18px;
    }

    .right-col {
        font-size: 14px;
        line-height: 23px;
    }
}
.two-col-layout {
    display: grid;
    margin: 20px auto;
}
.left-col {
    color: #9387ff;
}
.right-col {
    width: 100%;
    justify-self: start;
    color: #c7c7c7;
}
</style>
