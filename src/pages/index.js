import React from "react";

import SocialIcon from "../components/SocialIcon";

import headerImage from "../assets/img/undraw_developer_activity_bv83.svg";
import portfolioImage from "../assets/img/Portfolio-black.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
          <h1 class="text-center font-semibold">Thomas Glauser</h1>
          <h2 class="text-center">I build things that aren't evil.</h2>
          <div class="flex justify-center border-b border-gray-200">
            <SocialIcon icon={faGithub} iconColor="text-grey-800" />
            <SocialIcon icon={faLinkedin} iconColor="text-blue-600" />
            <SocialIcon icon={faTwitter} iconColor="text-blue-400" />
            <SocialIcon icon={faEnvelope} iconColor="text-blue-700" />
          </div>
          <h3>Tjihgojneinzhiuzi</h3>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
