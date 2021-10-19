import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import { useHistory, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface HeaderProps {
  text?: string;
}

const Header: React.FC<HeaderProps> = ({ text }) => {
  const { pathname } = useLocation();
  const history = useHistory();
  const { t } = useTranslation();
  const isBackButton =
    /movies\/\d+/.test(pathname) || pathname.includes("movies/new");
  return (
    <div className="flex justify-items-center items-center mb-8 sticky top-0 bg-primary z-10">
      <FontAwesomeIcon
        icon={isBackButton ? faArrowLeft : faBars}
        className="cursor-pointer hover:text-secondary transition transform transition-all mr-4"
        size="2x"
        onClick={
          isBackButton
            ? history.goBack
            : () => document.body.classList.add("aside-menu-open")
        }
      />
      <p className="font-bold flex-1 xs:text-center text-left text-3xl xs:text-5xl ellipsis-effect">
        {t(`${text}`)}
      </p>
    </div>
  );
};

export default Header;
