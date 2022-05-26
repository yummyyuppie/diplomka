import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Specialities from "../views/Specialities.vue";
import Stories from "@/views/Stories";
import Speciality from "@/views/Speciality";
import Results from "@/views/Results";
import PageNotFound from "@/views/PageNotFound";
import EducationalProgram from "@/views/EducationalProgram";
import Story from "@/views/Story";
import CreateStory from '@/views/CreateStory'
import AdminPanel from "@/views/AdminPanel";
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
      headerColor: 'light'
    },
  },
  {
    path: "/stories/:id",
    name: "Story",
    component: Story,
    meta: {
      layout: "DefaultLayout",
      headerColor: 'light'
    },
    props: true
  },
  {
    path: '/create-story',
    name: "CreateStory",
    component: CreateStory,
    meta: {
      layout: "HeaderLayout",
      headerColor: 'light'
    }
  },
  {
    path: '/login',
    name: "Login",
    component: AdminPanel,
    meta: {
      layout: "EmptyLayout",
      headerColor: 'light'
    }
  },
  {
    path: '/register',
    name: "Register",
    component: AdminPanel,
    meta: {
      layout: "EmptyLayout",
      headerColor: 'light'
    }
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
    props: true
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
