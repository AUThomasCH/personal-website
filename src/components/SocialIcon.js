import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialIcon(props) {
  return (
    <div className="px-5 py-1 mx-2 my-5 w-0 flex justify-center items-center">
      <a href={props.url} rel="noopener noreferrer" target="_blank">
        <span className={props.iconColor}>
          <FontAwesomeIcon icon={props.icon} className="w-5 h-5" />
        </span>
      </a>
    </div>
  );
}

export default SocialIcon;
