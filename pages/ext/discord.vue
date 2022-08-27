<template>
    <i18n-page-wrapper class="pt-8 px-8 md:px-56">
        <div>
            <div class="section">
                <core-h1 :title="$t('tutorialsHeader')"></core-h1>
                <p class="paragraphTitle">
                    {{ $t('registration.title') }}
                </p>
                <i18n
                    v-for="(description, i) in $t('registration.descriptions')"
                    :key="`discord_registration_${i}`"
                    :path="`registration.descriptions.${i}`"
                    class="paragraphContent"
                    tag="p"
                >
                    <template #setup>
                        <span
                            class="appendixHint"
                            @click="getPathWithAppendixAnchor"
                        >
                            {{ $t('registration.setupText') }}
                        </span>
                    </template>
                    <template #br><br /></template>
                    <template #info>
                        <span class="category">PYCON APAC 2022</span>
                    </template>
                    <template #registrationDesk>
                        <span class="channel">⚠｜registration-desk</span>
                    </template>
                    <template #registrationCommand>
                        <code v-if="!isValidAttendee" class="code"
                            >!register [TOKEN]</code
                        >
                        <span v-else class="code">!register {{ token }}</span>
                    </template>
                    <template #general>
                        <span class="channel">#general</span>
                    </template>
                    <template #manager>
                        <span class="code">discord manager</span>
                    </template>
                    <template #mentionManager>
                        <span class="code">@discord manager</span>
                    </template>
                </i18n>

                <p class="paragraphTitle">
                    {{ $t('announcement.title') }}
                </p>
                <i18n
                    v-for="(description, i) in $t('announcement.descriptions')"
                    :key="`discord_announcement_${i}`"
                    :path="`announcement.descriptions.${i}`"
                    class="paragraphContent"
                    tag="p"
                >
                    <template #br><br /></template>
                    <template #announcements>
                        <span class="channel">📢｜announcements</span>
                    </template>
                </i18n>

                <p class="paragraphTitle">
                    {{ $t('joinChannels.title') }}
                </p>
                <i18n
                    v-for="(description, i) in $t('joinChannels.descriptions')"
                    :key="`discord_joinChannels_${i}`"
                    :path="`joinChannels.descriptions.${i}`"
                    class="paragraphContent"
                    tag="p"
                >
                    <template #br><br /></template>
                    <template #channels>
                        <ul>
                            <li
                                v-for="(channel, j) in [
                                    '📝｜program-keynote',
                                    '📝｜program-talk',
                                    '📝｜program-tutorial',
                                ]"
                                :key="`discord_joinChannels_channels_${j}`"
                                class="list-disc ml-6"
                            >
                                <span class="channel">{{ channel }}</span>
                            </li>
                        </ul>
                    </template>
                    <template #keynote>
                        <span class="channel">📝｜program-keynote</span>
                    </template>
                    <template #tracks>
                        <span class="category">PYCON APAC 2022</span>
                    </template>
                </i18n>
            </div>

            <div class="section">
                <core-h1 :title="$t('roleListHeader')"></core-h1>
                <p class="paragraphContent">
                    {{ $t('roleListDescription') }}
                </p>
                <div v-for="role in $t('roleList')" :key="role.name">
                    <p class="paragraphTitle">{{ role.name }}</p>
                    <p class="paragraphContent">{{ role.description }}</p>
                </div>
            </div>

            <div class="section">
                <core-h1 :title="$t('channelListHeader')"></core-h1>
                <div
                    v-for="(channelGroup, i) in $t('channelGroups')"
                    :key="channelGroup.type"
                >
                    <p class="paragraphTitle">
                        {{ channelGroup.type }}
                    </p>
                    <div
                        v-for="(channel, j) in channelGroup.channels"
                        :key="channel.tag"
                        class="mb-8"
                    >
                        <p class="boldTitle">
                            {{ channelInfo[channel.tag].name }}
                        </p>
                        <i18n
                            tag="p"
                            :path="`channelGroups.${i}.channels.${j}.description`"
                        >
                            <template #br><br /></template>
                        </i18n>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <core-h1 :title="$t('appendix')"></core-h1>
            <p id="appendix" class="paragraphTitle">
                {{ $t('appendixTitle') }}
            </p>
            <ol class="list-decimal">
                <i18n
                    v-for="(step, i) in $t('appendixSteps')"
                    :key="`discord_appendixSteps_${i}`"
                    :path="`appendixSteps.${i}.content`"
                    class="paragraphContent ml-8"
                    tag="li"
                >
                    <template #br><br /></template>
                    <template #link>
                        <ext-link
                            href="https://discord.com/download"
                            highlight
                            underline
                            >{{ $t('appendixSteps.0.linkText') }}</ext-link
                        >
                    </template>
                    <template #invitationLink>
                        <ext-link
                            href="https://discord.gg/dr5JmVFNtj"
                            highlight
                            underline
                            >https://discord.gg/dr5JmVFNtj</ext-link
                        >
                    </template>
                    <template #img0>
                        <img :src="instrucImgs[0]" class="img" alt="img0"
                    /></template>
                    <template #img1>
                        <img :src="instrucImgs[1]" class="img" alt="img1" />
                    </template>
                    <template #img2>
                        <img :src="instrucImgs[2]" class="img" alt="img2"
                    /></template>
                </i18n>
            </ol>
        </div>
    </i18n-page-wrapper>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import i18n from '@/i18n/ext/discord.i18n'
