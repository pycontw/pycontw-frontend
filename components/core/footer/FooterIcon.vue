<template>
    <div class="core-footer">
        <ext-link
            v-for="(icon, index) in iconArray"
            :key="`icon_${index}`"
            :href="icon.link"
            class="core-footerLink"
        >
            <img :src="icon.src" alt="Footer Icon" class="core-footerIcon" />
        </ext-link>
        <svg class="svg-filter">
            <defs>
                <filter id="hover-color">
                    <feColorMatrix
                        color-interpolation-filters="sRGB"
                        type="matrix"
                        values="0.46 0   0   0   0
                                0   0.41  0   0   0
                                0   0   0.96  0   0
                                0   0   0   1   0 "
                    />
                </filter>
            </defs>
        </svg>
    </div>
</template>

<script>
import ExtLink from '@/components/core/links/ExtLink'

export default {
    name: 'CoreFooterIcon',
    components: {
        ExtLink,
    },
    data() {
        return {
            iconArray: [
                {
                    src: '/img/footer/Blog.svg',
                    link: 'https://pycontw.blogspot.tw/',
                },
                {
                    src: '/img/footer/Facebook.svg',
                    link: 'https://www.facebook.com/pycontw',
                },
                {
                    src: '/img/footer/Telegram.svg',
                    link: 'https://t.me/pycontw_chat',
                },
                {
                    src: '/img/footer/Twitter.svg',
                    link: 'https://twitter.com/pycontw',
                },
                {
                    src: '/img/footer/Email.svg',
                    link: 'mailto:organizers@pycon.tw',
                },
                {
                    src: '/img/footer/Youtube.svg',
                    link: 'https://www.youtube.com/PyConTaiwan',
                },
                {
                    src: '/img/footer/Discord.svg',
                    link: 'https://discord.com/invite/94hgCQv',
                },
            ],
        }
    },
}
</script>

<style scoped>
.core-footer {
    @apply w-full flex justify-center items-center flex-wrap;
}

.core-footerLink {
    @apply mx-4 my-4;
}

.core-footerIcon:hover {
    filter: brightness(0) invert(1) url(#hover-color);
}

.svg-filter {
    @apply hidden;
}

@media (max-width: 767px) {
    .core-footerIcon {
        width: 28px;
        height: 28px;
    }
}
</style>
