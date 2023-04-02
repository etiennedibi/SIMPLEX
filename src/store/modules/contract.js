import axios from "axios";
// import Vue from "vue";
const state = {
  contracts: [],
};

const getters = {
  Contracts: (state) => {
    let contract = state.contracts;

    return contract;
  },

};

const mutations = {
  SET_CONTRACT(state, data) {
    state.contracts = data;
  },

};

const actions = {
  init_contract: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "admin/get_type_contrat" 
          // localStorage.getItem("user-station")
      )
      .then((res) => {
        console.log(res.data);
        commit("SET_CONTRACT", res.data);
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
