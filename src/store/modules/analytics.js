// import Vue from "vue";
import axios from "axios";
const state = {
  analytics: "",
};

const getters = {
  Analytics: (state) => {
    let analytic = state.analytics;

    return analytic;
  },
};

const mutations = {
  SET_ANALYTICS(state, data) {
    state.analytics = data;
  },
};

const actions = {
  init_analitic: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "analytics/" +
          localStorage.getItem("user-station")
      )
      .then((res) => {
        commit("SET_ANALYTICS", res.data.data);
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
