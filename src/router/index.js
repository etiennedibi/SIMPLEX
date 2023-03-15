import Vue from "vue";
import VueRouter from "vue-router";
// import store from "../store";

import Dashboard from "../views/Dashboard.vue";
import RdvStory from "../views/rdvStory.vue";
import VisiteDeclaration from "../views/VisiteDeclaration.vue";

import TravelDeclaration from "../views/TravelDeclaration.vue";
import StaffList from "../views/staffList.vue";
import FicheEmploye from "../views/ficheEmploye.vue";


import TravelLuggage from "../views/TravelLuggageSheet.vue";
import lostObjectList from "../views/lostObjectList.vue";
import TravelStat from "../views/travelStat.vue";
import ExpeditionSheet from "../views/Expedition2Management.vue";
// import Withdrawalsheet from "../views/Expedition3withdrawal.vue";

import CongeDemande from "../views/congeDemande.vue";
import BilanConge from "../views/bilanConge.vue";
import Congemanagment from "../views/congemanagment.vue";
import CongeStory from "../views/congeStory.vue";


import Contract from "../views/contactManagment.vue";
import conge from "../views/congeManagment.vue";
import WorkManagment from "../views/workManagment.vue";
import ServiceManagment from "../views/serviceManagment.vue";


import Messagerie from "../views/messagerie.vue";
import param from "../views/param.vue";

import login from "../views/login.vue";
import abonnement from "../views/abonnementChekpage.vue";

Vue.use(VueRouter);

// const ifNotAuthenticated = (to, from, next) => {
//   if (!store.getters.isAuthenticated) {
//     next();
//     return;
//   }
//   next("/");
// };

// const ifAuthenticated = (to, from, next) => {
//   if (store.getters.isAuthenticated) {
//     next();
//     return;
//   }
//   next("/login");
// };

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    // beforeEnter: ifAuthenticated,
  },
  {
    path: "/Messagerie",
    name: "Messagerie",
    component: Messagerie,
  },
  {
    path: "/param",
    name: "param",
    component: param,
    // beforeEnter: ifAuthenticated,
  },
  {
    path: "/RdvStory",
    name: "RdvStory",
    component: RdvStory,
  },
  {
    path: "/TravelDeclaration",
    name: "TravelDeclaration",
    component: TravelDeclaration,
  },
  {
    path: "/Contract",
    name: "Contract",
    component: Contract,
  },
  {
    path: "/conge",
    name: "conge",
    component: conge,
  },
  {
    path: "/WorkManagment",
    name: "WorkManagment",
    component: WorkManagment,
  },
  {
    path: "/ServiceManagment",
    name: "ServiceManagment",
    component: ServiceManagment,
  },
  {
    path: "/VisiteDeclaration",
    name: "VisiteDeclaration",
    component: VisiteDeclaration,
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
  },
  {
    path: "/FicheEmploye",
    name: "FicheEmploye",
    component: FicheEmploye,
  },
  {
    path: "/CongeDemande",
    name: "CongeDemande",
    component: CongeDemande,
  },
  {
    path: "/BilanConge",
    name: "BilanConge",
    component: BilanConge,
  },
  {
    path: "/Congemanagment",
    name: "Congemanagment",
    component: Congemanagment,
  },
  {
    path: "/CongeStory",
    name: "CongeStory",
    component: CongeStory,
  },
  {
    path: "/login",
    name: "login",
    component: login,
    // beforeEnter: ifNotAuthenticated,
    meta: {
      plainLayout: true,
    },
  },
  {
    path: "/abonnement",
    name: "abonnement",
    component: abonnement,
    // beforeEnter: ifNotAuthenticated,
    meta: {
      plainLayout: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
