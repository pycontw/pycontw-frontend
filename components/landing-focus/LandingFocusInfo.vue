<template>
    <div class="landingFocusInfo flex flex-col items-center font-serif">
        <div class="landingFocusInfo__temporal">8/21</div>
        <div class="landingFocusInfo__till"></div>
        <div class="landingFocusInfo__temporal">8/22</div>
        <div class="landingFocusInfo__locale mt-4">NTU</div>
    </div>
</template>

<script>
export default {
    name: 'LandingFocusInfo',
}
</script>

<style scoped>
.landingFocusInfo__till {
    @apply h-5 my-2;
    border-left: 2px solid #c2a53a;
}

.landingFocusInfo__temporal {
    @apply inline-flex w-12 h-12 p-2 justify-center items-center rounded-full border;
    border: 4px solid #c2a53a;
}
</style>
