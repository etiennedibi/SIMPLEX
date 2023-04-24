import axios from "axios";
// import Vue from "vue";
const state = {
  contracts: [],
  rights: [],
};

const getters = {
  Contracts: (state) => {
    let contract = state.contracts;

    return contract;
  },
  Rights: (state) => {
    let right = state.rights;

    return right;
  },

};

const mutations = {
  SET_CONTRACT(state, data) {
    state.contracts = data;
  },
  SET_RIGHT(state, data) {
    state.rights = data;
  },

};

const actions = {
  init_contract: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "/api/v1/admin/get_type_contrat/"+localStorage.getItem("user-compagnie")
          // localStorage.getItem("user-station")
      )
      .then((res) => {
        commit("SET_CONTRACT", res.data);
      })
      .catch((error) => console.log(error));
  },

  init_right: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "/api/v1/admin/get_user_role"
          // localStorage.getItem("user-station")
      )
      .then((res) => {
        commit("SET_RIGHT", res.data);
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
