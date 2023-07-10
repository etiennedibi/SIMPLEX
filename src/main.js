import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./plugins/apexcharts";
import axios from "axios";
import VueAxios from "vue-axios";
// import socketio from 'socket.io';
// import VueSocketIO from 'vue-socket.io';
import "./assets/styles/global.css";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);


axios.defaults.baseURL = "https://mino-api.blooraid-consortium.com";
// pour garder l'autorisation dans le header, lorsqu'il y a rechargement de page. parcequ'au recharegment
// le header est suprimé, mais pas le localeStorage  "https://mino-api.blooraid-consortium.com"
const token = localStorage.getItem("user-token");
if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}


new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
