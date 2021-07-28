<template>
    <div class="py-10 md:py-24 lg:py24">
        <banner>
            <template #default>
                <div
                    class="hidden md:block lg:block md:w-full lg:w-full md:h-full lg:h-full"
                    :style="bannerStyle"
                ></div>
            </template>
            <template #text>
                <core-h1 :title="$t('title')"></core-h1>
                <p class="w-full md:w-3/4 lg:w-3/4 leading-6">
                    {{ $t('pageAbstract') }}
                </p>
            </template>
        </banner>
        <I18nPageWrapper class="pt-8 px-8 md:px-57 lg:px-56">
            <div class="section">
                <core-h1 :title="$t('tutorialsHeader')"></core-h1>
                <p
                    class="paragraph-title font-bold text-base md:text-lg lg:text-lg"
                >
                    {{ $t('stepOne') }}
                </p>
                <p class="paragraph-content">
                    {{ $t('stepOneDescription') }}
                </p>
                <br />
                <p class="bold-title">
                    {{ $t('registerAction.action') }}
                </p>
                <p class="paragraph-content">
                    {{ $t('registerAction.note') }}
                </p>
                <br />
                <p class="bold-title">
                    {{ $t('helpAction.action') }}
                </p>
                <p class="paragraph-content">
                    {{ $t('helpAction.note') }}
                </p>
                <br />
                <p class="paragraph-content">
                    {{ $t('stepOneNote') }}
                </p>
                <p
                    class="paragraph-title font-bold text-base md:text-lg lg:text-lg"
                >
                    {{ $t('stepTwo') }}
                </p>
                <p
                    v-for="(content, i) in $t('stepTwoDescription')"
                    :key="`step-two-description-${i}`"
                    class="paragraph-content"
                >
                    {{ content }}
                </p>
                <p
                    class="paragraph-title font-bold text-base md:text-lg lg:text-lg"
                >
                    {{ $t('stepThree') }}
                </p>
                <p class="paragraph-content">
                    {{ $t('stepThreeDescription')[0] }}
                </p>
                <i18n path="stepThreeDescription[1]" tag="p">
                    <template #keynoteTime
                        ><span class="underline highlight">{{
                            $t('keynoteTime')
                        }}</span></template
                    >
                    <template #participateTrack
                        ><span class="underline highlight">{{
                            $t('participateTrack')
                        }}</span>
                    </template>
                </i18n>
            </div>
            <div class="section">
                <core-h1 :title="$t('roleListHeader')"></core-h1>
                <p class="paragraph-content">{{ $t('roleListDescription') }}</p>
                <div v-for="role in $t('roleList')" :key="role.name">
                    <p
                        class="paragraph-title font-bold text-base md:text-lg lg:text-lg"
                    >
                        {{ role.name }}
                    </p>
                    <p class="paragraph-content">{{ role.description }}</p>
                </div>
            </div>
            <div class="section">
                <core-h1 :title="$t('channelListHeader')"></core-h1>
                <div
                    v-for="channelGroup in $t('channelGroup')"
                    :key="channelGroup.type"
                >
                    <p
                        class="paragraph-title font-bold text-base md:text-lg lg:text-lg"
                    >
                        {{ channelGroup.type }}
                    </p>
                    <div
                        v-for="channel in channelGroup.channels"
                        :key="channel.name"
                        class="mb-3"
                    >
                        <p class="bold-title">{{ channel.name }}</p>
                        <p class="paragraph-content">
                            {{ $t('role') }}
                            <span class="underline highlight">
                                {{ channel.role }}
                            </span>
                        </p>
                        <p class="paragraph-content">
                            {{ channel.description }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="section">
                <core-h1 :title="$t('appendix')"></core-h1>
                <p class="paragraph-title">
                    {{ $t('appendixStep1.title') }}
                </p>
                <i18n path="appendixStep1.content" tag="p">
                    <template #link>
                        <ext-link
                            href="https://discord.com/download"
                            highlight
                            underline
                            >{{ $t('appendixStep1.linkText') }}</ext-link
                        >
                    </template>
                </i18n>
                <p class="paragraph-title">
                    {{ $t('appendixStep2.title') }}
                </p>
                <p class="paragraph-content">
                    {{ $t('appendixStep2.content') }}
                </p>
                <img :src="discordIntro0" class="mt-3 mx-auto w-3/4" alt="" />
                <p class="paragraph-title">
                    {{ $t('appendixStep3.title') }}
                </p>
                <p class="paragraph-content">
                    {{ $t('appendixStep3.content[0]') }}
                    <ext-link href="https://discord.gg/94hgCQv"
                        >https://discord.gg/94hgCQv</ext-link
                    >
                </p>
                <p class="paragraph-content">
                    {{ $t('appendixStep3.content[1]') }}
                </p>
                <img :src="discordIntro1" class="my-3 mx-auto w-3/4" alt="" />
                <p class="paragraph-content">
                    {{ $t('appendixStep3.content[2]') }}
                </p>
                <img :src="discordIntro2" class="my-3 mx-auto w-3/4" alt="" />
            </div>
        </I18nPageWrapper>
    </div>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import i18n from '@/i18n/ext/discord.i18n'
import AboutBanner from '@/static/img/about/Banner.svg'
import Banner from '@/components/core/layout/Banner'
import CoreH1 from '@/components/core/titles/H1'
import ExtLink from '@/components/core/links/ExtLink.vue'
import discordIntro0 from '@/static/img/ext/discord-0.jpeg'
import discordIntro1 from '@/static/img/ext/discord-1.png'
import discordIntro2 from '@/static/img/ext/discord-2.png'

export default {
    i18n,
    name: 'PageCodeOfConduct',
    components: {
        I18nPageWrapper,
        CoreH1,
        Banner,
        ExtLink,
    },
    data() {
        return {
            aboutBanner: AboutBanner,
            discordIntro0,
            discordIntro1,
            discordIntro2,
        }
    },
    computed: {
        bannerStyle() {
            return {
                'background-image': `url(${this.aboutBanner})`,
                'background-repeat': 'no-repeat',
                'background-position': 'center',
            }
        },
    },
    methods: {
        getImgStyle(img) {
            return {
                'background-image': `url(${img})`,
            }
        },
    },
    head() {
        return {
            title: this.$i18n.t('title'),
            meta: [
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: this.$i18n.t('og.title'),
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: this.$i18n.t('og.description'),
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: this.$i18n.t('og.description'),
                },
            ],
        }
    },
}
</script>

<style scoped>
.paragraph-title {
    @apply font-serif font-bold mt-10;
    color: #c2a53a;
}
.paragraph-content {
    @apply text-xs md:text-base lg:text-base m-0;
}
.bold-title {
    @apply text-xs md:text-base lg:text-base mb-0 font-bold;
}
.highlight {
    color: #c2a53a;
}
.section {
    @apply mb-11;
}
</style>
