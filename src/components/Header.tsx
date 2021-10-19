import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import { useHistory, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { i18n } from "i18next";

interface HeaderProps {
  text?: string;
}

const Header: React.FC<HeaderProps> = ({ text }) => {
  const { pathname } = useLocation();
  const history = useHistory();
  const { t, i18n } = useTranslation();

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
      <LanguageButton lang={"es"} i18n={i18n} />
      <LanguageButton lang={"en"} i18n={i18n} />
    </div>
  );
};

const LanguageButton = ({ lang, i18n }: { lang: string; i18n: i18n }) => {
  const isActive =
    i18n.language === lang ? "text-secondary font-bold text-xl" : "";
  return (
    <span
      className={`mr-2 cursor-pointer ${isActive}`}
      onClick={() => i18n.changeLanguage(lang)}
    >
      {lang.toUpperCase()}
    </span>
  );
};

export default Header;
