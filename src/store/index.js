import { createStore } from 'vuex';

export default createStore({
  state: {
    loading: false
  },
  mutations: {
    loadingStart(state) {
      state.loading = true;
    },
    loadingEnd(state) {
      state.loading = false;
    }
  },
  actions: {},
  modules: {}
});
