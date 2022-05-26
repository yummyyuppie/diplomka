import Vue from "vue";
import Vuex from "vuex";
import { loader } from "./loader";
import { helpers } from "./helpers";
import { stories } from "@/store/stories";
import { notifications } from "@/store/notifications";
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    loader,
    helpers,
    stories,
    notifications
  },
});
