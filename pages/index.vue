<template>
    <div>
        <div class="container">
            <div>
                <h1 class="text-6xl">PyCon Taiwan 2021 Coming Soon</h1>
            </div>
        </div>
        <h3>sponsor list</h3>
        <div
            v-for="(leveledSponsors, i) in sponsorsData"
            :key="`index_sponsor_level_${i}`"
        >
            <h2 class="text-2xl">{{ leveledSponsors.level_name }}</h2>
            <div
                v-for="(sponsor, j) in leveledSponsors.sponsors"
                :key="`index_sponsor_level_${i}_sponsor_${j}`"
                class="border-black"
            >
                <div>
                    Name:
                    <a :href="sponsor.website_url">{{ sponsor.name }}</a>
                </div>
                <div>Intro: {{ sponsor.intro }}</div>
                <img
                    :src="`https://5f43c00e6788.ngrok.io${sponsor.logo_url}`"
                    :width="40"
                    :height="30"
                    alt=""
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageIndex',
    async asyncData({ $axios }) {
        const { data: sponsorsData } = await $axios.$get('/api/sponsors')
        return {
            sponsorsData,
        }
    },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
        BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
        sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}
</style>
