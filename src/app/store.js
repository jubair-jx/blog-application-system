import { configureStore } from "@reduxjs/toolkit";
import BlogSlice from "../features/Blogs/BlogSlice";
import SinBlogSlice from "../features/Blog/SinBlogSlice";
import RelatedBlogSlice from "../features/RelatedBlog/RelatedBlogSlice";

export const store = configureStore({
  reducer: {
    blogs: BlogSlice,
    blog: SinBlogSlice,
    relatedBlog: RelatedBlogSlice,
  },
});
