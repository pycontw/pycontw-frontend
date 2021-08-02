import { set } from '~/utils/store.utils'

export const state = () => ({
    sponsorsData: [],
    jobsData: [],
    keynotesData: [],
    youtubeInfo: [],
    speechesData: [],
    speechData: {},
})

export const mutations = {
    setSponsorsData: set('sponsorsData'),
    setJobsData: set('jobsData'),
    setKeynotesData: set('keynotesData'),
    setYoutubeInfo: set('youtubeInfo'),
    setSpeechesData: set('speechesData'),
    setSpeechData: set('speechData'),
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
}
