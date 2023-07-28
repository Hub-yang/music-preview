// 不需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';

const commonRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'paly music',
      icon: '',
    },
    component: () => import('@/pages/Home.vue'),
  },
];

export default commonRoutes;
