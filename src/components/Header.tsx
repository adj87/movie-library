import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
  text: string;
}

const Header: React.FC<HeaderProps> = ({ text }) => (
  <div className="flex justify-items-center items-center mb-8 sticky top-0 bg-primary z-10">
    <FontAwesomeIcon
      icon={faBars}
      className="cursor-pointer hover:text-secondary transition transform transition-all"
      size="2x"
      onClick={() => document.body.classList.add("aside-menu-open")}
    />
    <p className="font-bold flex-1 xs:text-center text-left text-3xl xs:text-5xl">
      {text}
    </p>
  </div>
);

export default Header;
