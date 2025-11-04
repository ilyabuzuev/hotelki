import type { RouteRecordRaw } from 'vue-router';
import { RouteName } from '../enums/routeName';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/app/layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/index'),
        name: RouteName.HOME,
      },
      {
        path: ':category',
        component: () => import('pages/index'),
        name: RouteName.CATEGORY,
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/not-found'),
  },
];

export default routes;
