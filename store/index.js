import { set } from '~/utils/store.utils'

export const state = () => ({
    sponsorsData: [],
})

export const mutations = {
    setSponsorsData: set('sponsorsData'),
}

export const actions = {
    async $getSponsorsData({ commit }) {
        const { data: sponsorsData } = await this.$http.$get('/api/sponsors')
        commit('setSponsorsData', sponsorsData)
    },
}
