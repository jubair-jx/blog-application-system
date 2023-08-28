import React, { useEffect } from "react";
import RelatedBlogPostItem from "./RelatedBlogPostItem";
import { useDispatch, useSelector } from "react-redux";
import { relatedfetchBlog } from "../../features/RelatedBlog/RelatedBlogSlice";
import Loading from "../../Common/Loading";

const RelatedBlogPost = ({ relatedId, tags }) => {
  const dispatch = useDispatch();
  const { relatedBlogs, isLoading, isError, error } = useSelector(
    (state) => state.relatedBlog
  );

  useEffect(() => {
    dispatch(relatedfetchBlog({ id: relatedId, tags }));
  }, [dispatch, tags, relatedId]);

  let content = null;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;
  if (!isLoading && !isError && relatedBlogs?.length === 0) {
    content = (
      <div className="col-span-12 text-2xl font-semibold">
        Not Found Related Blogs
      </div>
    );
  }
  if (!isLoading && !isError && relatedBlogs?.length > 0) {
    content = relatedBlogs.map((blog) => <RelatedBlogPostItem blog={blog} />);
  }
  return (
    <aside>
      <h4 class="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div class="space-y-4 related-post-container">{content}</div>
    </aside>
  );
};

export default RelatedBlogPost;
