import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AsideMenu: React.FC = () => {
  return (
    <>
      <div className="w-full h-0 fixed top-0 left-0 bg-secondary z-20 bg-opacity-90 layer transition-all duration-700">
        <div className="w-0 h-full bg-primary aside-menu fixed top-0 left-0 z-20 transition-all duration-1000">
          <span className="font-bold text-2xl">Movie Library</span>
          <FontAwesomeIcon
            icon={faTimesCircle}
            className="text-white"
            size="2x"
            onClick={() => document.body.classList.remove("aside-menu-open")}
          />
        </div>
      </div>
    </>
  );
};

export default AsideMenu;
