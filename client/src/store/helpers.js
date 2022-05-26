import { fetchSubjectsAPI } from "../http/infoAPI";
const getDefaultState = () => {
  return {
    subjects: [],
    markDownRules: [
      {title: 'From h1 to h6', rule: '# Heading -> ###### Heading'},
      {title: 'Blockquote', rule: '> Your Quote'},
      {title: 'Image', rule: '![image alt](http://image_url.com)'},
      {title: 'Link', rule: '[Link Text](http://your_link.com)'}
    ]
  };
};
export const helpers = {
  namespaced: true,
  state: getDefaultState(),
  getters: {
    subjects: (s) => (subject) => {
      switch (subject) {
        case "Математика":
          return [
            { value: "Физика", text: "Физика" },
            { value: "География", text: "География" },
          ];
        case 'Физика':
          return [
            { value: "Математика", text: "Математика" },
            { value: "Химия", text: "Химия" },
          ];
        case 'Биология':
          return [
            { value: "Химия", text: "Химия" },
            { value: "География", text: "География" },
          ];
        case 'География':
          return [
            { value: "Математика", text: "Математика" },
            { value: "Биология", text: "Биология" },
            { value: "Иностранный язык", text: "Иностранный язык" },
            { value: "Всемирная история", text: "Всемирная история" },
          ];
        case 'Химия':
          return [
            { value: "Физика", text: "Физика" },
            { value: "Биология", text: "Биология" },
          ];
        case 'Иностранный язык':
          return [
            { value: "Всемирная история", text: "Всемирная история" },
            { value: "География", text: "География" },
          ];
        case 'Всемирная история':
          return [
            { value: "Человек.Общество.Право", text: "Человек.Общество.Право" },
            { value: "Иностранный язык", text: "Иностранный язык" },
            { value: "География", text: "География" },
          ];
        case 'Казахский язык':
          return [
            { value: "Казахская литература", text: "Казахская литература" },
          ];
        case 'Казахская литература':
          return [
            { value: "Казахский язык", text: "Казахский язык" },
          ];
        case 'Русский язык':
          return [
            { value: "Русская литература", text: "Русская литература" },
          ];
        case 'Русская литература':
          return [
            { value: "Русский язык", text: "Русский язык" },
          ];
        case 'Человек.Общество.Право':
          return [
            { value: "Всемирная история", text: "Всемирная история" },
          ];
        case 'Творческий экзамен':
          return [
            { value: "Творческий экзамен", text: "Творческий экзамен" },
          ];
        default:
          return s.subjects.map(e=> {return {value: e.subject_name_ru, text: e.subject_name_ru}});
      }
    },
    markDownRules: (s) => s.markDownRules
  },
  mutations: {
    setSubjects(state, payload) {
      state.subjects = payload;
    },
  },
  actions: {
    fetchSubjects({ commit }) {
      fetchSubjectsAPI().then((data) => commit("setSubjects", data.data));
    },
  },
};
