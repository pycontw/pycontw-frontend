<template>
    <div class="py-10 md:py-24 lg:py24">
        <banner>
            <template #default>
                <div
                    class="hidden md:block md:w-full md:h-full"
                    :style="bannerStyle"
                ></div>
            </template>
            <template #text>
                <core-h1 :title="$t('title')"></core-h1>
                <p class="w-full md:w-3/4 leading-6">
                    {{ $t('intro') }}
                </p>
            </template>
        </banner>
        <i18n-page-wrapper class="pt-8 px-4 lg:px-16" custom-x custom-y>
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
                    :to="event.to"
                    :href="event.href"
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
                },
                {
                    tag: 'sprint',
                    eventTag: 'warmup',
                    tagColor: 'orange',
                    imgUrl: require('~/static/img/events/overview/sprint.png'),
                    imgAlt: 'Sprint',
                },
                {
                    tag: 'pycast',
                    eventTag: 'podcast',
                    tagColor: 'red',
                    imgUrl: require('~/static/img/events/overview/pycast.png'),
                    imgAlt: 'PyCast',
                    href: 'https://podcasts.apple.com/podcast/id1559843325',
                },
                {
                    tag: 'keynote',
                    eventTag: 'speech',
                    tagColor: 'blue',
                    imgUrl: require('~/static/img/events/overview/keynote.png'),
                    imgAlt: 'Keynote',
                    to: '/conference/keynotes',
                },
                {
                    tag: 'talk',
                    eventTag: 'speech',
                    tagColor: 'blue',
                    imgUrl: require('~/static/img/events/overview/talk.png'),
                    imgAlt: 'Talk',
                    to: '/conference/talks',
                },
                {
                    tag: 'tutorial',
                    eventTag: 'speech',
                    tagColor: 'blue',
                    imgUrl: require('~/static/img/events/overview/tutorial.png'),
                    imgAlt: 'Tutorial',
                    to: '/conference/tutorials',
                },
                {
                    tag: 'openSpace',
                    eventTag: 'activity',
                    tagColor: 'green',
                    imgUrl: require('~/static/img/events/overview/open-space.png'),
                    imgAlt: 'Open Space',
                },
                {
                    tag: 'lighteningTalk',
                    eventTag: 'activity',
                    tagColor: 'green',
                    imgUrl: require('~/static/img/events/overview/lightening-talk.png'),
                    imgAlt: 'Lightening Talk',
                },
                {
                    tag: 'pynight',
                    eventTag: 'activity',
                    tagColor: 'green',
                    imgUrl: require('~/static/img/events/overview/pynight.png'),
                    imgAlt: 'PyNight',
                },
                {
                    tag: 'jobFair',
                    eventTag: 'activity',
                    tagColor: 'green',
                    imgUrl: require('~/static/img/events/overview/job-fair.png'),
                    imgAlt: 'Job Fair',
                    // to: '/events/jobs'
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

<style scoped></style>
