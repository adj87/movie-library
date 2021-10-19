import React from "react";

import Body from "../../components/Body";
import Header from "../../components/Header";
import { RootState, useAppDispatch, useAppSelector } from "../../store";

const MovieCreate: React.FC<any> = () => {
  const dispatch = useAppDispatch();
  const movie = useAppSelector((state: RootState) => state.movieDetail.movie);

  return (
    <>
      <Header text={"Crear película"} />
      <Body>
        <div>new</div>
      </Body>
    </>
  );
};

export default MovieCreate;
