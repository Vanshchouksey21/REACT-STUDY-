import { configureStore } from "@reduxjs/toolkit";

import myreducer from "./counterSlice"

const store = configureStore({
    reducer:{
        myCounter:myreducer
    }
})
export default store