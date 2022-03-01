import axios from "axios";
// import Vue from "vue";
const state = {
  expedition: [],
  withdrawal: [],
};

const getters = {
  Expeditions: (state) => {
    let expedition = state.expedition;

    return expedition;
  },

  Withdrawals: (state) => {
    let withdrawals = state.withdrawal;

    return withdrawals;
  },
};

const mutations = {
  SET_EXPEDITION(state, data) {
    state.expedition = data;
  },

  SET_WITHDRAWAL(state, data) {
    state.withdrawal = data;
  },
};

const actions = {
  init_expedition: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "expedition/expeditionList/" +
          localStorage.getItem("user-station")
      )
      .then((res) => {
        commit("SET_EXPEDITION", res.data.data);
      })
      .catch((error) => console.log(error));
  },

  init_withdrawal: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "withdrawal/List/" +
          localStorage.getItem("user-station")
      )
      .then((res) => {
        commit("SET_WITHDRAWAL", res.data.data);
      })
      .catch((error) => console.log(error));
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
