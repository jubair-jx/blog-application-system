import React from "react";
import { useEffect } from "react";
import SingleHomeCard from "./SingleHomeCard";
import LeftSidePart from "../LeftSidePart/LeftSidePart";
import Home from "../Home/Home";
import { fetchBlog } from "../../features/Blogs/BlogSlice.js";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Common/Loading";

const HomeCard = () => {
  const dispatch = useDispatch();
  const { blogs, isLoading, isError, error } = useSelector(
    (state) => state.blogs
  );
  useEffect(() => {
    dispatch(fetchBlog());
  }, [dispatch]);

  let content;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;
  if (!isLoading && !isError && blogs?.length === 0) {
    content = (
      <div className="col-span-12 text-2xl font-semibold">Not Found Blogs</div>
    );
  }
  if (!isLoading && !isError && blogs?.length > 0) {
    content = blogs.map((blog) => <SingleHomeCard blog={blog} key={blog.id} />);
  }

  return (
    <>
      <section class="wrapper">
        <LeftSidePart />

        <main class="post-container" id="lws-postContainer">
          {content}
        </main>
      </section>
    </>
  );
};

export default HomeCard;
