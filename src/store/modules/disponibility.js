import axios from "axios";
// import Vue from "vue";
const state = {
  userDisponibility: [],
  disponibilityList: [],
  dprtDisponibilityList: [],
};

const getters = {
  UserDisponity: (state) => {
    let userDisponibility = state.userDisponibility
    return userDisponibility;
  },
  DisponibilityList: (state) => {
    let disponibilityList = state.disponibilityList
    return disponibilityList;
  },
  DprtDisponibilityList: (state) => {
    let dprtDisponibilityList = state.dprtDisponibilityList
    return dprtDisponibilityList;
  },
};

const mutations = {
  SET_USER_DISPO(state, data) {
    state.userDisponibility = data;
  },
  SET_LIST_DISPO(state, data) {
    state.disponibilityList = data;
  },
  SET_LIST_DPRT_DISPO(state, data) {
    state.dprtDisponibilityList = data;
  },
};

const actions = {
  init_user_disponibility: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "/api/v1/admin/get_one_disponibility/" +
          localStorage.getItem("user-id")
      )
      .then((res) => {
        commit("SET_USER_DISPO", res.data);
      })
      .catch((error) => console.log(error));
  },
  init_list_disponibility: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "/api/v1/admin/get_all_disponibility/" +
          localStorage.getItem("user-compagnie")
      )
      .then((res) => {
        commit("SET_LIST_DISPO", res.data);
      })
      .catch((error) => console.log(error));
  },
  init_dprt_list_disponibility: ({ commit }, employDprt) => {
    // Vue.prototype.$http
    axios
      .get(
        "/api/v1/admin/get_dprt_disponibility/" +
          localStorage.getItem("user-compagnie") + "/" + employDprt
      )
      .then((res) => {
        commit("SET_LIST_DPRT_DISPO", res.data);
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
