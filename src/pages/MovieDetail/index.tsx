import React, { useEffect } from "react";
import Body from "../../components/Body";
import Header from "../../components/Header";
import { set as setMovieDetail } from "./redux";
import { RootState, useAppDispatch, useAppSelector } from "../../store";
import { Movie } from "../../interfaces/movies";
import { useRoute } from "wouter";

const MovieDetail: React.FC<any> = (props) => {
  const dispatch = useAppDispatch();
  const [, params] = useRoute("/movies/:id");
  const movie = useAppSelector((state: RootState) => state.movieDetail);
  useEffect(() => {
    fetch(`http://localhost:3001/movies/${params?.id}`)
      .then((res) => res.json())
      .then((movie: Movie) => {
        dispatch(setMovieDetail(movie));
      });
  }, []);
  return (
    <>
      <Header text="Movies" />
      <Body>
        <p>Holaaa</p>
      </Body>
    </>
  );
};

export default MovieDetail;
