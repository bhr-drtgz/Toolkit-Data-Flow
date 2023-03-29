import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    { id: "1", title: "Learning Redux Toolkit", content: "I've heard good tihings" },
    { id: "2", title: "Slices...", content: "The more I say slice , the more I want pizza." }
]

const PostSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content
                    }
                 }
            }
        }
    }
})

export const selectAllPost = (state) => state.posts;

export const { postAdded } = PostSlice.actions;

export default PostSlice.reducer;