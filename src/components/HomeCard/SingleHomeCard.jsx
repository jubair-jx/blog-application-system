import React from "react";
import cardimg from "../../assets/images/full_stack.webp";
import { Link } from "react-router-dom";
const SingleHomeCard = ({ blog }) => {
  const { title, createdAt, id, image, likes, isSaved, tags } = blog;

  return (
    <div class="lws-card">
      <Link to={`/blog/${id}`}>
        <img src={image} class="lws-card-image" alt="" />
      </Link>
      <div class="p-4">
        <div class="lws-card-header">
          <p class="lws-publishedDate">{createdAt}</p>
          <p class="lws-likeCount">
            <i class="fa-regular fa-thumbs-up"></i>
            {likes}
          </p>
        </div>
        <Link to={`/blog/${id}`} class="lws-postTitle">
          {" "}
          {title}
        </Link>
        <div class="lws-tags flex flex-wrap">
          {tags?.map((tag) => (
            <span className={`text-gray-400 mt-2 text-md`}>{"#" + tag}</span>
          ))}
        </div>
        <div class="flex gap-2 mt-4">
          {isSaved ? <span class="lws-badge"> Saved </span> : ""}
        </div>
      </div>
    </div>
  );
};

export default SingleHomeCard;
