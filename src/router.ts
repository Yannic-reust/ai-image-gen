import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";
import Home from "./views/Home/Home.vue";
import DetailSearch from "./views/DetailSearch/DetailSearch.vue";
import Search from "./views/Search/Search.vue";




const routes: Array<RouteRecordRaw> =  [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/detailSearch",
    name: "detailSearch",
    component: DetailSearch,
  },
  {
    path: "/Search",
    name: "Search",
    component: Search,
  },
  
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
