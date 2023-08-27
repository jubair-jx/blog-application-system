import React from "react";
import SingleHomeCard from "./SingleHomeCard";
import LeftSidePart from "../LeftSidePart/LeftSidePart";
import Home from "../Home/Home";

const HomeCard = () => {
  return (
    <>
      <section class="wrapper">
        <LeftSidePart />

        <main class="post-container" id="lws-postContainer">
          <SingleHomeCard />
        </main>
      </section>
    </>
  );
};

export default HomeCard;
