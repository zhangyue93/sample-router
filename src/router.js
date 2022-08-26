import Vue from 'vue/dist/vue.esm.js';
import VueRouter from "vue-router";
import Top from "./components/Top.vue";
import MemoForm from "./components/MemoForm.vue";
import store from "./store";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Top
  },
  {
    path: "/memo",
    component: MemoForm,
    beforeEnter(to, from, next) {
      if (store.getters["name"] === "") {
        next("/");
      } else {
        next();
      }
    }
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;