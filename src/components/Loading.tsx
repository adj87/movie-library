import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Loading: React.FC = () => {
  const loading = true;
  return (
    <div
      className={`w-full h-full fixed top-0 left-0 bg-primary z-40 bg-opacity-80 flex justify-center items-center ${
        loading ? "block" : "hidden"
      }`}
    >
      <FontAwesomeIcon icon={faVideo} spin={true} size={"8x"} className="fas" />
    </div>
  );
};

export default Loading;
