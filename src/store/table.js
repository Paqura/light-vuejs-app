const state = () => ({
  items: [],
});

const getters = {
  getData(currentState) {
    return currentState.items;
  },
};

const actions = {
};

const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
