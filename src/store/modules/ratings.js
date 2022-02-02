import axios from "axios";
// import Vue from 'vue'
const state = {
  ratings: {},
};

const getters = {
  Ratings: (state) => {
    let rates = state.ratings.RetingFinalGet;
    let ratings = {rates: [], station: []};
    for (let index = 0; index < rates.length; index++) {
      ratings.rates.push(rates[index].TotalRate);
      ratings.station.push(rates[index].city);
    }
    console.log(ratings);
    return ratings;
  },
};

const mutations = {
  SET_RATING(state, data) {
    state.ratings = data;
  },
};

const actions = {
  init_ratings: ({ commit }) => {
    axios
      .get("/rating/station/" +
      localStorage.getItem("user-station"))
      .then((res) => {
        commit("SET_RATING", res.data.data);
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
