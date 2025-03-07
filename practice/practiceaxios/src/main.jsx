import { configureStore } from "@reduxjs/toolkit";
const store= configureStore({
    reducer:{
        mycounter:myReducer
    }
})
export default store;