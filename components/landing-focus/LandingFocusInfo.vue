<template>
    <div class="landingFocusInfo flex flex-col items-center font-serif">
        <div class="landingFocusInfo__temporal">10/2</div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            width="4"
            viewBox="0 0 4 32"
            class="my-2"
        >
            <line
                x1="2"
                y1="2"
                x2="2"
                y2="38"
                stroke="#8c83f5"
                stroke-width="2"
                stroke-dasharray="2 5 3 5 3 5 3 5 2"
                stroke-linecap="round"
            ></line>
        </svg>
        <div class="landingFocusInfo__temporal">10/3</div>
    </div>
</template>

<script>
export default {
    name: 'LandingFocusInfo',
}
</script>

<style scoped>
.landingFocusInfo__temporal {
    @apply inline-flex w-12 h-12 p-2 justify-center items-center rounded-full border;
    border: 4px solid #c2a53a;
}
</style>
