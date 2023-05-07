import axios from "axios";
// import Vue from "vue";
const state = {
  allUserfiles: [],
  allUserSharefiles: [],
  allUserCompagniefiles: [],
};

const getters = {
  AllUserfiles: (state) => {
    // let files = state.allUserfiles;

    // return files;
    let files = state.allUserfiles.map((file) => {
      const dateDebut = file.updated_at.split('T')
      file.updated_at = dateDebut[0]
      return file
    });
    console.log(files);
    return files;
  },

  AllUserSharefiles: (state) => {
    // let files = state.allUserfiles;

    // return files;
    let files = state.allUserSharefiles.map((file) => {
      const dateDebut = file.created_at.split('T')
      file.created_at = dateDebut[0]
      return file
    });
    console.log(files);
    return files;
  },

  AllUserCompagniefiles: (state) => {
    // let files = state.allUserfiles;

    // return files;
    let files = state.allUserCompagniefiles.map((file) => {
      const dateDebut = file.created_at.split('T')
      file.created_at = dateDebut[0]
      return file
    });
    return files;
  },

};

const mutations = {
  SET_ALL_USER_FILES(state, data) {
    state.allUserfiles = data;
  },

  SET_ALL_USER_SHARE_FILES(state, data) {
    state.allUserSharefiles = data;
  },

  SET_ALL_COMPAGNIE_FILES(state, data) {
    state.allUserCompagniefiles = data;
  },

};

const actions = {
  init_all_user_file: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "/api/v1/users/getAllUserFile/"+localStorage.getItem("user-id")
      )
      .then((res) => {
        // console.log(res.data);
        commit("SET_ALL_USER_FILES", res.data.result);
      })
      .catch((error) => console.log(error));
  },

  init_all_user_share_file: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "/api/v1/users/getAllUserShareFile/"+localStorage.getItem("user-id")
      )
      .then((res) => {
        // console.log(res.data);
        commit("SET_ALL_USER_SHARE_FILES", res.data.result);
      })
      .catch((error) => console.log(error));
  },

  init_all_compnies_file: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "/api/v1/users/getAllCompaniesFile/"+localStorage.getItem("user-compagnie")
      )
      .then((res) => {
        // console.log(res.data);
        commit("SET_ALL_COMPAGNIE_FILES", res.data.result);
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
