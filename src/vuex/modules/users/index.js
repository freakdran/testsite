
const initialState = {
    users: [{name: "A"}, {name: "B"}, {name: "TEST"}],
};

const getters = {
    getUsers: (state) => {
        return state.users;
    },
};

// mutations
const mutations = {
    'proxy_settings/WhitelistedDomains'(state, whitelistedDomains) {
        state.users = whitelistedDomains;
    },

};

const actions = {

};

export default {
    namespaced: true,
    state: {
        ...initialState,
    },
    mutations,
    actions,
    getters,
};
