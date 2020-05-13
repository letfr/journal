import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userProfile: {},
    notes: [],
  },
  actions: {
    clearData({ commit }) {
      commit('setUserProfile', {});
      commit('setNotes', null);
    },
    userProfile({ commit }, val) {
      commit('setUserProfile', val);
    },
  },
  mutations: {
    setUserProfile(state, val) { state.userProfile = val; },
    setNote(state, val) {
      // eslint-disable-next-line no-unused-expressions
      (val) ? state.notes = val : state.notes = [];
    },
  },
});
