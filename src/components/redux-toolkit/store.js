import { configureStore } from "@reduxjs/toolkit";
import projectreducers from "./index.js"
import cartreducer from "./index2.js"
const store =configureStore({
    reducer:{
       display:projectreducers,
       cart:cartreducer
    }
})
export default store;