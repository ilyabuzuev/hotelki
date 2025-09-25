import { defineRouter } from '#q-app/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';
import routes from './routes';
import { useCategoryStore } from 'src/features/category/store/categoryStore';
import { RouteName } from '../enums/routeName';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default defineRouter(function (/* { store, ssrContext } */) {
  const category = useCategoryStore();

  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
      ? createWebHistory
      : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  Router.beforeEach((to, from, next) => {
    if (to.name === RouteName.HOME && from.name === RouteName.CATEGORY) {
      category.reset();
    }

    if (to.name === RouteName.CATEGORY) {
      const param = getParam(to.params.category);

      if (param) {
        category.setCurrent(param);
      }
    }

    next();
  });

  return Router;
});

function getParam(param: string | string[] | undefined): string | undefined {
  if (!param) return;
  if (Array.isArray(param)) return param[0];
  return param;
}
