import React from "react";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Socmed() {
  return (
    <div className="">
      <FontAwesomeIcon
        className="w-6 cursor-pointer hover:animate-bounce"
        icon={faFacebook}
      />
      <FontAwesomeIcon
        className="w-6 my-10 cursor-pointer hover:animate-bounce"
        icon={faInstagram}
      />
      <FontAwesomeIcon
        className="w-6 cursor-pointer hover:animate-bounce"
        icon={faTwitter}
      />
    </div>
  );
}

export default Socmed;
