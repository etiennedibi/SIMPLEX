import axios from "axios";
// import Vue from "vue";
const state = {
  oneProjectTasks: [],
};

const getters = {
  OneProjectTasks: (state) => {
    let project = state.oneProjectTasks;

    return project;
    // let project = state.projects.map((projet) => {
    //   var options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    //   var dateCreated_at = new Date(projet.created_at);
    //   projet.created_at_view = dateCreated_at.toLocaleDateString("fr", options)

    //   const dateDebut = projet.start_at.split('T')
    //   const dateFin = projet.finish_at.split('T')
    //   projet.start_at = dateDebut[0]
    //   projet.finish_at = dateFin[0]
    //   return projet
    // });
    // return project;

  },
};

const mutations = {
  SET_ONE_PROJECT_TASK(state, data) {
    state.oneProjectTasks = data;
  },

};

const actions = {
  init_one_project_task: ({ commit }, project_id) => {
    // Vue.prototype.$http
    axios
      .get(
        "/api/v1/admin/index_taches_admin/"+project_id
          // localStorage.getItem("user-station")
      )
      .then((res) => {
        commit("SET_ONE_PROJECT_TASK", res.data.taches);
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
