import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: '1', title: 'Learnings Redux Toolkit and More', content: "I've heard good things."},
  { id: '2', title: 'Slices...', content: "The more I say slice, the more I want pizza."}
]

const postsSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
})

export const selectAllPosts = (state) => state.posts;

export default postsSlice.reducer