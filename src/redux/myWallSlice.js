// myWallSlice.js 
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  boards: [],
  posts: [],
  likes: {},
  images: {},
};

const myWallSlice = createSlice({
  name: 'myWall',
  initialState,
  reducers: {
    addBoard(state, action) {
      state.boards.push(action.payload);
    },
    addPost(state, action) {
      state.posts.push(action.payload);
    },
    addLike(state, action) {
      const { postId, userId } = action.payload;
      if (!state.likes[postId]) {
        state.likes[postId] = [];
      }
      state.likes[postId].push(userId);
    },
    addImage(state, action) {
      const { postId, imagePath } = action.payload;
      state.images[postId] = imagePath;
    },
  },
});

export const { addBoard, addPost, addLike, addImage } = myWallSlice.actions;
export default myWallSlice.reducer;
