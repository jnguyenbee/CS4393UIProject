import Vue from 'vue';
import Router from 'vue-router';
// import Hello from '@/components/Hello'

import HomeRoutes from './home';
import AdminRoutes from './admin';
import DetailsRoutes from './details';
import CartRoutes from './cart';
import UserRoutes from './user';
import ContactRoutes from './contact';
import BuyRoutes from './buy'
Vue.use(Router);

export default new Router({
    routes: [HomeRoutes, AdminRoutes, DetailsRoutes, CartRoutes, UserRoutes, ContactRoutes, BuyRoutes],
});