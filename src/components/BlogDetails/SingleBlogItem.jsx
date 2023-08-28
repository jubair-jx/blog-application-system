import React from "react";

const SingleBlogItem = ({ blog }) => {
  const { title, description, image, likes, createdAt, tags } = blog;

  return (
    <>
      <main class="post">
        <img
          src={image}
          alt="githum"
          class="w-full rounded-md"
          id="lws-megaThumb"
        />
        <div>
          <h1 class="mt-6 text-2xl post-title" id="lws-singleTitle">
            {title}
          </h1>
          <div class="tags flex flex-wrap" id="lws-singleTags">
            {tags?.map((tag) => (
              <span className={`text-gray-400 mt-2 text-md`}>{"#" + tag}</span>
            ))}
          </div>
          <div class="btn-group">
            <button class="like-btn" id="lws-singleLinks">
              <i class="fa-regular fa-thumbs-up"></i> {likes}
            </button>
            <button class="active save-btn" id="lws-singleSavedBtn">
              <i class="fa-regular fa-bookmark"></i> Saved
            </button>
          </div>
          <div class="mt-6">
            <p>{description}</p>
          </div>
        </div>
      </main>{" "}
    </>
  );
};

export default SingleBlogItem;
