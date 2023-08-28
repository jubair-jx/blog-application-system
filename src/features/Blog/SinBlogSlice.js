import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import getSinBlogs from "./SinBlogAPI";

const initialState = {
  sinBlogs: {},
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchSinBlog = createAsyncThunk(
  "sinBlogs/fetchSinBlog",
  async (id) => {
    const blogs = await getSinBlogs(id);
    return blogs;
  }
);

const sinBlogSlice = createSlice({
  name: "sinBlogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchSinBlog.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchSinBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.sinBlogs = action.payload;
      })
      .addCase(fetchSinBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.blogs = [];
        state.isError = true;
        state.sinBlogs = action.error?.message;
      });
  },
});
export default sinBlogSlice.reducer;
