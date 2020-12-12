import { createRouter, createWebHashHistory } from 'vue-router';
import Authentication from './Authentication.vue';

const routes = [{ path: '/auth', component: Authentication }];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
