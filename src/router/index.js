import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Specialities from "../views/Specialities.vue";
import Stories from "@/views/Stories";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      layout: 'DefaultLayout',
    },
  },
  {
    path: "/stories",
    name: "Stories",
    component: Stories,
    meta: {
      layout: 'DefaultLayout',
    },
  },
  {
    path: "/specialities",
    name: "Specialities",
    component: Specialities,
    meta: {
      layout: 'DefaultLayout',
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL || "http://localhost:8081",
  routes,
});

export default router;
