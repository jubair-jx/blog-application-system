import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getBlogs from "./BlogAPI";

const initialState = {
  blogs: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchBlog = createAsyncThunk("blogs/fetchBlog", async () => {
  const blogs = await getBlogs();
  return blogs;
});

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlog.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.blogs = action.payload;
      })
      .addCase(fetchBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.blogs = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});
export default blogSlice.reducer;
