import { createSlice } from "@reduxjs/toolkit";

const cartinitialstat = {
    items: [],
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: cartinitialstat,
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;

            const existingItem = state.items.find((item) => item.id === newItem.id);

            if (existingItem) {
                existingItem.totalQuantity++;
                existingItem.totalPrice = existingItem.totalQuantity * existingItem.price;
                state.totalQuantity++;

            } else {
                newItem.totalQuantity = 1;
                newItem.totalPrice = newItem.totalQuantity * newItem.price;
                state.items.push(newItem)
                state.totalQuantity++;
            }


        },
        removeItemTocart(state, action) {
            const id = action.payload;

            const existingItem = state.items.find((item) => item.id === id);

            if (existingItem.totalQuantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
                state.totalQuantity--;

            } else {
                existingItem.totalQuantity--;
                existingItem.totalPrice = existingItem.totalQuantity * existingItem.price;
                state.totalQuantity--;

            }
        }
    }
})
export const cartActions = cartSlice.actions;
export default cartSlice;      