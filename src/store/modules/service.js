import axios from "axios";
// import Vue from "vue";
const state = {
  services: [],
  organigramme:{},
};

const getters = {
  Services: (state) => {
    let service = state.services;
    return service;
  },

  Organigramme: (state) => {
    let organigramme = state.organigramme;
    return organigramme;
  },

};

const mutations = {
  SET_SERVICE(state, data) {
    state.services = data;
  },

  SET_ORGANIGRAMME(state, data) {
    state.organigramme = data;
  },

};

const actions = {
  init_service: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "/api/v1/admin/getdepartments/"+localStorage.getItem("user-compagnie")
          // localStorage.getItem("user-station")
      )
      .then((res) => {
        commit("SET_SERVICE", res.data.code);
      })
      .catch((error) => console.log(error));
  },

  init_organigrame: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "/api/v1/admin/get_organigramme/"+localStorage.getItem("user-compagnie")
          // localStorage.getItem("user-station")
      )
      .then((res) => {
        commit("SET_ORGANIGRAMME", res.data);
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
