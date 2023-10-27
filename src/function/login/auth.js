import { createSlice, nanoid } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {authState: []},
    reducers:{
        login: (state, action) => {
            const dataArr = {
                id: nanoid(),
                email: action.payload.email,
                password: action.payload.password 
            }
            state.authState.push(dataArr);
        }
    }
})

export const {login} = authSlice.actions;
export default authSlice.reducer;