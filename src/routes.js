import { createRouter, createWebHistory } from "vue-router";

function lazyLoad(view) {
  return () => import(`./views/${view}.vue`);
}

const routes = [
  { path: "/", name: "home", component: lazyLoad("Home") },
  { path: "/cats", name: "cats", component: lazyLoad("Cats") },
  { path: "/dogs", name: "dogs", component: lazyLoad("Dogs") },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
