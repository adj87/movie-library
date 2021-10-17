import React from "react";

interface BodyProps {
    children: React.FC
}

const Body: React.FC<BodyProps> = ({ children }) => (
  <div className="md:mx-12 lg:mx-16 xl:mx-40 mt-12 xs:mt-32">
    {children}
  </div>
);

export default Body;
