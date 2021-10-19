import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

const AsideMenu: React.FC = () => {
  const location = useLocation();
  const { t } = useTranslation();
  return (
    <>
      <div className="w-full h-0 fixed top-0 left-0 bg-secondary z-20 bg-opacity-90 layer transition-all duration-500" />
      <div className="w-0 h-full bg-primary aside-menu fixed z-30 top-0 left-0 transition-all duration-500 overflow-hidden">
        {/* Header */}
        <div className="flex justify-between align-center items-center">
          <span className="font-bold text-3xl">Movie Library</span>
          <FontAwesomeIcon
            icon={faTimesCircle}
            className="text-white cursor-pointer"
            onClick={() => document.body.classList.remove("aside-menu-open")}
          />
        </div>
        {/* Bodylinks */}
        <div className="flex flex-col mt-20">
          {links.map((el, i: number) => {
            const linkActive = location.pathname.includes(el.href)
              ? "text-secondary  font-bold"
              : "";
            return (
              <Link
                key={`link ${i}`}
                to={el.href}
                className={`py-2 text-grey-600 text-xl ${linkActive} hover:text-white transition-all duration-500`}
                onClick={() =>
                  document.body.classList.remove("aside-menu-open")
                }
              >
                {t(`screens.${el.title}`)}
              </Link>
            );
          })}
        </div>
        {/* Footer */}
        <div className="bottom-0 absolute pb-8 font-extralight">
          <p>{`© ${new Date().getFullYear()} ${t("all-rights-reserved")}`} </p>
          <p>
            {t("by")} <span className="text-grey-400">mr_jaurewi</span>
          </p>
        </div>
      </div>
    </>
  );
};

const links = [
  { href: "/movies", title: "movies" },
  { href: "/actors", title: "actors" },
  { href: "/companies", title: "companies" }
];

export default AsideMenu;
