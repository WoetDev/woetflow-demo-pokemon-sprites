import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/styles/index.css";
import VueTailwind from "vue-tailwind";
import { settings } from "@/plugins/vue-tailwind.js";
import axios from "axios";
import VueAxios from "vue-axios";
import VueMeta from "vue-meta";
import VueJsonLD from "vue-jsonld";

Vue.config.productionTip = false;

Vue.use(VueTailwind, settings);
Vue.use(VueAxios, axios);
Vue.use(VueMeta);
Vue.use(VueJsonLD);

new Vue({
  router,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered"))
}).$mount("#app");
