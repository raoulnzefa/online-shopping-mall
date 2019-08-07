import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import trolley from "./modules/trolley";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    trolley
  }
});
