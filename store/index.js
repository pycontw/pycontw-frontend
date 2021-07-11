import { set } from '~/utils/store.utils'

export const state = () => ({
    sponsorsData: [],
    jobsData: [],
    keynotesData: [],
})

const token = process.env.AUTH_TOKEN

export const mutations = {
    setSponsorsData: set('sponsorsData'),
    setJobsData: set('jobsData'),
    setKeynotesData: set('keynotesData'),
}

export const actions = {
    async $getSponsorsData({ commit }) {
        const { data } = await this.$http.$get('/api/sponsors', {
            headers: { Authorization: token },
        })
        commit('setSponsorsData', data)
    },
    async $getJobsData({ commit }) {
        const { data } = await this.$http.$get('/api/sponsors/jobs', {
            headers: { Authorization: token },
        })
        commit('setJobsData', data)
    },
    async $getKeynotesData({ commit }) {
        const keynoteList = await this.$http.$get('/api/events/keynotes', {
            headers: { Authorization: token },
        })
        commit('setKeynotesData', keynoteList)
    },
}
