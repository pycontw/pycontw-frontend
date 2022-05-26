<template>
    <svg
        class="core-iconHamburgerMenuIcon"
        width="20"
        height="17"
        viewBox="0 0 20 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <line
            x1="1.25"
            y1="1.75"
            x2="18.75"
            y2="1.75"
            stroke-width="2.5"
            stroke-linecap="round"
        />
        <line
            x1="1.25"
            y1="8.75"
            x2="18.75"
            y2="8.75"
            stroke-width="2.5"
            stroke-linecap="round"
        />
        <line
            x1="1.25"
            y1="15.75"
            x2="18.75"
            y2="15.75"
            stroke-width="2.5"
            stroke-linecap="round"
        />
    </svg>
</template>

<script>
export default {
    name: 'HamburgerMenuIcon',
}
</script>

<style scoped>
.core-iconHamburgerMenuIcon {
    @apply stroke-prim-100;
}
</style>
