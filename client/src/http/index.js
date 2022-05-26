import axios from "axios";
import { store } from "@/store";

const $host = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  showLoader: true,
});

$host.interceptors.request.use(
  (config) => {
    if (config.showLoader) {
      store.dispatch("loader/pending");
    }
    return config;
  },
  (error) => {
    if (error.config.showLoader) {
      store.dispatch("loader/done");
    }
    return Promise.reject(error);
  }
);
$host.interceptors.response.use(
  (response) => {
    if (response.config.showLoader) {
      store.dispatch("loader/done");
    }

    return response;
  },
  (error) => {
    let response = error.response;

    if (response.config.showLoader) {
      store.dispatch("loader/done");
    }
    return Promise.reject(error);
  }
);

export { $host };
