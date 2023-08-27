import React from "react";
import cardimg from "../../assets/images/full_stack.webp";
import { Link } from "react-router-dom";
const SingleHomeCard = () => {
  return (
    <div class="lws-card">
      <Link to={"/blog/1"}>
        <img src={cardimg} class="lws-card-image" alt="" />
      </Link>
      <div class="p-4">
        <div class="lws-card-header">
          <p class="lws-publishedDate">2023-05-01</p>
          <p class="lws-likeCount">
            <i class="fa-regular fa-thumbs-up"></i>100
          </p>
        </div>
        <Link to={"/blog/1"} class="lws-postTitle">
          {" "}
          Top Github Alternatives{" "}
        </Link>
        <div class="lws-tags">
          <span>#python,</span> <span>#tech,</span> <span>#git</span>
        </div>
        <div class="flex gap-2 mt-4">
          <span class="lws-badge"> Saved </span>
        </div>
      </div>
    </div>
  );
};

export default SingleHomeCard;
