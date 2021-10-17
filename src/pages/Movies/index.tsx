import React, { useEffect } from "react";
import Body from "../../components/Body";
import Header from "../../components/Header";
import { set as setMovies } from "./redux";
import { RootState, useAppDispatch, useAppSelector } from "../../store";
import { Movie } from "../../interfaces/movies";
import Card from "./Card";

const Movies: React.FC = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state: RootState) => state.movies.list);
  useEffect(() => {
    fetch("http://localhost:3001/movies")
      .then((res) => res.json())
      .then((movies: Movie[]) => {
        dispatch(setMovies(movies));
      });
  }, []);
  return (
    <>
      <Header text="Movies" />
      <Body>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12"
          style={{ rowGap: "5rem" }}
        >
          {movies.map((movie: Movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </Body>
    </>
  );
};

export default Movies;
