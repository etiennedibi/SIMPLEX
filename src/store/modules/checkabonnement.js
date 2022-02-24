// import axios from "axios";
import Vue from "vue";

const state = {
};

const getters = {
 
};

const mutations = {
  SET_CHECK: () => {
    
  },
};


const actions = {
  init_check: ({ commit }) => {
    Vue.prototype.$http
      .get(
        "http://127.0.0.1:3333/station/check/" +
          localStorage.getItem("user-station")
      )
      .then((res) => {
        commit("SET_CHECK", res.data.TheComapany);
        const TheComapany = res.data.TheComapany; //The activation state
        console.log(TheComapany);
        localStorage.setItem("Comapany-activation_state", TheComapany.activation_state);
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
