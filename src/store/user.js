const state = {
  name: null
};

const getters = {
  name: state => (state.name ? state.name : "")
};

const mutations = {
  setName(state, name) {
    state.name = name;
  }
};

const actions = {
  login(context, name) {
    context.commit("setName", name);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};