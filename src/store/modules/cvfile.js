import axios from "axios";
// import Vue from "vue";
const state = {
  cvfile: [],
  seachResult: [],
};

const getters = {
  CVfiles: (state) => {
    let files = state.cvfile;

    return files;
  },

  SeachResults: (state) => {
    let files = state.seachResult;
    return files;
  },

};

const mutations = {
  SET_ALL_CV_FILES(state, data) {
    state.cvfile = data;
  },

  SET_ALL_SEACH_RESULT_FILES(state, data) {
    state.seachResult = data;
  },

};

const actions = {
  init_all_cv_file: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "/api/v1/admin/getAllCV"
      )
      .then((res) => {
        // console.log(res.data);
        commit("SET_ALL_CV_FILES", res.data.result);
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

  init_file_undo_number: ({ commit },) => {
    // Vue.prototype.$http
    axios
      .get(
        "/api/v1/users/File_number/"+localStorage.getItem("user-id")
          // localStorage.getItem("user-station")
      )
      .then((res) => {
        // console.log("kakaooppppp",res.data.fileNumber);
        commit("SET_UNSEE_FILE_NUMBER", res.data.fileNumber);
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
