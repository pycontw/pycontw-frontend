<template>
    <div class="py-10 md:py-24 lg:py-24">
        <banner>
            <core-h1 :title="$t('title')"></core-h1>
            <p class="leading-6">
                {{ $t('intro') }}
            </p>
        </banner>
        <i18n-page-wrapper
            class="pageWrapper"
            :use-bg-decoration="false"
            custom-x
        >
            <event-card-collection>
                <event-card
                    v-for="(event, index) in eventInfos"
                    :key="`event_overview_${index}`"
                    :title="$t(`eventInfo.${event.tag}.title`)"
                    :description="$t(`eventInfo.${event.tag}.description`)"
                    :tag="$t(`tag.${event.eventTag}`)"
                    :tag-color="event.tagColor"
                    :img-url="event.imgUrl"
                    :img-alt="event.imgAlt"
                    :to="event.openToView && event.to"
                    :href="event.openToView && event.href"
                ></event-card>
            </event-card-collection>
        </i18n-page-wrapper>
    </div>
</template>

<script>
import i18n from '@/i18n/events/overview.i18n'

import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import CoreH1 from '@/components/core/titles/H1'
import Banner from '@/components/core/layout/Banner'
import EventCard from '@/components/events/EventCard'
import EventCardCollection from '@/components/events/EventCardCollection'

export default {
    i18n,
    name: 'PageEventsOverview',
    components: {
        I18nPageWrapper,
        CoreH1,
        Banner,
        EventCard,
        EventCardCollection,
    },
    data() {
        return {
            banner: require('@/static/img/about/Banner.svg'),
            eventInfos: [
                {
                    tag: 'youngInspirers',
                    eventTag: 'warmup',
                    tagColor: 'orange',
                    imgUrl: require('~/static/img/events/overview/young-inspirers.png'),
                    imgAlt: 'Young Inspirers',
                    to: '/conference/young-inspirers',
                    openToView: false,
                },
                {
                    tag: 'sprint',
                    eventTag: 'warmup',
                    tagColor: 'orange',
                    imgUrl: require('~/static/img/events/overview/sprint.png'),
                    imgAlt: 'Sprint',
                    to: '/events/sprints',
                    openToView: false,
                },
                {
                    tag: 'pycast',
                    eventTag: 'podcast',
                    tagColor: 'red',
                    imgUrl: require('~/static/img/events/overview/pycast.png'),
                    imgAlt: 'PyCast',
                    href: 'https://podcasts.apple.com/podcast/id1559843325',
                    openToView: true,
                },
                {
                    tag: 'keynote',
                    eventTag: 'speech',
                    tagColor: 'blue',
                    imgUrl: require('~/static/img/events/overview/keynote.png'),
                    imgAlt: 'Keynote',
                    to: '/conference/keynotes',
                    openToView: false,
                },
                {
                    tag: 'talk',
                    eventTag: 'speech',
                    tagColor: 'blue',
                    imgUrl: require('~/static/img/events/overview/talk.png'),
                    imgAlt: 'Talk',
                    to: '/conference/talks',
                    openToView: false,
                },
                {
                    tag: 'tutorial',
                    eventTag: 'speech',
                    tagColor: 'blue',
                    imgUrl: require('~/static/img/events/overview/tutorial.png'),
                    imgAlt: 'Tutorial',
                    to: '/conference/tutorials',
                    openToView: false,
                },
                {
                    tag: 'openSpace',
                    eventTag: 'activity',
                    tagColor: 'green',
                    imgUrl: require('~/static/img/events/overview/open-space.png'),
                    imgAlt: 'Open Space',
                    to: '/events/open-spaces',
                    openToView: false,
                },
                {
                    tag: 'lightningTalk',
                    eventTag: 'activity',
                    tagColor: 'green',
                    imgUrl: require('~/static/img/events/overview/lightning-talk.png'),
                    imgAlt: 'Lightning Talk',
                    openToView: false,
                },
                {
                    tag: 'pynight',
                    eventTag: 'activity',
                    tagColor: 'green',
                    imgUrl: require('~/static/img/events/overview/pynight.png'),
                    imgAlt: 'PyNight',
                    openToView: false,
                },
                {
                    tag: 'jobFair',
                    eventTag: 'activity',
                    tagColor: 'green',
                    imgUrl: require('~/static/img/events/overview/job-fair.png'),
                    imgAlt: 'Job Fair',
                    to: '/events/jobs',
                    openToView: false,
                },
            ],
        }
    },
    computed: {
        bannerStyle() {
            return {
                'background-image': `url(${this.banner})`,
                'background-repeat': 'no-repeat',
                'background-position': 'center',
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
                    content: this.$i18n.t('intro'),
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: this.$i18n.t('intro'),
                },
            ],
        }
    },
}
</script>

<style scoped>
.pageWrapper {
    @apply px-4 md:px-32;
}
</style>
