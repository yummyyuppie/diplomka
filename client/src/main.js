import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "@/store";
import { i18n } from "@/plugins/i18n";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight, faEye, faArrowRotateRight, faCheckDouble, faImage, faXmark, faArrowUp, faUser, faKey, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faAngleRight,
  faEye,
  faArrowRotateRight,
  faCheckDouble,
  faImage,
  faXmark,
  faArrowUp,
  faUser,
  faKey,
  faRightToBracket
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
