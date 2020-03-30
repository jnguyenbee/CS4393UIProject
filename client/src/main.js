import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
//custom
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(Router);

const routes = [{
    path: '/',
    name: 'App',
    component: App
}];

const router = new Router({
    routes
});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');