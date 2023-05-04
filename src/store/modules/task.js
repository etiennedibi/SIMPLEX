import axios from "axios";
// import Vue from "vue";
const state = {
  oneProjectTasks: [],
  oneProjectTasksEmploy: [],
  autoexecuteTask: [],
  undoTaskNumber: '',
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
  OneProjectTasksEmploye: (state) => {
    let project = state.oneProjectTasksEmploy;

    return project;

  },
  AutoexecuteTasks: (state) => {
    let project = state.autoexecuteTask;

    return project;

  },
  UndoTaskNumber: (state) => {
    let project = state.undoTaskNumber;

    return project;

  },
};

const mutations = {
  SET_ONE_PROJECT_TASK(state, data) {
    state.oneProjectTasks = data;
  },
  SET_ONE_PROJECT_TASK_EMPLOYE(state, data) {
    state.oneProjectTasksEmploy = data;
  },
  SET_AUTO_EXECUTE(state, data) {
    state.autoexecuteTask = data;
  },
  SET_UNDO_TASK_NUMBER(state, data) {
    state.undoTaskNumber = data;
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

  init_one_project_task_employe: ({ commit }, project_id) => {
    // Vue.prototype.$http
    //console.log("ppppppp::::",project_id);
    axios
      .get(
        "/api/v1/admin/index_taches_employe/"+project_id+"/"+localStorage.getItem("user-id")
          // localStorage.getItem("user-station")
      )
      .then((res) => {
        commit("SET_ONE_PROJECT_TASK_EMPLOYE", res.data.taches);
      })
      .catch((error) => console.log(error));
  },

  init_auto_execute: ({ commit },) => {
    // Vue.prototype.$http
    axios
      .get(
        "/api/v1/admin/index_taches_auto_execute/"+localStorage.getItem("user-id")
          // localStorage.getItem("user-station")
      )
      .then((res) => {
        commit("SET_AUTO_EXECUTE", res.data.taches);
      })
      .catch((error) => console.log(error));
  },

  init_task_undo_number: ({ commit },) => {
    // Vue.prototype.$http
    axios
      .get(
        "/api/v1/admin/Task_number/"+localStorage.getItem("user-id")
          // localStorage.getItem("user-station")
      )
      .then((res) => {
        console.log("kaka",res.data.TaskNumber);
        commit("SET_UNDO_TASK_NUMBER", res.data.TaskNumber);
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
