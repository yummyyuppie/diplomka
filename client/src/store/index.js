import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const getDefaultState = () => {
  return {
    subjects: [
      {
        text: "Математика",
        value: "math",
      },
      {
        text: "Физика",
        value: "physics",
      },
      {
        text: "Химия",
        value: "chemistry",
      },
      {
        text: "География",
        value: "geography",
      },
      {
        text: "Биология",
        value: "biology",
      },
    ],
  };
};
export const store = new Vuex.Store({
  state: getDefaultState(),
  getters: {
    subjects: (s) => s.subjects,
  },
  mutations: {},
  actions: {},
});
