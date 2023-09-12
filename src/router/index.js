import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

import Dashboard from "../views/Dashboard.vue";

import RdvStory from "../views/rdvStory.vue";
import VisiteDeclaration from "../views/VisiteDeclaration.vue";

import TaskDeclaration from "../views/TaskDeclaration.vue";
import OwnTaskDeclaration from "../views/OwnTaskDeclaration.vue";
import taskStory from "../views/taskStory.vue";
import UserTaskManage from "../views/UserTaskManage.vue";
import fileManage from "../views/fileManage.vue";
import UserFileManage from "../views/UserFileManage.vue";
import fileStoty from "../views/fileStoty.vue";



import AddEmployer from "../views/AddEmployer.vue";
import StaffList from "../views/staffList.vue";
import FicheEmploye from "../views/ficheEmploye.vue";
import UserPaieFile from "../views/UserPaieFile.vue";
import PaieStoty from "../views/PaieStoty.vue";
import AddPaie from "../views/AddPaie.vue";
import CVManage from "../views/cvManage.vue";


import TravelLuggage from "../views/TravelLuggageSheet.vue";
import lostObjectList from "../views/lostObjectList.vue";
import TravelStat from "../views/travelStat.vue";
import ExpeditionSheet from "../views/Expedition2Management.vue";
// import Withdrawalsheet from "../views/Expedition3withdrawal.vue";

import CongeDemande from "../views/congeDemande.vue";
import BilanConge from "../views/bilanConge.vue";
import Disponibilite from "../views/Disponibilite.vue";
import BilanAbsence from "../views/bilanAbsence.vue";
import Congemanagment from "../views/congemanagment.vue";
import CongeStory from "../views/congeStory.vue";


import Contract from "../views/contactManagment.vue";
import conge from "../views/congeTypeManagment.vue";
import WorkManagment from "../views/workManagment.vue";
import ServiceManagment from "../views/serviceManagment.vue";


import Messagerie from "../views/messagerie.vue";
import param from "../views/param.vue";
import chat from "../views/chat.vue";

import login from "../views/login.vue";
import passwordRecupBegin from "../views/passwordRecupBegin.vue";
import passwordRecup from "../views/passwordRecup.vue";

Vue.use(VueRouter);

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }
  next("/");
};

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }
  next("/login");
};

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/Messagerie",
    name: "Messagerie",
    component: Messagerie,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/chat",
    name: "chat",
    component: chat,
    beforeEnter: ifAuthenticated,
    meta: {
      plainLayout: true,
    }
  },
  {
    path: "/param",
    name: "param",
    component: param,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/RdvStory",
    name: "RdvStory",
    component: RdvStory,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/AddEmployer",
    name: "AddEmployer",
    component: AddEmployer,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/Contract",
    name: "Contract",
    component: Contract,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/congeType",
    name: "congeType",
    component: conge,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/WorkManagment",
    name: "WorkManagment",
    component: WorkManagment,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/ServiceManagment",
    name: "ServiceManagment",
    component: ServiceManagment,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/VisiteDeclaration",
    name: "VisiteDeclaration",
    component: VisiteDeclaration,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/TaskDeclaration",
    name: "TaskDeclaration",
    component: TaskDeclaration,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/OwnTaskDeclaration",
    name: "OwnTaskDeclaration",
    component: OwnTaskDeclaration,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/taskStory",
    name: "taskStory",
    component: taskStory,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/UserTaskManage",
    name: "UserTaskManage",
    component: UserTaskManage,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/FileManage",
    name: "FileManage",
    component: fileManage,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/UserFileManage",
    name: "UserFileManage",
    component: UserFileManage,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/fileStoty",
    name: "fileStoty",
    component: fileStoty,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/lostObjectList",
    name: "lostObjectList",
    component: lostObjectList,
  },
  {
    path: "/TravelStat",
    name: "TravelStat",
    component: TravelStat,
  },
  {
    path: "/ExpeditionSheet",
    name: "ExpeditionSheet",
    component: ExpeditionSheet,
  },
  {
    path: "/TravelLuggage",
    name: "TravelLuggage",
    component: TravelLuggage,
  },
  {
    path: "/StaffList",
    name: "StaffList",
    component: StaffList,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/FicheEmploye",
    name: "FicheEmploye",
    component: FicheEmploye,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/UserPaieFile",
    name: "UserPaieFile",
    component: UserPaieFile,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/PaieStoty",
    name: "PaieStoty",
    component: PaieStoty,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/AddPaie",
    name: "AddPaie",
    component: AddPaie,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/CVManage",
    name: "CVManage",
    component: CVManage,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/CongeDemande",
    name: "CongeDemande",
    component: CongeDemande,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/BilanConge",
    name: "BilanConge",
    component: BilanConge,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/Congemanagment",
    name: "Congemanagment",
    component: Congemanagment,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/CongeStory",
    name: "CongeStory",
    component: CongeStory,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/BilanAbsence",
    name: "BilanAbsence",
    component: BilanAbsence,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/Disponibilite",
    name: "Disponibilite",
    component: Disponibilite,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/login",
    name: "login",
    component: login,
    beforeEnter: ifNotAuthenticated,
    meta: {
      plainLayout: true,
    },
  },
  {
    path: "/passwordRecupBegin",
    name: "passwordRecupBegin",
    component: passwordRecupBegin,
    beforeEnter: ifNotAuthenticated,
    meta: {
      plainLayout: true,
    },
  },
  {
    path: "/passwordRecup",
    name: "passwordRecup",
    component: passwordRecup,
    beforeEnter: ifNotAuthenticated,
    meta: {
      plainLayout: true,
    },
  },
  // {
  //   path: "/abonnement",
  //   name: "abonnement",
  //   component: abonnement,
  //   beforeEnter: ifNotAuthenticated,
  //   meta: {
  //     plainLayout: true,
  //   },
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
