<template>
    <div class="w-full flex justify-center items-center flex-wrap">
        <ext-link
            v-for="(item, index) in dataConfig"
            :key="`landing-footer-icon-${index}`"
            :href="item.link"
            class="mx-4 my-4"
        >
            <img
                :src="require(`~/static/img/footer/${item.icon}`)"
                :alt="item.altName"
                class="core-footerIcon"
            />
        </ext-link>
        <svg class="hidden">
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
.core-footerIcon:hover {
    filter: brightness(0) invert(1) url(#hover-color);
}

@media (min-width: 768px) {
    .core-footerIcon {
        width: 33px;
        height: 33px;
    }
}
</style>
