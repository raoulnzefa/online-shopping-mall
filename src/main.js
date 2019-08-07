import Vue from "vue";
import App from "./App.vue";
import router from "./route/index";
import store from "./store/index";
import "./less/index.less";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/icons";

Vue.use(Element);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
