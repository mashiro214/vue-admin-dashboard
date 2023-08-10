import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import TeamView from "../views/TeamView.vue";
import ManageView from "../views/ManageView.vue";
import SignInView from "../views/SignInFlow/SignInView";
import SignInRequest from "../views/SignInFlow/SignInRequest";
import SignInRecover from "../views/SignInFlow/SignInRecover";
import * as netlifyIdentityWidget from "netlify-identity-widget";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    // 登录可见
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/team",
    name: "team",
    component: TeamView,
    // 登录可见
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/manage",
    name: "manage",
    component: ManageView,
    // 登录可见
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/signin",
    name: "signin",
    component: SignInView,
  },
  {
    path: "/request",
    name: "request",
    component: SignInRequest,
  },
  {
    path: "/recover",
    name: "recover",
    component: SignInRecover,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// 页面重定向
router.beforeEach((to, from, next) => {
  const currentUser = netlifyIdentityWidget.currentUser();
  const requiresAuth = to.matched.some((record) => {
    return record.meta.requiresAuth;
  });
  // 如果是登录可见的页面并且用户未登录，重定向到signin
  if (requiresAuth && !currentUser) {
    next("signin");
  } else {
    next();
  }
});

export default router;
