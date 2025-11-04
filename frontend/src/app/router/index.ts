import { defineRouter } from '#q-app/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';
import routes from './routes';
import { useCategoryStore } from 'src/entities/category';
import { useWishListStore } from 'src/entities/wish-list';
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
  const categoryStore = useCategoryStore();
  const wishList = useWishListStore();

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

  Router.beforeEach(async (to, from, next) => {
    // console.log('test');

    if (to.name === RouteName.HOME && from.name === RouteName.CATEGORY) {
      wishList.reset();
      categoryStore.reset();
    }

    if (to.name === RouteName.CATEGORY) {
      const param = getParam(to.params.category);

      // console.log(param);

      if (param) {
        await wishList.fetchByType(param);

        categoryStore.setCurrent({
          id: wishList.current!.categoryId,
          name: wishList.current!.name,
          value: wishList.current!.categoryType,
        });
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
