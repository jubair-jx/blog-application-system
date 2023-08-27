import React from "react";

const RelatedBlogPost = () => {
  return (
    <aside>
      <h4 class="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div class="space-y-4 related-post-container">
        <div class="card">
          <a href="post.html">
            <img src="./images/git.webp" class="card-image" alt="" />
          </a>
          <div class="p-4">
            <a href="post.html" class="text-lg post-title lws-RelatedPostTitle">
              Top Github Alternatives
            </a>
            <div class="mb-0 tags">
              <span>#python,</span> <span>#tech,</span> <span>#git</span>
            </div>
            <p>2010-03-27</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default RelatedBlogPost;
