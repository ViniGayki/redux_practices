import { createSlice } from "@reduxjs/toolkit";

const uislice = createSlice({
    name:'ui',
    initialState: {cartIsEnabled:true},
    reducers:{
        toggle(state){
            state.cartIsEnabled=!state.cartIsEnabled
        }
    }
});
export const uiActions = uislice.actions;
export default uislice;