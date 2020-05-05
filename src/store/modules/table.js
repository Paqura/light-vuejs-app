import Api from '../../api';

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
    const response = await fetch(Api.countryUrl).then((res) => res.json());
    ctx.commit('updateData', response);
  },

  async fetchCountry(ctx, countryName) {
    const response = await fetch(`${Api.countryUrl}${countryName}`)
      .then((res) => res.json());

    ctx.commit('updateData', [response]);
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
