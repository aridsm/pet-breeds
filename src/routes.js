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
        component: lazyLoad("BreedsList"),
      },
      {
        path: ":breed",
        component: lazyLoad("BreedDetails"),
      },
    ],
  },
  { path: "/results", name: "results", component: lazyLoad("Results") },
  { path: "/:notFound(.*)", redirect: "/" },
];

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});
