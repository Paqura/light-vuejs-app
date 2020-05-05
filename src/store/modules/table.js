const state = () => ({
  data: [],
});

const getters = {
  getFullData(currentState) {
    return currentState.data;
  },
};

const actions = {
  async fetchData(ctx) {
    const endpoint = 'https://corona.lmao.ninja/v2/countries';
    const response = await fetch(endpoint).then((res) => res.json());
    ctx.commit('updateData', response);
  },
};

const mutations = {
  updateData(currentState, data) {
    currentState.data = data;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
