import { ADD_PRODUCTS, CART_PRODUCTS, DECREMENT_QUANTITY, INCREMENT_QUANTITY, REMOVE_FROM_CART } from "../../constant/Constant";


export const addProducts = (products) => {
    return {
        type: ADD_PRODUCTS,
        payload: products
    };
};

export const cartProducts = (products) => {
    return {
        type: CART_PRODUCTS,
        payload: products
    }
}

export const removeFromCart = (products) => {
    return {
        type: REMOVE_FROM_CART,
        payload: products
    }
}

export const incrementQuantity = (productId) => {
    return {
    type : INCREMENT_QUANTITY,
    payload: productId
    }
}
export const decrementQuantity = (productId) => {
    return {
    type : DECREMENT_QUANTITY,
    payload: productId
    }
}

export const cartProductPrice = (productId) => {
    return {
        type : CART_PRODUCTS,
        payload: productId
    }
}

export const fetchProducts = () => {
    return async (dispatch) => {
        const products = [
            {
                id: 'p1',
                price: 126,
                title: 'Man Perfume',
                description: 'Denver - Hamilton',
            },
            {
                id: 'p2',
                price: 125,
                title: 'Man Deo',
                description: 'Navia - 24 hours refreshment',
            },
        ];

        dispatch(addProducts(products));
    };
};
