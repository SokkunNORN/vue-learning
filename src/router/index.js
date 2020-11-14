import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { authenticated } from "../utils/cache-util";

Vue.use(VueRouter);

export const lazyView = name => () => import(`../views/${name}.vue`);

const routes = [
  {
    path: "/",
    name: "redirect.guard",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: lazyView("auth/Login")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const login = () => next({ path: "/login" });

  if (to.name !== "Login" && !authenticated()) login();
  if (to.name == "Login" && authenticated()) next(from.fullPath);
  else next();
});

export default router;
