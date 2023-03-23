import { createRouter, createWebHistory } from "vue-router";

// PAGES
import HomePage from '../pages/HomePage.vue';
import GamesPage from '../pages/GamesPage.vue';
import ContactPage from '../pages/ContactPage.vue';
import GameDetail from '../pages/GameDetail.vue';

// ROUTES

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/games', name: 'games', component: GamesPage },
    { path: '/contact', name: 'contact_page', component: ContactPage },
    { path: '/games/:slug', name: 'game-detail', component: GameDetail },
  ]
});

export { router };