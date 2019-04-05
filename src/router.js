import Vue from "vue";
import Router from "vue-router";
import HomePage from "./views/HomePage";
import CameraPage from "./views/CameraPage";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage
    },
    {
      path: "/camera",
      name: "CameraPage",
      component: CameraPage
    }
  ]
});
