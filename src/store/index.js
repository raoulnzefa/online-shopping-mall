import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import trolley from "./modules/trolley";
import city from "./modules/city";
import search from "./modules/search";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    trolley,
    city,
    search
  }
});
