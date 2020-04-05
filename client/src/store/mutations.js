// import { productSchema } from './schemas'
// import { normalize } from 'normalizr'
// import merge from "lodash/object/merge"

import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS } from './mutation-types';

export const productMutations = {
    [ADD_PRODUCT]: (state) => {
        state.showLoader = true;
    },
    [ADD_PRODUCT_SUCCESS]: (state, payload) => {
        state.showLoader = false;
        state.products.push(payload);
    },
};