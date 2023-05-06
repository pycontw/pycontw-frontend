<template>
    <div
        v-show="showBulletin"
        class="relative flex h-64 w-48 flex-col items-center justify-center rounded-xl border-[1px] border-solid border-transparent bg-[#1f1c3b] text-[#a9a6d9] hover:cursor-pointer hover:border-[#746bb8] hover:bg-[#352d66] hover:text-[#f0ebf5] hover:shadow-[0_0_10px_10px_#352d66]"
        @click="onClick"
    >
        <div class="mt-[230%] xs:mt-[170%]"></div>
        <img
            class="absolute top-[12.5%] scale-90 transform md:scale-100"
            :src="require(`~/static/img/bulletins/${icon}`)"
        />
        <div class="absolute top-[30%]">
            <h2
                class="mb-5 mt-6 text-center font-serif text-base font-bold xs:mb-5 xs:mt-8 xs:text-xl"
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
