import React, { useEffect } from "react";
import Body from "../../components/Body";
import Header from "../../components/Header";
import { set as setMovieDetail } from "./redux";
import { RootState, useAppDispatch, useAppSelector } from "../../store";
import { Movie } from "../../interfaces/movie";
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
      <Header text={movie?.title} />
      <Body>
        <div
          className="h-60 bg-secondary rounded-lg border border-primary-light"
          style={{
            backgroundImage: `url(${movie?.poster})`,
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-4">
          <div className="text-center font-bold flex flex-col">
            <span className="text-grey-400">Puntuacion</span>
            <span className="text-2xl">{movie?.imdbRating}</span>
          </div>
          <div className="text-center font-bold flex flex-col">
            <span className="text-grey-400">Duracción</span>
            <span className="text-2xl">{`${movie?.duration} m`}</span>
          </div>
          <div className="bg-primary-light rounded-lg text-center cursor-pointer">
            Ver en <span className="text-red text-2xl font-bold">NETFLIX</span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
          <TitleAndList list={movie?.actors} title="Actores" />
          <TitleAndList list={movie?.actors} title="Company" />
          <TitleAndList list={movie?.genre} title="Géneros" />
        </div>
      </Body>
    </>
  );
};

const TitleAndList: React.FC<any> = ({ title, list }) => {
  return (
    <div className="text-left font-bold flex flex-col">
      <span className="text-grey-400 border-grey-500 border-b-2">{title}</span>
      <div className="flex flex-col">
        {list?.map((el: string | number) => (
          <p key={`${title}-${el}`} className="text-2xl">
            {el}
          </p>
        ))}
      </div>
    </div>
  );
};

export default MovieDetail;
