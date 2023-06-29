import axios from "axios";

// import Vue from "vue";
const state = {
  chat_notifs: [],
  chat_massages: [],
};

const getters = {
  Chat_notifs: (state) => {
    let service = state.chat_notifs;
    return service;
  },
  Chat_massages: (state) => {
    let service = state.chat_massages;
    return service;
  },

};

const mutations = {
  SET_CHAT_NOTIF(state, data) {
    state.chat_notifs = data;
  },
  SET_CHAT_MESAGES(state, data) {
    state.chat_massages = data;
  },
};

const actions = {
  init_chat_notif: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "/api/v1/users/get_chat_notif/"+localStorage.getItem("user-id")
          // localStorage.getItem("user-station")
      )
      .then((res) => {
        // console.log(res.data.chat_notifs);
        commit("SET_CHAT_NOTIF", res.data.chat_notifs);
      })
      .catch((error) => console.log(error));
  },

  init_chat_message: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "/api/v1/users/get_chat_message/"+localStorage.getItem("user-id")
          // localStorage.getItem("user-station")
      )
      .then((res) => {
        console.log(res.data.chat_notifs);
        commit("SET_CHAT_MESAGES", res.data.chat_notifs);
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
