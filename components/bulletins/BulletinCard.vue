<template>
    <div
        v-show="showBulletin"
        class="
            relative
            flex flex-col
            justify-center
            items-center
            rounded-xl
            w-48
            h-64
            bg-[#1f1c3b]
            border-[1px] border-solid border-transparent
            text-[#a9a6d9]
            hover:cursor-pointer
            hover:bg-[#352d66]
            hover:border-[#746bb8]
            hover:text-[#f0ebf5]
            hover:shadow-[0_0_10px_10px_#352d66]
        "
        @click="onClick"
    >
        <div class="mt-[230%] xs:mt-[170%]"></div>
        <img
            class="absolute transform scale-90 md:scale-100 top-[12.5%]"
            :src="require(`~/static/img/bulletins/${icon}`)"
        />
        <div class="absolute top-[30%]">
            <h2
                class="
                    font-serif
                    text-base text-center
                    mt-6
                    mb-5
                    font-bold
                    xs:text-xl xs:mt-8 xs:mb-5
                "
            >
                {{ title }}
            </h2>
            <p class="px-5 pb-6 text-[0.6rem] xs:text-[0.8rem]">
                {{ description }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BulletinCard',
    components: {},
    props: {
        title: {
            type: String,
            default: '',
        },
        description: {
            type: String,
            default: '',
        },
        link: {
            type: String,
            default: '',
        },
        isExternalLink: {
            type: Boolean,
            default: false,
        },
        icon: {
            type: String,
            default: '',
        },
        showBulletin: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        onClick() {
            const { isExternalLink, link } = this.$props
            if (isExternalLink) {
                window.open(link, '_blank')
            } else {
                this.$router.push(link)
            }
        },
    },
}
</script>
