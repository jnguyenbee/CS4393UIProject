export const productGetters = {
    allProducts: state => {
        return state.products;
    },
    productById: (state, getters) => id => {
        if (getters.allProducts.length > 0) {
            return getters.allProducts.filter(p => p._id === id)[0];
        } else {
            return state.product;
        }
    }
};

export const reviewGetters = {
    allReviews: state => {
        return state.review;
    },
    reviewById: (state, getters) => id => {
        if (getters.allReviews.length > 0) {
            return getters.allReviews.filter(p => p.productId === id)[0];
        } else {
            return state.review;
        }
    }
};

export const userGetters = {
    allUsers: state => {
        return state.users;
    }
};