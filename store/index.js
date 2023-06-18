import { set } from '~/utils/store.utils'

export const state = () => ({
    sponsorsData: [],
    jobsData: [],
    schedulesData: [],
    keynotesData: [],
    youtubeInfo: [],
    speechesData: [],
    speechData: {},
    relatedData: [],
    configs: {
        conferenceName: 'PyCon TW',
        conferenceYear: '2023',
        showSpeakingPage: false,
        showAboutStaffPage: false,
        showSchedulePage: false,
        showSponsorPage: true,
        showRegistrationPage: true,
        showEventOverviewPage: false,
        showEventsPage: true,
        showConferencePage: false,
        showVenuePage: true,
        showIndexSponsorSection: true,
        showIndexSecondaryBtn: true,
        aboutHideItems: ['apacCommunity'], // ['pycontw', 'apacCommunity', 'history', 'community', 'codeOfConduct']
        eventsHideItems: ['sprints', 'openSpaces'], // ['sprints', 'openSpaces', 'jobs']
        conferenceHideItems: [], // ['keynotes', 'talks', 'tutorials', 'youngInspirers']
        registrationHideItems: [], // ['tickets', 'financialAid']
    },
})

export const mutations = {
    setSponsorsData: set('sponsorsData'),
    setJobsData: set('jobsData'),
    setSchedulesData: set('schedulesData'),
    setKeynotesData: set('keynotesData'),
    setYoutubeInfo: set('youtubeInfo'),
    setSpeechesData: set('speechesData'),
    setSpeechData: set('speechData'),
    setRelatedData: set('relatedData'),
}

export const actions = {
    async $getSponsorsData({ commit }) {
        const { data } = await this.$http.$get('/api/sponsors/')
        commit('setSponsorsData', data)
    },
    async $getJobsData({ commit }) {
        const { data } = await this.$http.$get('/api/sponsors/jobs/')
        commit('setJobsData', data)
    },
    async $getSchedulesData({ commit }) {
        const { data } = await this.$http.$get('/api/events/schedule/')
        commit('setSchedulesData', data)
    },
    async $getKeynotesData({ commit }) {
        const keynoteList = await this.$http.$get('/api/events/keynotes/')
        commit('setKeynotesData', keynoteList)
    },
    async $verifyAttendee({ commit }, payload = { token: '' }) {
        const youtubeInfo = await this.$http.$post(
            '/api/attendee/verify/',
            payload,
        )
        commit('setYoutubeInfo', youtubeInfo.youtube_infos)
    },
    async $getSpeechesData({ commit }, eventType) {
        let endpoint = '/api/events/speeches/'
        if (eventType === 'talks') {
            endpoint = `${endpoint}?event_types=talk,sponsored`
        } else if (eventType === 'tutorials') {
            endpoint = `${endpoint}?event_types=tutorial`
        }
        const speechList = await this.$http.$get(endpoint)
        speechList.sort((a, b) =>
            a.category > b.category ? 1 : b.category > a.category ? -1 : 0,
        )
        commit('setSpeechesData', speechList)
    },
    async $getSpeechData({ commit }, { eventType, eventId }) {
        const endpoint = `/api/events/speeches/${eventType}/${eventId}/`
        const speechData = await this.$http.$get(endpoint)
        commit('setSpeechData', speechData)
    },
    async $getRelatedData({ commit }, category) {
        const endpoint = `/api/events/speeches/category/${category}`
        const relatedList = await this.$http.$get(endpoint)
        commit('setRelatedData', relatedList)
    },
}
