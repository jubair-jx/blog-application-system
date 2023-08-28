import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import getRelatedBlogs from "./RelatedBlogAPI";

const initialState = {
  relatedBlogs: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const relatedfetchBlog = createAsyncThunk(
  "reBlogs/fetchRelatedBlog",
  async ({ tags, id }) => {
    const relatedBlogs = await getRelatedBlogs({ tags, id });
    return relatedBlogs;
  }
);

const relatedBlogSlice = createSlice({
  name: "relatedBlogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(relatedfetchBlog.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(relatedfetchBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.relatedBlogs = action.payload;
      })
      .addCase(relatedfetchBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.relatedBlogs = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});
export default relatedBlogSlice.reducer;
