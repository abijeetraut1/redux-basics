import {
    createSlice,
    nanoid
} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        authState: []
    },
    reducers: {
        login: (state, action) => {
            const newData = {
                id: nanoid(),
                auth: {
                    email: action.payload.email,
                    password: action.payload.password
                }    
            }
            state.authState.push(newData)
        },
        removeAuth:(state, action) => {
            state.authState = state.authState.filter(todo => todo.id !== action.payload);
        }
    }
})

export const {
    login, removeAuth
} = authSlice.actions;
export default authSlice.reducer;