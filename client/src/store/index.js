import Vue from 'vue';
import Vuex from 'vuex';

// import { normalize } from 'normalizr'

//import { productGetters, manufacturerGetters } from './getters'
//import { productMutations, cartMutations, manufacturerMutations } from './mutations'

import { productGetters, reviewGetters, userGetters } from './getters';
import {
    productMutations,
    cartMutations,
    userMutations,
    reviewMutations
} from './mutations';
import { productActions, userActions, reviewActions } from './actions';
Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state: {
        cart: [],
        showLoader: false,
        product: {},
        products: [],
        user: {},
        users: [],

        review: [],
        reviews: []
    },

    mutations: Object.assign({},
        productMutations,
        cartMutations,
        userMutations,
        reviewMutations
    ),
    getters: Object.assign({}, productGetters, reviewGetters, userGetters),
    actions: Object.assign({}, productActions, userActions, reviewActions)
});