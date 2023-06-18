import axios from "axios";
// import Vue from "vue";
const state = {
  allPaiefiles: [],
  allUserPaiefiles: [],
};

const getters = {
  AllPaiefiles: (state) => {
    let files = state.allPaiefiles;

    return files;
  },

  AllUserPaiefiles: (state) => {
    let files = state.allUserPaiefiles;

    return files;
  },


};

const mutations = {
  SET_ALL_PAIE_FILES(state, data) {
    state.allPaiefiles = data;
  },

  SET_ALL_USER_PAIE_FILES(state, data) {
    state.allUserPaiefiles = data;
  },

};

const actions = {
  init_all_paie_file: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "/api/v1/admin/get_all_paieFile/"+localStorage.getItem("user-compagnie")
      )
      .then((res) => {
        // console.log(res.data);
        commit("SET_ALL_PAIE_FILES", res.data.Paiefile);
      })
      .catch((error) => console.log(error));
  },

  init_all_user_paie_file: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "/api/v1/admin/get_oneUser_paieFile/"+localStorage.getItem("user-id")
      )
      .then((res) => {
        // console.log(res.data);
        commit("SET_ALL_USER_PAIE_FILES", res.data.Paiefile);
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
