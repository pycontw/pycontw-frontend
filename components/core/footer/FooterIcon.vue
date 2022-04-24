<template>
    <div class="core-footer">
        <ext-link
            v-for="(icon, index) in iconArray"
            :key="`icon_${index}`"
            :href="icon.link"
            class="core-footerLink"
        >
            <img :src="icon.src" :alt="icon.altName" class="core-footerIcon" />
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
                    src: require('~/static/img/footer/Blog.svg'),
                    link: 'https://pycontw.blogspot.tw/',
                    altName: 'Blog Footer Icon',
                },
                {
                    src: require('~/static/img/footer/Facebook.svg'),
                    link: 'https://www.facebook.com/pycontw',
                    altName: 'Facebook Footer Icon',
                },
                {
                    src: require('~/static/img/footer/Telegram.svg'),
                    link: 'https://t.me/pycontw_chat',
                    altName: 'Telegram Footer Icon',
                },
                {
                    src: require('~/static/img/footer/Twitter.svg'),
                    link: 'https://twitter.com/pycontw',
                    altName: 'Twitter Footer Icon',
                },
                {
                    src: require('~/static/img/footer/Email.svg'),
                    link: 'mailto:organizers@python.tw',
                    altName: 'Email Footer Icon',
                },
                {
                    src: require('~/static/img/footer/Youtube.svg'),
                    link: 'https://www.youtube.com/channel/UCHLnNgRnfGYDzPCCH8qGbQw',
                    altName: 'Youtube Footer Icon',
                },
                {
                    src: require('~/static/img/footer/Discord.svg'),
                    link: 'https://discord.com/invite/94hgCQv',
                    altName: 'Discord Footer Icon',
                },
            ],
        }
    },
}
</script>

<style lang="postcss" scoped>
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

@media (min-width: 768px) {
    .core-footerIcon {
        width: 33px;
        height: 33px;
    }
}
</style>
