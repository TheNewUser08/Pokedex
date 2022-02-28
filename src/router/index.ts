import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('/@/pages/Index.vue'),
    name: "Index",
    props: (route: any) => ({ pages: route.query.q })
  },
  {
    path: '/:id',
    component: () => import('/@/pages/PokemonPage.vue'),
    name: 'pokemonPage',
  },
];

export const Router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createWebHistory(),
  routes,
});