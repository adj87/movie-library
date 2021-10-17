import React from "react";
import Body from "../../components/Body";
import Header from "../../components/Header";

const Movies: React.FC = () => (
  <>
    <Header text="movies"/>
    <Body>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="bg-secondary">Hallooo</div>
        <div className="bg-secondary">Bye</div>
        <div className="bg-secondary">Mye</div>
        <div className="bg-secondary">Mye</div>
      </div>
    </Body>
  </>
);

export default Movies;
