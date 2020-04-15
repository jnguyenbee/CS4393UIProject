// import { productSchema } from './schemas'
// import { normalize } from 'normalizr'
// import merge from "lodash/object/merge"

import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    PRODUCT_BY_ID,
    PRODUCT_BY_ID_SUCCESS,
    UPDATE_PRODUCT,
    UPDATE_PRODUCT_SUCCESS,
    REMOVE_PRODUCT,
    REMOVE_PRODUCT_SUCCESS,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    ALL_PRODUCTS,
    ALL_PRODUCTS_SUCCESS,
    ADD_USER,
    ADD_USER_SUCCESS,
    ADD_REVIEW,
    ADD_REVIEW_SUCCESS,
    ALL_REVIEWS,
    REVIEW_BY_ID,
    REVIEW_BY_ID_SUCCESS,
    ALL_USERS,
    ALL_USERS_SUCCESS,
    //ERROR_MSG
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
    [ADD_PRODUCT]: state => {
        state.showLoader = true;
    },
    [ADD_PRODUCT_SUCCESS]: (state, payload) => {
        state.showLoader = false;
        state.products.push(payload);
    },
    [UPDATE_PRODUCT]: state => {
        state.showLoader = true;
    },
    [UPDATE_PRODUCT_SUCCESS]: (state, payload) => {
        state.showLoader = false;
        state.products = state.products.map(p => {
            if (p._id === payload._id) {
                payload = {
                    ...payload,
                    manufacturer: state.manufacturers.filter(
                        x => x._id === payload.manufacturer
                    )[0]
                };
                return payload;
            }
            return p;
        });
    },
    [REMOVE_PRODUCT]: state => {
        state.showLoader = true;
    },
    [REMOVE_PRODUCT_SUCCESS]: (state, payload) => {
            state.showLoader = false;
            const index = state.products.findIndex(p => p._id === payload);
            console.debug('index', index);
            state.products.splice(index, 1);
        }
        // [ERROR_MSG](state, payload) {}
};

export const cartMutations = {
    [ADD_TO_CART]: (state, payload) => state.cart.push(payload),
    [REMOVE_FROM_CART]: (state, payload) => {
        const index = state.cart.findIndex(p => p._id === payload);
        state.cart.splice(index, 1);
        console.log(state.cart, state.cart.length, index);
    }
};

export const userMutations = {
    [ADD_USER]: (state, payload) => {
        // user.username
        // user.password
        state.user = payload;
        //  state.users1 = payload;
        state.showLoader = true;
    },
    [ADD_USER_SUCCESS]: (state, payload) => {
        state.showLoader = false;
        state.users.push(payload);
        //  state.users1.push(payload);
    },

    [ALL_USERS](state) {
        state.showLoader = true;
    },
    [ALL_USERS_SUCCESS](state, payload) {
        state.showLoader = false;
        state.users = payload;
    },
};

export const reviewMutations = {
    [ALL_REVIEWS](state) {
        state.showLoader = true;
        // this[]
    },
    [ADD_REVIEW]: (state, payload) => {
        state.review = payload;
        state.showLoader = true;
    },
    [ADD_REVIEW_SUCCESS]: (state, payload) => {
        state.showLoader = false;
        state.reviews.push(payload);
    },
    [REVIEW_BY_ID](state) {
        state.showLoader = true;
    },
    [REVIEW_BY_ID_SUCCESS](state, payload) {
        state.showLoader = false;
        state.review = payload;
    }
};