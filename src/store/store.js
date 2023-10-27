import { configureStore } from "@reduxjs/toolkit";
import auth from "../function/login/auth";

export const store = configureStore({
    reducer : auth
});