import React from "react";
import { Helmet } from "react-helmet";

import {
  headerTitle,
  headerDescription,
  headerText,
  subText,
  URLEmail,
  URLGitHub,
  URLLinkedin,
  URLTwitter,
} from "../config/index";

import SocialIcon from "../components/SocialIcon";

import headerImage from "../assets/img/header.svg";
import portfolioImage from "../assets/img/Portfolio-black.jpeg";
import favicon from "../assets/img/favicon.ico";

import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const IndexPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{headerTitle}</title>
        <html lang="en" />
        <meta name="description" content={headerDescription} />
        <link rel="icon" type="image/png" href={favicon} />
      </Helmet>

      <div className="bg-gray-900 w-screen h-screen flex justify-center items-center">
        <div className="px-8 md:px-16 bg-white rounded shadow-xl">
          <img src={headerImage} className="w-64" alt="Header"></img>
          <img
            src={portfolioImage}
            className="h-24 w-24 rounded-full transform -translate-y-1/2 m-auto"
            alt="Profile"
          ></img>
          <h1 className="text-center font-semibold font-semiBold">
            {headerText}
          </h1>
          <h2 className="text-center font-light text-gray-500">{subText}</h2>
          <div className="flex justify-center">
            <SocialIcon
              icon={faGithub}
              iconColor="text-grey-800"
              url={URLGitHub}
            />
            <SocialIcon
              icon={faLinkedin}
              iconColor="text-blue-600"
              url={URLLinkedin}
            />
            <SocialIcon
              icon={faTwitter}
              iconColor="text-blue-400"
              url={URLTwitter}
            />
            <SocialIcon
              icon={faEnvelope}
              iconColor="text-blue-700"
              url={URLEmail}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
