<!-- eslint-disable vue/no-v-html -->
<template>
    <div class="poster-session">
        <banner>
            <core-h1 :title="$t('title')"></core-h1>
            <i18n path="intro" tag="p" class="intro">
                <template #br><br /></template>
            </i18n>
        </banner>
        <i18n-page-wrapper class="px-2 sm:px-8 md:px-16 lg:px-32" custom-x>
            <core-h2 :title="$t('location.title')"></core-h2>
            <i18n path="location.description" tag="p"> </i18n>
            <core-h2 :title="$t('time.title')"></core-h2>
            <i18n path="time.description.main" tag="p"> </i18n>
            <i18n path="time.description.sub" tag="p"> </i18n>
            <core-h2 :title="$t('posters.title')"></core-h2>
            <div class="poster-session__container">
                <article
                    v-for="poster in $t('posters.list')"
                    :id="poster.id"
                    :key="poster.id"
                    class="poster-session__card"
                    @click="showModal(poster)"
                >
                    <div class="mb-6 text-right text-xs">
                        {{ poster.type }}
                    </div>
                    <div
                        class="line-clamp-5 five-line-height mb-6 text-[#CDCBFF]"
                    >
                        {{ poster.title }}
                    </div>
                    <div
                        class="mb-2 flex flex-wrap gap-x-1 text-xs text-[#BB75BC]"
                    >
                        <span>
                            {{ poster.name }}
                        </span>
                        <span>
                            {{
                                `${poster.community && '|'} ${poster.community}`
                            }}
                        </span>
                    </div>
                    <div
                        class="flex flex-1 flex-col items-start justify-end gap-y-1 text-center text-[10px]"
                    >
                        <span
                            v-for="topic in poster.topics"
                            :id="topic"
                            :key="topic"
                            class="rounded-md bg-[#BB75BC] p-1 text-[#000]"
                        >
                            {{ topic }}
                        </span>
                    </div>
                </article>
            </div>
        </i18n-page-wrapper>
        <transition name="fade">
            <modal v-if="isOpened" v-model="isOpened">
                <div class="flex flex-col items-center space-y-3 p-2">
                    <div class="text-xl text-[#CDCBFF]">
                        {{ selectedPoster.title }}
                    </div>
                    <div class="text-center text-sm">
                        <div class="text-[#BB75BC]">
                            {{ selectedPoster.name }}
                        </div>
                        <div class="text-[#BB75BC]">
                            {{ selectedPoster.community }}
                        </div>
                    </div>

                    <div
                        v-html="$md.render(selectedPoster.summary.trim())"
                    ></div>
                </div>
            </modal>
        </transition>
    </div>
</template>
<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import i18n from '@/i18n/conference/poster-session.i18n'
import Banner from '@/components/core/layout/Banner'
import CoreH1 from '@/components/core/titles/H1'
import CoreH2 from '@/components/core/titles/H2'
import Modal from './_components/modal/Modal'

export default {
    i18n,
    name: 'PageConferencePosterSession',
    components: {
        Banner,
        CoreH1,
        CoreH2,
        I18nPageWrapper,
        Modal,
    },
    data() {
        return {
            isOpened: false,
            selectedPoster: {
                id: '',
                name: '',
                type: '',
                community: '',
                topics: [],
                title: '',
                summary: '',
            },
        }
    },
    methods: {
        showModal(poster) {
            this.isOpened = true
            this.selectedPoster = poster
        },
    },
}
</script>

<style lang="postcss">
p.description {
    text-align: unset;
}

.poster-session__container {
    display: grid;
    justify-content: center;
    gap: 8px;
    grid-template-columns: repeat(auto-fit, 239px);
}

.poster-session {
    @apply py-10 md:py-24;

    .five-line-height {
        line-height: 1.5em;
        height: calc(5 * 1.5em);
        overflow: hidden;
    }
}

.poster-session__card {
    @apply flex cursor-pointer flex-col rounded-3xl bg-[#1f1c3b] p-6;
    border: 1px solid transparent;

    &:hover {
        @apply bg-primary-800;
        border: 1px solid #746bb8;
        box-shadow: 0px 0px 10px 10px #352d66;

        & .title {
            @apply text-pink-700;
        }
        & .cardTxt {
            @apply text-primary-100;
        }
    }
}

.poster-session .summary-link {
    text-decoration: underline;
    color: #da8bdc;
}
</style>
