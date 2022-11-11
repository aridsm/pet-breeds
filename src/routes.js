import { createRouter, createWebHistory } from "vue-router";

function lazyLoad(view) {
  return () => import(`./views/${view}.vue`);
}

const routes = [
  { path: "/", name: "home", component: lazyLoad("Home") },
  {
    path: "/:pet(dogs|cats)",
    component: lazyLoad("Pets"),
    children: [
      {
        path: "",
        component: lazyLoad("PetsList"),
      },
      {
        path: ":breed",
        component: lazyLoad("BreedDetails"),
      },
    ],
  },
  /*{
    path: "/cats",
    name: "cats",
    component: lazyLoad("Pets"),
    children: [
      {
        path: "",
        name: "cats",
        component: lazyLoad("PetsList"),
      },
      {
        path: ":breed",
        name: "breed",
        component: lazyLoad("BreedDetails"),
        props: true,
      },
    ],
  },*/
  { path: "/results", name: "results", component: lazyLoad("Results") },
];

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});
