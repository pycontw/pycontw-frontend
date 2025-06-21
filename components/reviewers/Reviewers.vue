<template>
    <div class="Reviewers">
        <core-h2
            :title="$t('reviewers')"
            :is-bulleted="isBulleted"
            class="intro-h2"
        />

        <div class="staffGroup">
            <div
                v-for="(member, i) in staffsData"
                :key="`staff_member_${i}`"
                class="staff"
                @click="openModal(member)"
            >
                <div class="staffPhoto">
                    <img :src="member.photo_url" />
                </div>
                <div class="staffName">
                    {{ member.full_name }}
                </div>
            </div>
        </div>

        <!-- 彈出視窗 -->
        <div v-if="selectedStaff" class="modal" @click.self="closeModal">
            <div class="modal-content">
                <img
                    src="/img/staff/clip.png"
                    class="absolute -left-8 top-[108px] rotate-90"
                />
                <img
                    src="/img/staff/clip.png"
                    class="absolute -right-8 top-[232px] -rotate-90"
                />
                <img
                    src="/img/staff/clip.png"
                    class="absolute right-[120px] top-0 rotate-180"
                />
                <img
                    src="/img/staff/clip.png"
                    class="absolute bottom-0 left-[129px] rotate-0"
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
                        class="selectedStaffPhoto"
                        :src="selectedStaff.photo_url"
                        alt="photo"
                    />
                    <p class="selectedStaffName">
                        {{ selectedStaff.full_name }}
                    </p>
                    <div class="staffProfile">
                        <div
                            v-if="!!selectedStaff.facebook_profile_url"
                            class="selectedStaffExtLink"
                        >
                            <ext-link
                                :href="selectedStaff.facebook_profile_url"
                            >
                                <facebook-icon />
                            </ext-link>
                        </div>
                        <div
                            v-if="!!selectedStaff.github_profile_url"
                            class="selectedStaffExtLink"
                        >
                            <ext-link :href="selectedStaff.github_profile_url">
                                <github-icon />
                            </ext-link>
                        </div>
                        <div
                            v-if="!!selectedStaff.twitter_profile_url"
                            class="selectedStaffExtLink"
                        >
                            <ext-link :href="selectedStaff.twitter_profile_url">
                                <twitter-icon />
                            </ext-link>
                        </div>
                    </div>
                </div>
                <div class="modal-content-body">
                    <p>{{ selectedStaff.bio }}</p>
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
        return { selectedStaff: null }
    },
    computed: {
        staffsData() {
            return this.$store.state.staffsData
        },
    },
    methods: {
        openModal(staff) {
            this.selectedStaff = staff
        },
        closeModal() {
            this.selectedStaff = null
        },
    },
}
</script>

<style lang="postcss" scoped>
.team {
    @apply mb-12;
}

.teamName {
    @apply mb-10 font-serif text-base font-bold text-primary-500 sm:text-[24px];
}

.staffGroup {
    @apply grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4;
    @apply lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8;
    @apply gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-4;
    @apply ml-0.5 lg:ml-14;
}

.staffPhoto {
    @apply aspect-w-1 aspect-h-1 mb-3 w-full;
}

.staffPhoto img {
    @apply rounded-full object-cover;
}

.staffName {
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

    background-image: url('/img/staff/background-decorate.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-blend-mode: normal;
}

.modal-content-header {
    @apply relative flex flex-col items-center justify-between;
}

.modal-content-header .selectedStaffPhoto {
    @apply mx-auto h-[143px] w-[143px] rounded-[50%] object-cover;
}

.modal-content-body {
    @apply mt-[62px] px-[57px];
}

.selectedStaffName {
    @apply my-3 text-center font-serif font-black;
}

.staffProfile {
    @apply flex justify-center;
}

.selectedStaffExtLink {
    @apply mx-2 font-bold text-pink-700;
}

.selectedStaffExtLink:hover {
    @apply text-primary-500;
}

.selectedStaffExtLink svg {
    @apply fill-primary-300;
}
</style>
