import axios from "axios";
// import Vue from "vue";
const state = {
  allUserfiles: [],
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

};

const mutations = {
  SET_ALL_USER_FILES(state, data) {
    state.allUserfiles = data;
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

};

export default {
  state,
  mutations,
  actions,
  getters,
};
