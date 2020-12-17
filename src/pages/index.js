import React from "react";

import { headerText } from "../config/index";

import SocialIcon from "../components/SocialIcon";

import headerImage from "../assets/img/header.svg";
import portfolioImage from "../assets/img/Portfolio-black.jpeg";

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
        <div class="px-8 md:px-16 bg-white rounded shadow-xl">
          <img src={headerImage} class="w-64"></img>
          <img
            src={portfolioImage}
            class="h-24 w-24 rounded-full transform -translate-y-1/2 m-auto"
          ></img>
          <h1 class="text-center font-semibold font-semiBold">{headerText}</h1>
          <h2 class="text-center font-light text-gray-500">
            I build things that aren't evil.
          </h2>
          <div class="flex justify-center">
            <SocialIcon icon={faGithub} iconColor="text-grey-800" />
            <SocialIcon icon={faLinkedin} iconColor="text-blue-600" />
            <SocialIcon icon={faTwitter} iconColor="text-blue-400" />
            <SocialIcon icon={faEnvelope} iconColor="text-blue-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
