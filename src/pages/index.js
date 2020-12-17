import React from "react";

import headerImage from "../assets/img/undraw_developer_activity_bv83.svg";
import portfolioImage from "../assets/img/Portfolio-black.jpeg";

const IndexPage = () => {
  return (
    <div>
      <div class="bg-gray-900 w-screen h-screen flex justify-center items-center">
        <div class="px-8 md:px-16 bg-white rounded">
          <img src={headerImage} class="w-64"></img>
          <img
            src={portfolioImage}
            class="h-24 w-24 rounded-full transform  -translate-y-1/2 m-auto"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
