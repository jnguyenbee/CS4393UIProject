import axios from 'axios';
import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS } from './mutation-types';

const API_BASE = 'http://localhost:3000';
export const productActions = {
    addProduct({ commit }, payload) {
        commit(ADD_PRODUCT);
        axios.post(`${API_BASE}/products/`, payload).then((response) => {
            commit(ADD_PRODUCT_SUCCESS, response.data);
        });
    },
};