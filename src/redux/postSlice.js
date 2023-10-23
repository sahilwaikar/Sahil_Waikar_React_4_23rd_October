import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: 'post',
    initialState: [],
    reducers: {
        addPost: (state, action) => {
            let postToAdd = action.payload;
            postToAdd.map((post) => {
                state.push(post);
            })
        }
    }
})

export const { addPost } = postSlice.actions;

export default postSlice.reducer;