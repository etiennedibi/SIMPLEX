import axios from "axios";
// import Vue from "vue";
const state = {
  services: [],
};

const getters = {
  Services: (state) => {
    let service = state.services;
    return service;
  },

};

const mutations = {
  SET_SERVICE(state, data) {
    state.services = data;
  },

};

const actions = {
  init_service: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "admin/getdepartments" 
          // localStorage.getItem("user-station")
      )
      .then((res) => {
        commit("SET_SERVICE", res.data.code);
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
