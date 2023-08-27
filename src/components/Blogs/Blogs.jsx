import React from "react";
import GotoHome from "../BlogDetails/GotoHome";
import SingleBlog from "../BlogDetails/SingleBlog";
import RelatedBlogPost from "../BlogDetails/RelatedBlogPost";

const Blogs = () => {
  return (
    <>
      <GotoHome />
      <section class="post-page-container">
        <SingleBlog />
        <RelatedBlogPost />
      </section>
    </>
  );
};

export default Blogs;
