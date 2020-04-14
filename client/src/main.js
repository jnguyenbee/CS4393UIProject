import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

//custom
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import VueCardPayment from 'vue-card-payment';
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'vue-card-payment/dist/vue-card-payment.css';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
    faSpinner,
    faTrash,
    faEdit,
    faCartPlus,
    faShoppingCart,
    faHome,
    faSocks
} from '@fortawesome/free-solid-svg-icons';

dom.watch();
library.add(
    faSpinner,
    faTrash,
    faEdit,
    faCartPlus,
    faShoppingCart,
    faHome,
    faSocks
);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueCardPayment);
Vue.config.productionTip = false;
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
//Vue.use(router);

new Vue(Vue.util.extend({ router, store }, App)).$mount('#app');