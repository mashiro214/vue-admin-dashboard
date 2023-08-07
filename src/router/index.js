import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import TeamView from "../views/TeamView.vue";
import SignInView from "../views/SignInFlow/SignInView";
import SignInRequest from "../views/SignInFlow/SignInRequest";
import SignInRecover from "../views/SignInFlow/SignInRecover";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/team",
    name: "team",
    component: TeamView,
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

export default router;
