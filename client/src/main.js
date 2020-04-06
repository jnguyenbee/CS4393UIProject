import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

//custom
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import VeeValidate from 'vee-validate';
//import css from '../../client/static/app.css';

Vue.config.productionTip = false;
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
//Vue.use(router);

new Vue(Vue.util.extend({ router, store }, App)).$mount('#app');