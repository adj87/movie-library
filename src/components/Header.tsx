import React from "react";

interface HeaderProps {
  text: string;
}

const Header: React.FC<HeaderProps> = ({ text }) => (
  <div className="flex justify-items-center items-center mb-8 sticky top-0 bg-primary z-10">
    <span className="flex-none mr-8">M</span>
    <p className="font-bold flex-1 xs:text-center text-left text-3xl xs:text-5xl">
      {text}
    </p>
  </div>
);

export default Header;
