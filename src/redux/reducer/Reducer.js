import { ADD_PRODUCTS, CART_PRODUCTS, DECREMENT_QUANTITY, INCREMENT_QUANTITY, REMOVE_FROM_CART } from "../../constant/Constant";


const initialState = {
    products: [],
    cart: []
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        case CART_PRODUCTS:
            const itemInCart = state.cart.find(item => item.id === action.payload.id);
            if (itemInCart) {
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                    )
                };
            }
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }]
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            };
        case INCREMENT_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
                )
            };
        case DECREMENT_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
            };
        default:
            return state;
    }
};


export default productReducer;
