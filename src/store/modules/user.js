// import Vue from "vue";
import axios from "axios";
const state = {
  employers: [],
  current_employers: [],
  employersByTheDepartments:[],
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
  EmployersByTheDepartments: (state) => {
    let employer = state.employersByTheDepartments;

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
  SET_EMPLOYER_BY_DPRT(state, data) {
    state.employersByTheDepartments = data;
  },
};

const actions = {
  init_employers: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "/api/v1/admin/getAllEmploys/"+localStorage.getItem("user-compagnie")
      )
      .then((res) => {
        // console.log(res.data.Employ);
        commit("SET_EMPLOYERS", res.data.Employ);
      })
      .catch((error) => console.log(error));
  },

  init_current_employer_infos: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "/api/v1/admin/getEmplyerById/"+localStorage.getItem("user-id")
      )
      .then((res) => {
        // console.log(res.data.Employ);
        commit("SET_ONE_EMPLOYER", res.data.Employ);
      })
      .catch((error) => console.log(error));
  },

  init__employer_by_dprt: ({ commit }) => {
    // Vue.prototype.$http localStorage.getItem("user-id")
    axios
      .get(
        "/api/v1/admin/getAllDprtEmploys/"+1
      )
      .then((res) => {
        console.log(res.data.Employes);
        commit("SET_EMPLOYER_BY_DPRT", res.data.Employes);
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
