import Vue from 'vue/dist/vue.esm.js';
import router from "./router";
import store from "./store";
import App from "./App.vue";
import vuetify from './plugins/vuetify'

new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  vuetify,
  template: "<App/>"
});