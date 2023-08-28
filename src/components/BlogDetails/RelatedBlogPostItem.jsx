import React from "react";
import { Link } from "react-router-dom";

const RelatedBlogPostItem = ({ blog }) => {
  const { title, description, image, likes, createdAt, tags } = blog;
  return (
    <div class="card">
      <Link to={"/"}>
        <img src={image} class="card-image" alt="" />
      </Link>
      <div class="p-4">
        <a href="post.html" class="text-lg post-title lws-RelatedPostTitle">
          {title}
        </a>
        <div class="mb-0 tags">
          {tags?.map((tag) => (
            <span className={`text-gray-400 mt-2 text-md`}>{"#" + tag}</span>
          ))}
        </div>
        <p>{createdAt}</p>
      </div>
    </div>
  );
};

export default RelatedBlogPostItem;
