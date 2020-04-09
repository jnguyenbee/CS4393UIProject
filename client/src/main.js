import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

//custom
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
    faSpinner,
    faTrash,
    faEdit,
    faCartPlus,
    faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

dom.watch();
library.add(faSpinner, faTrash, faEdit, faCartPlus, faShoppingCart);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
//Vue.use(router);

new Vue(Vue.util.extend({ router, store }, App)).$mount('#app');