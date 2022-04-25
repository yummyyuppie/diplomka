import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Specialities from "../views/Specialities.vue";
import Stories from "@/views/Stories";
import Speciality from "@/views/Speciality";
import Results from "@/views/Results";
import PageNotFound from "@/views/PageNotFound";
import EducationalProgram from "@/views/EducationalProgram";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      layout: "DefaultLayout",
    },
  },
  {
    path: "/results",
    name: "Results",
    component: Results,
    props: (route) => ({
      s1: route.query.s1,
      s2: route.query.s2,
      p: route.query.p,
      q: route.query.q,
    }),
    meta: {
      layout: "DefaultLayout",
    },
  },
  {
    path: "/stories",
    name: "Stories",
    component: Stories,
    meta: {
      layout: "DefaultLayout",
    },
  },
  {
    path: "/specialities",
    name: "Specialities",
    component: Specialities,
    meta: {
      layout: "DefaultLayout",
    },
  },
  {
    path: "/specialities/:id",
    name: "Speciality",
    component: Speciality,
    meta: {
      layout: "DefaultLayout",
    },
  },
  {
    path: "/educationalProgram/:id",
    name: "EducationalProgram",
    component: EducationalProgram,
  },
  {
    path: "/404",
    name: "PageNotFound",
    component: PageNotFound,
  },
  {
    path: "*",
    beforeEnter: (to, from, next) => {
      next("/404");
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL || "http://localhost:8081",
  routes,
});

export default router;
