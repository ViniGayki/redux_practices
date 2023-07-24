
import { configureStore,} from "@reduxjs/toolkit";
import cartReducers  from  './cart';




    const store = configureStore({ 
        reducer:cartReducers
    });

export default store; 