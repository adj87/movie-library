import React, { useEffect } from "react";
import Body from "../../components/Body";
import Header from "../../components/Header";
import { setMovies, setLoading } from "./redux";
import { RootState, useAppDispatch, useAppSelector } from "../../store";
import { Movie } from "../../interfaces/movie";
import Card from "./Card";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "wouter";
import { API_HOST } from "../../constants";

const Movies: React.FC = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state: RootState) => state.movies.list);
  const [, setLocation] = useLocation();
  useEffect(() => {
    dispatch(setLoading(true));
    fetch(`${API_HOST}/movies`)
      .then((res) => res.json())
      .then((movies: Movie[]) => {
        dispatch(setMovies(movies));
        dispatch(setLoading(false));
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
            <Card
              key={movie.id}
              movie={movie}
              onClick={() => setLocation(`/movies/${movie.id}`)}
            />
          ))}
        </div>
      </Body>
      <FontAwesomeIcon
        icon={faPlusCircle}
        className="cursor-pointer fixed bottom-6 right-6 text-secondary transition-all hover:text-white hover:scale-110"
        size="6x"
      />
    </>
  );
};

export default Movies;
