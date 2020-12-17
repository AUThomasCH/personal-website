import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialIcon(props) {
  return (
    <div class="px-5 py-1 mx-2 my-5 bg-gray-200 w-0 flex justify-center rounded-full">
      <span class={props.iconColor}>
        <FontAwesomeIcon icon={props.icon} class="w-5 h-5" />
      </span>
    </div>
  );
}

export default SocialIcon;
