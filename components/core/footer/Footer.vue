<template>
    <div class="flex flex-col px-4 py-8 bg-orange-300">
        <div class="flex justify-center">
            <div class="flex flex-col mr-20">
                <NuxtLink to="/about/code-of-conduct">Code of Conduct</NuxtLink>
                <NuxtLink to="/about/staff">Staff</NuxtLink>
                <NuxtLink to="/about/community">Community</NuxtLink>
                <NuxtLink to="/about/privacy-policy">Privacy Policy</NuxtLink>
            </div>
            <div class="flex flex-col ml-20">
                <ExtLink href="https://pycontw.blogspot.tw/">Blogspot</ExtLink>
                <ExtLink href="https://www.facebook.com/pycontw">
                    Facebook
                </ExtLink>
                <ExtLink href="https://twitter.com/pycontw">Twitter</ExtLink>
                <a
                    href="mailto:organizers@pycon.tw"
                    target="_blank"
                    class="outline-none"
                >
                    Email
                </a>
            </div>
        </div>
        <div class="flex justify-center mt-16 text-2xl cursor-default">
            PyCon Taiwan
        </div>
    </div>
</template>

<script>
import ExtLink from '~/components/core/links/ExtLink'
export default {
    name: 'CoreFooter',
    components: {
        ExtLink,
    },
}
</script>

<style scoped></style>
