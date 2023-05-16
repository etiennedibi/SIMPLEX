import axios from "axios";
// import Vue from "vue";
const state = {
  conges: [],
  user_conges: [],
  all_conges: {},
  all_conges_departement: {},
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

   // FoR---COMPAGNIE
  All_conges: (state) => {
    let conge = state.all_conges.conge;
    return conge;
  },
  All_congesRefuseNumber: (state) => {
    let conge = state.all_conges.conge_annules.length;
    return conge;
  },
  All_congesAcceptNumber: (state) => {
    let conge = state.all_conges.conge_accordes.length;
    console.log(conge);
    return conge;
  },

  // FoR---DEPARTEMENT
  All_conges_departement: (state) => {
    let conge = state.all_conges_departement.conge;
    return conge;
  },
  All_conges_departementRefuseNumber: (state) => {
    let conge = state.all_conges_departement.conge_annules.length;
    return conge;
  },
  All_conges_departementAcceptNumber: (state) => {
    let conge = state.all_conges_departement.conge_accordes.length;
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
  SET_ALL_CONGE_DPRT(state, data) {
    state.all_conges_departement = data;
  },
};

const actions = {
  init_conge: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "/api/v1/admin/get_type_conges/"+localStorage.getItem("user-compagnie")
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
        "/api/v1/users/get_conge_user/"+localStorage.getItem("user-id")
          // localStorage.getItem("user-station")
      )
      .then((res) => {
        commit("SET_USER_CONGE", res.data.conge);
      })
      .catch((error) => console.log(error));
  },

  init_all_conge_dprt: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "/api/v1/admin/conge_par_departement/"+localStorage.getItem("user-department")
      )
      .then((res) => {
        commit("SET_ALL_CONGE_DPRT", res.data);
      })
      .catch((error) => console.log(error));
  },

  init_all_conge: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "/api/v1/admin/getAllconge/"+localStorage.getItem("user-compagnie")
          // localStorage.getItem("user-station")
      )
      .then((res) => {
        commit("SET_ALL_CONGE", res.data);
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
