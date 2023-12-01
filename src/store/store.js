import { configureStore } from "@reduxjs/toolkit";
import combineReducer from "../function/combineReducer";




export const store = configureStore({
    reducer : {
        combineReducer
    }
});