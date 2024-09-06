import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer, // Associating the cart reducer with the 'cart' key
    },
});

export default store;
