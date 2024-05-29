import {configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cardSlice.js';


export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})