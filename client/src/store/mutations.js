// import { productSchema } from './schemas'
// import { normalize } from 'normalizr'
// import merge from "lodash/object/merge"

import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    PRODUCT_BY_ID,
    PRODUCT_BY_ID_SUCCESS,
    ALL_PRODUCTS,
    ALL_PRODUCTS_SUCCESS,
} from './mutation-types';

export const productMutations = {
    [ALL_PRODUCTS](state) {
        state.showLoader = true;
        // this[]
    },
    [ALL_PRODUCTS_SUCCESS](state, payload) {
        state.showLoader = false;
        state.products = payload;
    },
    [PRODUCT_BY_ID](state) {
        state.showLoader = true;
    },
    [PRODUCT_BY_ID_SUCCESS](state, payload) {
        state.showLoader = false;
        state.product = payload;
    },

    [ADD_PRODUCT]: (state) => {
        state.showLoader = true;
    },
    [ADD_PRODUCT_SUCCESS]: (state, payload) => {
        state.showLoader = false;
        state.products.push(payload);
    },
};