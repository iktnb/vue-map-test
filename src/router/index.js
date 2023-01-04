import { createWebHistory, createRouter } from "vue-router";
import Posts from "../views/Posts.vue";
import Home from "../views/Home.vue";
import MapView from "../views/MapView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/posts",
    name: "Posts",
    component: Posts,
  },
  {
    path: "/map",
    name: "Map",
    component: MapView,
  },
  {
    path: "/*",
    redirect: "Home",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
