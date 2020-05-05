import axios from 'axios';
import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    PRODUCT_BY_ID,
    PRODUCT_BY_ID_SUCCESS,
    ALL_PRODUCTS,
    ALL_PRODUCTS_SUCCESS,
    UPDATE_PRODUCT,
    UPDATE_PRODUCT_SUCCESS,
    REMOVE_PRODUCT,
    REMOVE_PRODUCT_SUCCESS,
    ADD_USER,
    ADD_USER_SUCCESS,
    ADD_REVIEW,
    ADD_REVIEW_SUCCESS,
    ALL_REVIEWS,
    ALL_REVIEWS_SUCCESS,
    REVIEW_BY_ID,
    REVIEW_BY_ID_SUCCESS,
    ALL_USERS,
    ALL_USERS_SUCCESS,
} from './mutation-types';

//const API_BASE = '/';
export const productActions = {
    allProducts({ commit }) {
        commit(ALL_PRODUCTS);
        axios.get(`/products`).then((response) => {
            commit(ALL_PRODUCTS_SUCCESS, response.data);
        });
    },
    productById({ commit }, payload) {
        commit(PRODUCT_BY_ID);
        axios.get(`/products/${payload}`).then((response) => {
            console.log(payload, response.data);
            commit(PRODUCT_BY_ID_SUCCESS, response.data);
        });
    },
    addProduct({ commit }, payload) {
        commit(ADD_PRODUCT);
        axios.post(`/products/`, payload).then((response) => {
            commit(ADD_PRODUCT_SUCCESS, response.data);
        });
    },
    updateProduct({ commit }, payload) {
        commit(UPDATE_PRODUCT);
        axios.patch(`/products/${payload._id}`, payload).then((response) => {
            commit(UPDATE_PRODUCT_SUCCESS, response.data);
        });
    },
    removeProduct({ commit }, payload) {
        commit(REMOVE_PRODUCT);
        axios.delete(`/products/${payload}`, payload).then((response) => {
            console.debug('response', response.data);
            commit(REMOVE_PRODUCT_SUCCESS, response.data);
        });
    },
};

export const userActions = {
    addUser({ commit }, payload) {
        commit(ADD_USER);
        axios.post(`/users/register`, payload).then((response) => {
            commit(ADD_USER_SUCCESS, response.data);
        });
    },
    /*
                    checkUser({ commit }, payload) {
                        commit(ADD_USER);
                        axios.post(`${API_BASE}/users/login`, payload).then(response => {

                            commit(ADD_USER_SUCCESS, response.data);
                        });
                    },*/
    allUsers({ commit }) {
        //        alert('called');
        commit(ALL_USERS);
        axios.get(`/users/`).then((response) => {
            commit(ALL_USERS_SUCCESS, response.data);
        });
    },
};

export const reviewActions = {
    addReview({ commit }, payload) {
        // alert('reach');
        commit(ADD_REVIEW);
        axios.post(`/reviews`, payload).then((response) => {
            commit(ADD_REVIEW_SUCCESS, response.data);
        });
    },

    reviewById({ commit }, payload) {
        commit(REVIEW_BY_ID);
        axios.get(`/reviews/${payload}`).then((response) => {
            console.log(payload, response.data);
            commit(REVIEW_BY_ID_SUCCESS, response.data);
        });
    },

    allReviewByProdId({ commit }, payload) {
        commit(ALL_REVIEWS);
        //        alert('called' + payload);
        axios.get(`/reviews/${payload}`).then((response) => {
            commit(ALL_REVIEWS_SUCCESS, response.data);
        });
    },
};