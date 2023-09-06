import axios from "axios";
// import Vue from "vue";
const state = {
  allPaiefiles: [],
  allUserPaiefiles: [],
  userPaieConfig:"",
  compagniePaieConfig:"",
  compagnieInfo:"",
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

  UserPaieConfig: (state) => {
    let files;
    if (state.userPaieConfig == undefined) {
      files = ""
    } else {
      files = state.userPaieConfig;
    }
    
    return files;
  },

  CompagniePaieConfig: (state) => {
    let files = state.compagniePaieConfig;

    return files;
  },

  CompagnieInfos: (state) => {
    let files = state.compagnieInfo;

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

  SET_USER_PAIE_CONFIG(state, data) {
    state.userPaieConfig = data;
  },

  SET_COMPAGNIE_PAIE_CONFIG(state, data) {
    state.compagniePaieConfig = data;
  },

  SET_COMPAGNIE_INFO(state, data) {
    state.compagnieInfo = data;
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

  init_user_paie_config: ({ commit}, salared) => {
    // Vue.prototype.$http
    // console.log("uoier", salared);
    axios
      .get(
        "/api/v1/admin/get_oneUser_paieFile/"+salared
      )
      .then((res) => {
        // console.log(res.data.Paiefile[0]);
        commit("SET_USER_PAIE_CONFIG", res.data.Paiefile[0]);
      })
      .catch((error) => console.log(error));
  },

  init_compagnie_paie_config: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "/api/v1/admin/get_config_paie_compagnie/"+localStorage.getItem("user-compagnie")
      )
      .then((res) => {
        // console.log(res.data.result);
        commit("SET_COMPAGNIE_PAIE_CONFIG", res.data.result);
      })
      .catch((error) => console.log(error));
  },

  init_compagnie_info: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "/api/v1/admin/show_compagnies/"+localStorage.getItem("user-compagnie")
      )
      .then((res) => {
        commit("SET_COMPAGNIE_INFO", res.data.result[0]);
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
