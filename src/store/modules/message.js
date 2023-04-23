import axios from "axios";
// import Vue from "vue";
const state = {
  messages: [],
  lastMesage:[],

};

const getters = {
  Messages: (state) => {
    let message = state.messages;
    return message;
  },
  LastMessages: (state) => {
    let message = state.lastMesage[0];
    return message;
  },
};

const mutations = {
  SET_MESSAGE(state, data) {
    state.messages = data.result;
    state.lastMesage = data.last_communique;
  },
  UPDATE_VIEW_MESSAGE() {
    
  },
};

const actions = {
  init_message: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "admin/getAllCommunique/"+localStorage.getItem("user-compagnie") 
      )
      .then((res) => {
        commit("SET_MESSAGE", res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  },
  message_view: ({ commit }, message_id) => {
    console.log('lo', message_id);
    // Vue.prototype.$http
    axios
      .put(
        "message/view/update/" +
        message_id
      )
      .then((res) => {
        console.log(res.data.data);
        commit("UPDATE_VIEW_MESSAGE");
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
