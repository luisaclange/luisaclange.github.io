import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: 'home',
    component: () => import('pages/IndexPage.vue')
  }
];

export default routes;
