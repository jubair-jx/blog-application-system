import React from "react";
import Sorting from "./Sorting";
import Filter from "./Filter";

const LeftSidePart = () => {
  return (
    <aside>
      <div class="sidebar-items">
        <Sorting />
        <Filter />
      </div>
    </aside>
  );
};

export default LeftSidePart;
