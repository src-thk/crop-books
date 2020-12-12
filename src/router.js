import { createRouter, createWebHashHistory } from 'vue-router';
import Authentication from './Authentication.vue';
import Home from './components/Home.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/auth', component: Authentication },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
