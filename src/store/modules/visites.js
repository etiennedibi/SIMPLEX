import axios from "axios";
// import Vue from "vue";
const state = {
  userVisite: [],
  allVisitesStory: {},
};

const getters = {
  UserVisites: (state) => {
    let userVisite = state.userVisite;

    return userVisite;
  },  

  AllVisitesStorys: (state) => {
    let allVisitesStorys = state.allVisitesStory;

    return allVisitesStorys;
  },
};

const mutations = {
  SET_USERVISITES(state, data) {
    state.userVisite = data;
  },

  SET_ALLVISITES(state, data) {
    state.allVisitesStory = data;
  },
};

const actions = {
  init_userVisite: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "rdv/AllVisiteByUser/" + 1
          // localStorage.getItem("user-station")
      )
      .then((res) => {
        // console.log(res.data);
        commit("SET_USERVISITES", res.data.visites);
      })
      .catch((error) => console.log(error));
  },

  init_allVisite: ({ commit }) => {
    // Vue.prototype.$http
  //   axios
  //     .get(
  //       "withdrawal/List/" +
  //         localStorage.getItem("user-station")
  //     )
  //     .then((res) => {
  //       commit("SET_WITHDRAWAL", res.data.data);
  //     })
  //     .catch((error) => console.log(error));
  // },
  axios
      .get(
        "rdv/AllVisiteurs/" + 1
      )
      .then((res) => {
        console.log(res.data.visites);
        commit("SET_ALLVISITES", res.data);
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