import AboutBanner from '@/static/img/about/Banner.svg'
import CoreH1 from '@/components/core/titles/H1'
import { ExtLink } from '@/components/core/links'

export default {
    i18n,
    name: 'DiscordGuide',
    components: {
        I18nPageWrapper,
        CoreH1,
        ExtLink,
    },
    fetchOnServer: false,
    async fetch() {
        this.token = this.$nuxt.context.query.token
        const store = this.$nuxt.context.store
        await store.dispatch('$verifyAttendee', { token: this.token })
        this.isValidAttendee =
            store.state.youtubeInfo && store.state.youtubeInfo.length !== 0
    },
    data() {
        return {
            isValidAttendee: false,
            token: '[TOKEN]',
            aboutBanner: AboutBanner,
            instrucImgs: [
                require('@/static/img/ext/discord-0.jpeg'),
                require('@/static/img/ext/discord-1.png'),
                require('@/static/img/ext/discord-2.png'),
            ],
            channelInfo: {
                rules: {
                    name: 'rules',
                },
                'registration-desk': {
                    name: '⚠｜registration-desk',
                },
                announcements: {
                    name: '📢｜announcements',
                },
                'information-desk': {
                    name: '💁｜information-desk',
                },
                'lightning-talk': {
                    name: '⚡｜lightning-talk',
                },
                'open-space': {
                    name: '🎤｜open-space',
                },
                'booth-game': {
                    name: '💪｜booth-game',
                },
                'program-keynote': {
                    name: '📝｜program-keynote',
                },
                'program-talk': {
                    name: '📝｜program-talk',
                },
                'program-tutorial': {
                    name: '📝｜program-tutorial',
                },
            },
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
        getPathWithAppendixAnchor() {
            const path = this.$route.fullPath.split('#')[0]
            this.$router.push(`${path}#appendix`)
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

<style lang="postcss" scoped>
.appendixHint {
    @apply cursor-pointer text-pink-500;
    &:hover {
        color: #7568f6;
    }
}
.paragraphTitle {
    @apply font-bold text-base md:text-lg;
    @apply font-serif font-bold mt-10 text-pink-500;
}
.paragraphContent {
    @apply text-xs md:text-base;
}
.category {
    @apply font-bold;
}
.channel {
    @apply font-black;
}
.code,
.role {
    @apply rounded-md px-1;
    font-family: monospace !important;
    background-color: rgba(110, 118, 129, 0.4);
}
.boldTitle {
    @apply text-base md:text-lg mb-0 font-black;
}
.highlight {
    @apply text-pink-500;
}
.section {
    @apply mb-11;
}
.img {
    @apply mt-4 mb-4 mx-auto w-3/4;
}
</style>
