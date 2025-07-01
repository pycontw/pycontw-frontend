<template>
    <div class="Reviewers">
        <core-h2
            :title="$t('reviewers')"
            :is-bulleted="isBulleted"
            class="intro-h2"
        />

        <div class="reviewerGroup">
            <div
                v-for="(member, i) in staffsData"
                :key="`reviewer_${i}`"
                class="reviewer"
                @click="openModal(member)"
            >
                <div class="reviewerPhoto">
                    <img :src="getPhotoUrl(member)" />
                </div>
                <div class="reviewerName">
                    {{ member.full_name }}
                </div>
            </div>
        </div>

        <!-- 彈出視窗 -->
        <div v-if="selectedReviewer" class="modal" @click.self="closeModal">
            <div class="modal-content">
                <img
                    src="~@/static/img/reviewer/Clip-LR.svg"
                    class="absolute left-0 top-[108px] rotate-0"
                />
                <img
                    src="~@/static/img/reviewer/Clip-LR.svg"
                    class="absolute right-0 top-[232px] rotate-180"
                />
                <img
                    src="~@/static/img/reviewer/Clip-TB.svg"
                    class="absolute right-[120px] top-0 rotate-0"
                />
                <img
                    src="~@/static/img/reviewer/Clip-TB.svg"
                    class="absolute bottom-0 left-[129px] rotate-180"
                />
                <img
                    src="~@/static/img/reviewer/DE-01.svg"
                    class="absolute left-[495px] top-[571px]"
                />
                <img
                    src="~@/static/img/reviewer/DE-02.svg"
                    class="absolute left-[514px] top-[105px]"
                />
                <img
                    src="~@/static/img/reviewer/DE-03.svg"
                    class="absolute left-[96px] top-[194px]"
                />
                <button
                    class="modal-close-button"
                    aria-label="關閉"
                    @click="closeModal"
                >
                    ×
                </button>
                <div class="modal-content-header">
                    <img
                        class="selectedReviewerPhoto"
                        :src="getPhotoUrl(selectedReviewer)"
                        alt="photo"
                    />
                    <p class="selectedReviewerName">
                        {{ selectedReviewer.full_name }}
                    </p>
                    <div class="reviewerProfile">
                        <div
                            v-if="!!selectedReviewer.facebook_profile_url"
                            class="selectedReviewerExtLink"
                        >
                            <ext-link
                                :href="selectedReviewer.facebook_profile_url"
                            >
                                <facebook-icon />
                            </ext-link>
                        </div>
                        <div
                            v-if="!!selectedReviewer.github_profile_url"
                            class="selectedReviewerExtLink"
                        >
                            <ext-link
                                :href="selectedReviewer.github_profile_url"
                            >
                                <github-icon />
                            </ext-link>
                        </div>
                        <div
                            v-if="!!selectedReviewer.twitter_profile_url"
                            class="selectedReviewerExtLink"
                        >
                            <ext-link
                                :href="selectedReviewer.twitter_profile_url"
                            >
                                <twitter-icon />
                            </ext-link>
                        </div>
                    </div>
                </div>
                <div class="modal-content-body">
                    <p>{{ selectedReviewer.bio }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CoreH2 from '@/components/core/titles/H2'
import ExtLink from '@/components/core/links/ExtLink.vue'
import FacebookIcon from '@/components/core/icons/FacebookIcon'
import GithubIcon from '@/components/core/icons/GithubIcon'
import TwitterIcon from '@/components/core/icons/TwitterIcon'
import i18n from './Reviewers.i18n'

export default {
    i18n,
    name: 'Reviewers',
    components: {
        CoreH2,
        ExtLink,
        FacebookIcon,
        GithubIcon,
        TwitterIcon,
    },
    props: {
        isBulleted: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return { selectedReviewer: null }
    },
    computed: {
        staffsData() {
            return this.$store.state.reviewerData
        },
    },
    methods: {
        openModal(staff) {
            this.selectedReviewer = staff
        },
        closeModal() {
            this.selectedReviewer = null
        },
        getPhotoUrl(member) {
            if (member && member.photo_url && member.photo_url.trim() !== '') {
                return member.photo_url
            }
            return require('@/static/img/staff/default.jpg')
        },
    },
}
</script>

<style lang="postcss" scoped>
.reviewerGroup {
    @apply grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4;
    @apply lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8;
    @apply gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-4;
    @apply ml-0.5 lg:ml-14;
}

.reviewerPhoto {
    @apply aspect-w-1 aspect-h-1 mb-3 w-full;
}

.reviewerPhoto img {
    @apply rounded-full object-cover;
}

.reviewerName {
    @apply font-serif text-xs text-white md:text-sm;
    @apply p-0.5 text-center;
}

.modal {
    @apply fixed left-0 top-0 z-[1000] h-screen w-screen;
    @apply box-border flex items-center justify-center p-4;
    @apply bg-[#000000] bg-opacity-50 backdrop-blur-sm;
}

.modal-close-button {
    @apply absolute right-2 top-2;
    @apply h-12 w-12 text-4xl font-bold text-[#E099E1];
    @apply cursor-pointer;
}

.modal-content {
    @apply relative w-[724px] bg-[#121023] text-white;
    @apply rounded-[24px] border-[3px] border-[#E099E1] text-center;
    @apply h-[678px] max-h-[90vh] shadow-xl;
    @apply flex flex-col items-center justify-center;
}

.modal-content-header {
    @apply relative flex flex-col items-center justify-between;
}

.modal-content-header .selectedReviewerPhoto {
    @apply mx-auto h-[143px] w-[143px] rounded-[50%] object-cover;
}

.modal-content-body {
    @apply mt-[62px] px-[57px];
}

.selectedReviewerName {
    @apply my-3 text-center font-serif font-black;
}

.reviewerProfile {
    @apply flex justify-center;
}

.selectedReviewerExtLink {
    @apply mx-2 font-bold text-pink-700;
}

.selectedReviewerExtLink:hover {
    @apply text-primary-500;
}

.selectedReviewerExtLink svg {
    @apply fill-primary-300;
}
</style>
