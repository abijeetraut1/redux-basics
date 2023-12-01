import { createSlice, nanoid } from "@reduxjs/toolkit";

const comment = createSlice({
    name: "comment",
    initialState: {
        storeComment: [],
    },
    reducers:{
        newcomments: (state, action) => {
            console.log(action.payload)
            const commentsObject = {
                id: nanoid(),
                comment: {
                    id: action.payload.email,
                    password: action.payload.password
                }
            }

            console.log(commentsObject);
            state.storeComment.push(commentsObject);
        }
    }
})

export const { newcomments } = comment.actions;
export default comment.reducer;