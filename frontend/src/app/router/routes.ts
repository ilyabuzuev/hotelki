import type { RouteRecordRaw } from 'vue-router';
import { RouteName } from '../enums/routeName';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue'),
        name: RouteName.HOME,
      },
      {
        path: ':category',
        component: () => import('pages/IndexPage.vue'),
        name: RouteName.CATEGORY,
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFoundPage.vue'),
  },
];

export default routes;
