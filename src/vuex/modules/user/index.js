
const initialState = {
  user: "",

};

const getters = {
  getUser: (state) => {
    return state.user;
  },
};

// mutations
const mutations = {
  'setUser'(state, user) {
    state.user = user;
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
