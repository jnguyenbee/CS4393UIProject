import Vue from 'vue';
import Vuex from 'vuex';

// import { normalize } from 'normalizr'

//import { productGetters, manufacturerGetters } from './getters'
//import { productMutations, cartMutations, manufacturerMutations } from './mutations'

import { productGetters } from './getters';
import { productMutations } from './mutations';
import { productActions } from './actions';
Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state: {
        cart: [],
        showLoader: false,
        product: {},
        products: [],
    },

    mutations: Object.assign({}, productMutations),
    getters: Object.assign({}, productGetters),
    actions: Object.assign({}, productActions),
});