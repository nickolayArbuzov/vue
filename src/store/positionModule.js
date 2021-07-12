import axios from "axios";

export const positionModule = {
    state: () => ({
        positions: [],
        isPositionsLoading: false,
        searchQuery: '',
    }),
    mutations: {
        setPosts(state, positions) {
            state.positions = positions;
        },
        setLoading(state, bool) {
            state.isPositionsLoading = bool
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        },
    },
    actions: {
        async fetchPositions({state, commit}) {
            try {
                commit('setLoading', true);
                const response = await axios.get('https://www.nbrb.by/api/exrates/currencies/', {
                    params: {
                    }
                });
                commit('setPositions', response.data)
            } catch (e) {
                console.log(e)
            } finally {
                commit('setLoading', false);
            }
        },
    },
    namespaced: true
}
