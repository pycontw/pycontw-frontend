<template>
    <div class="py-10 md:pb-24 lg:pb-24">
        <banner class="bg-center bg-no-repeat">
            <core-h1 :title="$t('title')"></core-h1>
            <p class="leading-6">
                {{ $t('pageAbstract') }}
            </p>
        </banner>
        <div class="mx-2 my-3 flex flex-wrap justify-center">
            <div v-for="(img, i) in introImgs" :key="`intro_img_${i}`">
                <div
                    class="mx-2 my-3 h-24 w-32 rounded-lg bg-contain bg-cover bg-no-repeat md:mx-5 md:h-40 md:w-56"
                    :style="getImgStyle(img)"
                ></div>
            </div>
        </div>
        <I18nPageWrapper class="pt-0 md:pt-20">
            <div class="m-auto flex w-full flex-col">
                <div v-for="(rule, i) in $t('contents')" :key="`coc-rule-${i}`">
                    <p class="paragraph-title text-base md:text-lg lg:text-lg">
                        {{ rule.title }}
                    </p>
                    <p
                        v-for="(
                            description, descriptionsIndex
                        ) in rule.descriptions"
                        :key="
                            'coc-description-' +
                            descriptionsIndex +
                            '-' +
                            description
                        "
                        class="text-xs leading-5 md:text-base md:leading-8"
                    >
                        {{ description }}
                    </p>
                    <!-- 三大準則圖片 -->
                    <!-- i == 0 是抓取三大準則的圖片 -->
                    <div
                        v-if="i == 0"
                        class="relative mx-2 my-1 flex justify-between sm:justify-around"
                    >
                        <div v-for="(img, j) in sub1" :key="`sub_img_${j}`">
                            <div
                                class="mx-2 my-10 flex h-36 w-16 justify-center bg-contain bg-no-repeat sm:my-5 sm:h-40 sm:w-20 md:mx-5"
                                :style="getSub1Style(img)"
                            >
                                <span class="img_text">
                                    {{ rule.list[j] }}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        v-for="(subtitle, subtitleIndex) in rule.subtitle"
                        :key="`coc-description-${subtitleIndex}`"
                    >
                        <div>
                            <two-col-wrapper>
                                <template #default>
                                    <h2>{{ subtitle.title }}</h2>
                                </template>
                                <template #right-col>
                                    <i18n
                                        v-for="(
                                            _, subtitleDescriptionIndex
                                        ) in subtitle.descriptions"
                                        :key="`coc.${i}.subtitle.${subtitleIndex}.descriptions.${subtitleDescriptionIndex}`"
                                        :path="`contents.${i}.subtitle.${subtitleIndex}.descriptions.${subtitleDescriptionIndex}`"
                                        tag="p"
                                    >
                                        <template #reportingEmail>
                                            <ext-link
                                                href="mailto:report@python.tw"
                                                highlight
                                            >
                                                report@python.tw
                                            </ext-link>
                                        </template>
                                        <template #process>
                                            <ext-link
                                                href="https://github.com/python/pycon-code-of-conduct/blob/master/Attendee%20Procedure%20for%20incident%20handling.md"
                                                highlight
                                            >
                                                {{ $t('terms.process') }}
                                            </ext-link>
                                        </template>
                                        <template #cococo>
                                            <ext-link
                                                href="https://volunteer.coscup.org/coc"
                                                highlight
                                            >
                                                {{ $t('terms.cococo') }}
                                            </ext-link>
                                        </template>
                                        <template #pyconUsCoc>
                                            <ext-link
                                                href="https://policies.python.org/us.pycon.org/code-of-conduct/"
                                                highlight
                                            >
                                                {{ $t('terms.pyconUsCoc') }}
                                            </ext-link>
                                        </template>
                                    </i18n>
                                    <ol
                                        v-if="subtitle && subtitle.list"
                                        class="ml-4"
                                        :class="{
                                            'list-decimal':
                                                subtitle.list.length > 1,
                                            'list-disc':
                                                subtitle.list.length === 1,
                                        }"
                                    >
                                        <li
                                            v-for="(
                                                li, liIndex
                                            ) in subtitle.list"
                                            :key="`coc-list-${liIndex}`"
                                        >
                                            {{ li }}
                                        </li>
                                    </ol>
                                    <i18n
                                        v-for="(
                                            _, subtitleEndingIndex
                                        ) in subtitle.endings"
                                        :key="`coc.${i}.subtitle.${subtitleIndex}.endings.${subtitleEndingIndex}`"
                                        :path="`contents.${i}.subtitle.${subtitleIndex}.endings.${subtitleEndingIndex}`"
                                        class="pt-2"
                                        tag="p"
                                    >
                                    </i18n>
                                </template>
                            </two-col-wrapper>
                            <!-- 處理流程圖片 -->
                            <!-- 如果是`處理流程`或是`Procedure`，才會引入圖片，避免重複引入圖片 -->
                            <div
                                v-if="
                                    [`處置方案`, `Procedure`].includes(
                                        subtitle.title,
                                    )
                                "
                                class="mx-2 my-2 flex flex-wrap justify-center"
                            >
                                <div
                                    class="sub1_img"
                                    :style="getSub2Style(sub2Imgs[0])"
                                ></div>
                                <div
                                    class="sub2_img"
                                    :style="getSub2Style(sub2Imgs[1])"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="authorization">
                    <div>
                        <i18n
                            path="authorization.title"
                            tag="h2"
                            class="authorizationTitle"
                        >
                        </i18n>
                    </div>
                    <div>
                        <i18n
                            path="authorization.description"
                            tag="p"
                            class="authorizationDescription"
                        >
                            <template #br><br /></template>
                            <template #license>
                                <ext-link
                                    href="https://creativecommons.org/licenses/by-sa/3.0/tw/deed.zh_TW"
                                    highlight
                                    >{{ $t(`terms.license`) }}
                                </ext-link>
                            </template>
                        </i18n>
                    </div>
                    <div>
                        <img
                            :src="authorizationIcon"
                            class="authorizationLabel"
                        />
                    </div>
                    <i18n
                        path="authorization.content"
                        tag="p"
                        class="authorizationContent"
                    >
                        <template #br><br /></template>
                    </i18n>
                </div>
            </div>
        </I18nPageWrapper>
    </div>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import i18n from '@/i18n/about/code-of-conduct.i18n'
