import Objects from '../objects/objects.js';

// return array.find((obj) => { //durchsuche arry mti objekt
//   return obj.id === id;
// });



function filterThreads(thread, user) {
  let permissionAvailable = false;
  thread.permissions.forEach(permission => permission.username === user ? permissionAvailable = true : "");
  return permissionAvailable;
}

const initialState = {
  threads: [Objects.createThread(1, "initThread", "A", "TestText")],
  idCounter: 100,
};

const getters = {
  getThreads: (state) => {
    return state.threads;
  },
  getPermissionThreads: (state) => (user) => {
    const filteredThreads = state.threads.filter(thread => filterThreads(thread, user))
    return filteredThreads;
  }
};

// mutations
const mutations = {
  'addThread'(state, {name, username, text}) {
    const newThread = Objects.createThread(name, username, text)
    state.threads.push(newThread);
    idCounter++;
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
