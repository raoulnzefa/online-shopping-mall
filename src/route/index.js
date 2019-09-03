import Vue from "vue";
import Router from "vue-router";
import { getToken } from "../util/cookies";
import whiteList from "../util/whitepath";

Vue.use(Router);

const routes = [
  {
    path: "/register",
    component: () => import("@/views/register/index.vue")
  },
  {
    path: "/login",
    component: () => import("@/views/login/index.vue")
  },

  {
    path: "/",
    component: () => import("@/layout"),
    redirect: "/home",
    children: [
      {
        path: "home",
        component: () => import("@/views/home/index.vue")
      },
      {
        path: "order",
        component: () => import("@/views/order/index.vue")
      },
      {
        path: "search",
        component: () => import("@/views/search/index.vue")
      }
    ]
  }
];

const route = new Router({
  mode: "history",
  routes
});

route.beforeEach((to, from, next) => {
  if (getToken()) {
    next();
  } else {
    // 白名单路径不需要重定向到登录页
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next({ path: "/login" });
    }
  }
});

export default route;
