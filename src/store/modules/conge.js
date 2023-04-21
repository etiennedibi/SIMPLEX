import axios from "axios";
// import Vue from "vue";
const state = {
  conges: [],
  user_conges: [],
  all_conges: [],
};

const getters = {
  Conges: (state) => {
    let conge = state.conges;

    return conge;
  },

  User_Conges: (state) => {
    let conge = state.user_conges;

    return conge;
  },

  All_conges: (state) => {
    let conge = state.all_conges;

    return conge;
  },

};

const mutations = {
  SET_CONGE(state, data) {
    state.conges = data;
  },
  SET_USER_CONGE(state, data) {
    state.user_conges = data;
  },
  SET_ALL_CONGE(state, data) {
    state.all_conges = data;
  },
};

const actions = {
  init_conge: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "admin/get_type_conges/"+1 
          // localStorage.getItem("user-station")
      )
      .then((res) => {
        commit("SET_CONGE", res.data);
      })
      .catch((error) => console.log(error));
  },

  init_user_conge: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "users/get_conge_user/"+2 
          // localStorage.getItem("user-station")
      )
      .then((res) => {
        commit("SET_USER_CONGE", res.data.conge);
      })
      .catch((error) => console.log(error));
  },

  init_all_conge: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "admin/getAllconge" 
          // localStorage.getItem("user-station")
      )
      .then((res) => {
        commit("SET_ALL_CONGE", res.data.conge);
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
