import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSinBlog } from "../../features/Blog/SinBlogSlice";
import { useParams } from "react-router-dom";
import Loading from "../../Common/Loading";
import RelatedBlogPost from "./RelatedBlogPost";
import SingleBlogItem from "./SingleBlogItem";

const SingleBlog = () => {
  const dispatch = useDispatch();
  const { sinBlogs, isLoading, isError, error } = useSelector(
    (state) => state.blog
  );
  console.log(sinBlogs);

  const { id, title, image, likes, isSaved, tags } = sinBlogs || {};
  const { blogId } = useParams();
  useEffect(() => {
    dispatch(fetchSinBlog(blogId));
  }, [dispatch, blogId]);

  let content = null;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;
  if (!isLoading && !isError && !sinBlogs?.id) {
    content = (
      <div className="col-span-12 text-2xl font-semibold">Not Found Blogs</div>
    );
  }
  if (!isLoading && !isError && sinBlogs?.id) {
    content = (
      <>
        <SingleBlogItem blog={sinBlogs} />
        <RelatedBlogPost relatedId={id} tags={tags} />{" "}
      </>
    );
  }
  return <section class="post-page-container">{content}</section>;
};

export default SingleBlog;
