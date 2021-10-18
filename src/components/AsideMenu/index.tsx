import React from "react";

const AsideMenu: React.FC = () => {
  return (
    <div className="w-full h-full fixed top-0 left-0 bg-grey-900 z-20 bg-opacity-10 bg-opacity-80">
      <div className="w-60 h-full bg-primary p-4">
        <p className="font-bold text-2xl">Movie Library</p>
      </div>
    </div>
  );
};

export default AsideMenu;
