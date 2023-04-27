import axios from "axios";
// import Vue from "vue";
const state = {
  projects: [],
  project_admins: [],
};

const getters = {
  Projects: (state) => {
    // let project = state.projects;

    // return project;
    let project = state.projects.map((projet) => {
      var options = { year: 'numeric', month: 'numeric', day: 'numeric' };
      var dateCreated_at = new Date(projet.created_at);
      projet.created_at_view = dateCreated_at.toLocaleDateString("fr", options)

      const dateDebut = projet.start_at.split('T')
      const dateFin = projet.finish_at.split('T')
      projet.start_at = dateDebut[0]
      projet.finish_at = dateFin[0]
      return projet
    });
    return project;

  },
  ProjectAdmins: (state) => {
    let project = state.project_admins.map((projet) => {
      var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      var dateDebut = new Date(projet.start_at);
      var dateFin = new Date(projet.finish_at);
      var dateCreated_at = new Date(projet.created_at);

      projet.start_at = dateDebut.toLocaleDateString("fr", options)
      projet.finish_at = dateFin.toLocaleDateString("fr", options)
      projet.created_at = dateCreated_at.toLocaleDateString("fr", options)

      return projet
    });
    console.log();
    return project;
  },

};

const mutations = {
  SET_PROJECT(state, data) {
    state.projects = data;
  },
  SET_PROJECT_ADMIN(state, data) {
    state.project_admins = data;
  },

};

const actions = {
  init_project: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "/api/v1/admin/getprojects/"+localStorage.getItem("user-id")
          // localStorage.getItem("user-station")
      )
      .then((res) => {
        commit("SET_PROJECT", res.data);
      })
      .catch((error) => console.log(error));
  },

  init_project_admin: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "/api/v1/admin/getprojects"+localStorage.getItem("user-id")
          // localStorage.getItem("user-station")
      )
      .then((res) => {
        commit("SET_PROJECT_ADMIN", res.data);
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
