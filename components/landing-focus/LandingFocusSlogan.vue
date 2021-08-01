<template>
    <div class="flex items-center">
        <div class="my-4 mr-6 md:mr-8">
            <img
                class="slogan-img"
                src="~/static/page-home-slogan-code.svg"
                alt="Slogan of PyConTW 2021"
            />
        </div>
        <div class="w-10 md:w-16 lg:w-20">
            <img
                src="~/static/page-home-slogan.png"
                alt="Homepage icon of PyConTW 2021"
                class="object-contain"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'LandingFocusSlogan',
}
</script>

<style scoped>
.slogan-img {
    width: 100%;
}
</style>
