import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLocation } from "wouter";

const AsideMenu: React.FC = () => {
  const [pathname] = useLocation();
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
            const linkActive = pathname.includes(el.href)
              ? "text-secondary  font-bold"
              : "";
            console.log(pathname, el.href);
            return (
              <Link
                key={`link ${i}`}
                href={el.href}
                onClick={() =>
                  document.body.classList.remove("aside-menu-open")
                }
              >
                <a
                  className={`py-2 text-grey-600 text-xl ${linkActive} hover:text-white transition-all duration-500`}
                >
                  {el.title}
                </a>
              </Link>
            );
          })}
        </div>
        {/* Footer */}
        <div className="bottom-0 absolute pb-8 font-extralight">
          <p>© {new Date().getFullYear()} All rights reserved</p>
          <p>
            by <span className="text-grey-400">mr_jaurewi</span>
          </p>
        </div>
      </div>
    </>
  );
};

const links = [
  { href: "/movies", title: "Movies" },
  { href: "/actors", title: "Actors" },
  { href: "/companies", title: "Companies" }
];

export default AsideMenu;