import AboutBanner from '@/static/img/about/Banner.svg'
import Banner from '@/components/core/layout/Banner'
import CoreH1 from '@/components/core/titles/H1'
import ExtLink from '@/components/core/links/ExtLink.vue'
import IntroImg1 from '@/static/img/about/code-of-conduct/Intro-1.png'
import IntroImg2 from '@/static/img/about/code-of-conduct/Intro-2.png'
import IntroImg3 from '@/static/img/about/code-of-conduct/Intro-3.png'
import Icon1 from '@/static/img/about/code-of-conduct/Icon-1.svg'
import Icon2 from '@/static/img/about/code-of-conduct/Icon-2.svg'
import Icon3 from '@/static/img/about/code-of-conduct/Icon-3.svg'
import ProcedureZh from '@/static/img/about/code-of-conduct/procedure-zh.svg'
import ProcedureZhRwd from '@/static/img/about/code-of-conduct/procedure-zh-rwd.svg'
import ProcedureEn from '@/static/img/about/code-of-conduct/procedure-en.svg'
import ProcedureEnRwd from '@/static/img/about/code-of-conduct/procedure-en-rwd.svg'
import TwoColWrapper from '@/components/core/layout/TwoColWrapper'

export default {
    i18n,
    name: 'PageCodeOfConduct',
    components: {
        I18nPageWrapper,
        CoreH1,
        Banner,
        ExtLink,
        TwoColWrapper,
    },
    data() {
        return {
            aboutBanner: AboutBanner,
            introImgs: [IntroImg1, IntroImg2, IntroImg3],
            sub1: [Icon1, Icon2, Icon3],
            sub2_zh: [ProcedureZh, ProcedureZhRwd],
            sub2_en: [ProcedureEn, ProcedureEnRwd],
            authorizationIcon: require('~/static/img/footer/ccby-sa3_0.svg'),
        }
    },
    computed: {
        bannerStyle() {
            return {
                'background-image': `url(${this.aboutBanner})`,
            }
        },
        sub2Imgs() {
            if (this.$i18n.locale === 'zh-hant') {
                return this.sub2_zh
            } else {
                return this.sub2_en
            }
        },
    },
    methods: {
        getImgStyle(img) {
            return {
                'background-image': `url(${img})`,
            }
        },
        getSub1Style(img) {
            return {
                'background-image': `url(${img})`,
            }
        },
        getSub2Style(img) {
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
                    content: this.$i18n.t('title'),
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: this.$i18n.t('pageAbstract'),
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: this.$i18n.t('pageAbstract'),
                },
            ],
        }
    },
}
</script>

<style scoped>
.paragraph-title {
    @apply mb-8 mt-8 text-left text-center font-serif text-2xl font-bold text-pink-700;
}

@media (min-width: 768px) {
    .paragraph-title {
        @apply text-3xl;
    }
}

.img_text {
    @apply absolute mt-24 whitespace-nowrap text-center text-sm;
}

@media (max-width: 640px) {
    .img_text {
        @apply sm:mt-20;
    }
}

@media (max-width: 768px) {
    .img_text {
        @apply whitespace-normal text-xs;
    }
}

.sub1_img {
    @apply mx-2 my-3 h-96 w-full bg-contain bg-no-repeat md:mx-5 md:h-96;
}

.sub2_img {
    @apply mx-2 my-2 hidden bg-center bg-no-repeat md:mx-5;
    width: 30rem;
    height: 40rem;
}

@media (max-width: 640px) {
    .sub1_img {
        @apply hidden;
    }

    .sub2_img {
        @apply -ml-6 -mr-6 flex;
    }
}

.authorization {
    @apply text-center;
}
.authorizationTitle {
    @apply mt-9 text-center font-serif text-base font-bold text-pink-700 md:mt-20 md:text-left md:text-xl;
    @apply text-center;
}
.authorizationDescription {
    @apply text-center text-xs md:text-sm;
}
.authorizationLabel {
    @apply m-auto w-64 md:w-80;
}
.authorizationContent {
    @apply text-center text-xs md:text-sm;
}
</style>
