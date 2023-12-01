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

            // console.log(newData)
            state.authState.push(newData)
        }
    }
})

export const {
    login
} = authSlice.actions;
export default authSlice.reducer;