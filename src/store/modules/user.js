// import Vue from "vue";
import axios from "axios";
const state = {
  employers: [],
  current_employers: [],
};

const getters = {
  Employers: (state) => {
    let employer = state.employers;

    return employer;
  },
  Current_employer: (state) => {
    let employer = state.current_employers[0];

    return employer;
  },
};

const mutations = {
  SET_EMPLOYERS(state, data) {
    state.employers = data;
  },
  SET_ONE_EMPLOYER(state, data) {
    state.current_employers = data;
  },
};

const actions = {
  init_employers: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "admin/getAllEmploys/"+localStorage.getItem("user-compagnie")
      )
      .then((res) => {
        console.log(res.data.Employ);
        commit("SET_EMPLOYERS", res.data.Employ);
      })
      .catch((error) => console.log(error));
  },

  init_current_employer_infos: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "admin/getEmplyerById/"+localStorage.getItem("user-id")
      )
      .then((res) => {
        console.log(res.data.Employ);
        commit("SET_ONE_EMPLOYER", res.data.Employ);
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
