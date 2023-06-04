<template>
    <div class="flex w-full flex-wrap items-center justify-center">
        <ext-link
            v-for="(item, index) in dataConfig"
            :key="`landing-footer-icon-${index}`"
            :href="item.link"
            class="mx-4 my-4"
        >
            <img
                class="landing-footer-icon hover:inset-1 hover:brightness-0 md:h-[33px] md:w-[33px]"
                :src="require(`~/static/img/footer/${item.icon}`)"
                :alt="item.altName"
            />
        </ext-link>
        <svg class="hidden">
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
        </svg>
    </div>
</template>

<script>
import { landingFooterSocialConfig } from '@/configs/pageLanding'
import ExtLink from '@/components/core/links/ExtLink'

export default {
    name: 'CoreFooterSocial',
    components: {
        ExtLink,
    },
    data() {
        return {
            dataConfig: landingFooterSocialConfig,
        }
    },
}
</script>

<style lang="postcss" scoped>
/* Not support in Tailwind currently */
.landing-footer-icon:hover {
    filter: url(#hover-color);
}
</style>
