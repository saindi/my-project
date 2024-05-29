import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalItems: 0,
    totalPrice: 0
}

const cardSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const findItem = state.cartItems.find(cartItem => cartItem.id === action.payload.id);

            if (!findItem) {
                state.cartItems.push({...action.payload, qty: 1});
            } else {
                findItem.qty += 1;
            }
            state.totalItems = calcTotalItems(state.cartItems);
            state.totalPrice = calcTotalPrice(state.cartItems);
        },
        deleteFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)

            state.totalItems = calcTotalItems(state.cartItems);
            state.totalPrice = calcTotalPrice(state.cartItems);
        },
        incrementFromCart: (state, action) => {
            const findItem = state.cartItems.find(cartItem => cartItem.id === action.payload.id);
            findItem.qty += 1;

            state.totalItems = calcTotalItems(state.cartItems);
            state.totalPrice = calcTotalPrice(state.cartItems);
        },
        decrementFromCart: (state, action) => {
            const findItem = state.cartItems.find(cartItem => cartItem.id === action.payload.id);
            findItem.qty -= 1;

            if (findItem.qty < 1) {
                state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id);
            }

            state.totalItems = calcTotalItems(state.cartItems);
            state.totalPrice = calcTotalPrice(state.cartItems);
        }
    }
})

const calcTotalItems = (items) => items.reduce((acc, item) => acc + item.qty, 0)
const calcTotalPrice = (items) => items.reduce((acc, item) => acc + item.unitPrice * item.qty, 0)

export default cardSlice.reducer;
export const {addToCart, deleteFromCart, incrementFromCart, decrementFromCart} = cardSlice.actions;