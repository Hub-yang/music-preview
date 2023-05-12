// 不需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';

const commonRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    meta: {
      title: 'index',
      icon: '',
    },
    component: () => import('@/pages/Index.vue'),
  },
];

export default commonRoutes;
