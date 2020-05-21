import Vue from 'vue';
import Vuex from 'vuex';

const fb = require('../firebaseConfig.js');

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
    async fetchUser({ commit }) {
      await fb.user.doc('Xt5Hj5xbvt6kw12ITzKV').get()
        .then((res) => commit('setUserProfile', res.data()));
    },
    // async createNote({
    //   date, time, mood, author, note,
    // }) {
    //   await fb.notes.add({
    //     createdOn: date,
    //     time,
    //     mood,
    //     author,
    //     content: note,
    //   }).catch((err) => {
    //     console.log(err);
    //   });
    // },
  },
  mutations: {
    setUserProfile(state, val) { state.userProfile = val; },
    setNotes(state, val) {
      (val) ? state.notes = val : state.notes = [];
    },
  },
});
