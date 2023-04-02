import axios from "axios";
// import Vue from "vue";
const state = {
  conges: [],
};

const getters = {
  Conges: (state) => {
    let conge = state.conges;

    return conge;
  },

};

const mutations = {
  SET_CONGE(state, data) {
    state.conges = data;
  },

};

const actions = {
  init_conge: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "admin/get_type_conges" 
          // localStorage.getItem("user-station")
      )
      .then((res) => {
        commit("SET_CONGE", res.data);
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
