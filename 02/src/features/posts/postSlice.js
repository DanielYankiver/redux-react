import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: '1', title: 'Learnings Redux Toolkit and More', content: "I've heard good things."},
  { id: '2', title: 'Slices...', content: "The more I say slice, the more I want pizza."}
]

const postsSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
      postAdded(state, action) {
        state.push(action.payload)
      }
    },
})

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
