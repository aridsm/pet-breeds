import { createRouter, createWebHistory } from "vue-router";

function lazyLoad(view) {
  return () => import(`./views/${view}.vue`);
}

const routes = [
  { path: "/", name: "home", component: lazyLoad("Home") },
  { path: "/cats", name: "cats", component: lazyLoad("PetsList") },
  { path: "/dogs", name: "dogs", component: lazyLoad("PetsList") },
  {
    path: "/dogs/:breed",
    name: "breed",
    component: lazyLoad("BreedDetails"),
    props: true,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});
