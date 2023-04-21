import axios from "axios";
// import Vue from "vue";
const state = {
  works: [],
};

const getters = {
  Works: (state) => {
    let work = state.works;

    return work;
  },

};

const mutations = {
  SET_WORK(state, data) {
    state.works = data;
  },

};

const actions = {
  init_work: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "admin/get_all_fonction/"+1
          // localStorage.getItem("user-station")
      )
      .then((res) => {
        commit("SET_WORK", res.data);
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
