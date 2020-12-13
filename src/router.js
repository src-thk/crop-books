import { createRouter, createWebHashHistory } from 'vue-router';
import Authentication from './Authentication.vue';
import Home from './components/Home.vue';
import Listings from './Listing.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/auth', component: Authentication },
  { path: '/listings', component: Listings },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
