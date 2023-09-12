import Vue from "vue";
import Vuex from "vuex";

import travel from "./modules/travel";
import lostObjet from "./modules/lostObjet";
import expedition from "./modules/expedition";
import senders from "./modules/senders";
import rating from "./modules/ratings";
import auth from "./modules/auth";
import gestion from "./modules/gestion";
import message from "./modules/message";
// import checkabonnement from "./modules/checkabonnement";

import visites from "./modules/visites";
import project from "./modules/project";
import task from "./modules/task";
import flies from "./modules/flies";
import contract from "./modules/contract";
import service from "./modules/service";
import work from "./modules/work";
import conge from "./modules/conge";
import disponibility from "./modules/disponibility";
import user from "./modules/user";
import chat from "./modules/chat";
import cvfile from "./modules/cvfile";
import paieFile from "./modules/paieFile";





Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    travelcomponentKey: 0,
    luggagecomponentKey: 1,
    lostObjetcomponentKey: 0,
    sendercomponentKey: 1,
    expeditioncomponentKey: 1,
    visitcomponentKey1: 1,

    MessageListRerender:1,

    // For email response
    ResponseTopic:"",
    response_of_id: 0,

    // FOR CHAT
    AllConncersationMessage :"",
    AllNotification: "",

  },
  getters: {},
  mutations: {},
  actions: {},

  modules: {
    travel,
    lostObjet,
    rating,
    expedition,
    senders,
    auth,
    gestion,
    message,
    // checkabonnement,

    visites,
    project,
    task,
    flies,
    contract,
    service,
    work,
    conge,
    user,
    disponibility,
    chat,
    cvfile,
    paieFile,
  },
});
