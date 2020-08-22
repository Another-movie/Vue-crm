import Vue from "vue";
import App from "./App.vue";
import Vuelidate from "vuelidate";
import router from "./router";
import store from "./store";
import Paginate from 'vuejs-paginate'

// Directives
import tooltipDirective from './directives/tooltip.derictive'
// Fliters and plugins
import dateFilter from "./filters/date.filter";
import localizeFilter from "./filters/localize";

import curFilter from './filters/currencyFilter'
import messagePlugin from "./commands/message.plugin";

import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min.js";

// Global component
import Loader from './components/bars/Loader'

// Firebase
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

Vue.filter("date", dateFilter);
Vue.filter('currency', curFilter);
Vue.filter('localize', localizeFilter)

Vue.use(Vuelidate);
Vue.use(messagePlugin);

Vue.directive('tooltip', tooltipDirective)

Vue.component('Paginate', Paginate)
Vue.component("Loader", Loader);

firebase.initializeApp({
  apiKey: "AIzaSyAjY3WVtt-IsKuvtsFyI-4I7n852faQTmc",
  authDomain: "vue-crm-51694.firebaseapp.com",
  databaseURL: "https://vue-crm-51694.firebaseio.com",
  projectId: "vue-crm-51694",
  storageBucket: "vue-crm-51694.appspot.com",
  messagingSenderId: "972704077805",
  appId: "1:972704077805:web:c31524ea378a71100e39e4"
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
