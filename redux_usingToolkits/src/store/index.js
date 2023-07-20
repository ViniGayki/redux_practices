import { createstore } from 'react';
import { configureStore, createSlice, createStore } from "@reduxjs/toolkit";
const initialState = { counter: 0 ,showCounter:true };

// const counterReduser = (state = initialState, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//         }
//     }
//     return state;
// }
// const store = createstore( counterReduser)
//or "optional cose createing store"

const counterSlice = createSlice(
    {
        name: 'counter',
        initialState,
        reducers: {
            increment(state) {
                state.counter ++;
            },
            decrement(state) {
                state.counter --;
            },
            increase(state,action) {
                state.counter= state.counter +action.payload;
            },
            toggleCounter(state) {
                state.showCounter= !state.showCounter;
            },
        } 
    }
)

const store = configureStore({

    // reducer: counterSlice.reducer
    reducer: {counter:counterSlice.reducer}
});

export  const counterActions = counterSlice.actions 

export default store;