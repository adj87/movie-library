import React, { useEffect } from "react";
import { useRoute } from "wouter";
import Body from "../../components/Body";
import Header from "../../components/Header";
import { setLoading, setMovie } from "./redux";
import { RootState, useAppDispatch, useAppSelector } from "../../store";
import {
  Movie,
  MovieWithCompanyAndActorsAsStrings
} from "../../interfaces/movie";
import { Actor } from "../../interfaces/actor";
import { Company } from "../../interfaces/company";
import { API_HOST } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

type ApiResponse = [Movie, Company[], Actor[]];

const MovieDetail: React.FC<any> = () => {
  const dispatch = useAppDispatch();
  const [, params] = useRoute("/movies/:id");
  const movie = useAppSelector((state: RootState) => state.movieDetail.movie);
  useEffect(() => {
    const { id } = params || {};
    dispatch(setLoading(true));
    Promise.all([
      fetch(`${API_HOST}/movies/${id}`),
      fetch(`${API_HOST}/companies?movies_like=${id}`),
      fetch(`${API_HOST}/actors?movies_like=${id}`)
    ])
      .then((responses) =>
        Promise.all(responses.map((res: Response) => res.json()))
      )
      .then((res) => {
        const [movie, companies, actors] = res as ApiResponse;
        const company = companies[0].name;
        const actorsName = actors.map(
          (a: Actor) => `${a.first_name} ${a.last_name}`
        );
        const movieWithCompanyAndActors: MovieWithCompanyAndActorsAsStrings = {
          ...movie,
          actors: actorsName,
          company
        };
        dispatch(setMovie(movieWithCompanyAndActors));
        dispatch(setLoading(false));
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
            <span className="text-2xl">{`${movie?.duration ?? ""} m`}</span>
          </div>
          <div
            className="bg-primary-light rounded-lg text-center cursor-pointer"
            onClick={() => alert("Just faking 😄")}
          >
            Ver en <span className="text-red text-2xl font-bold">NETFLIX</span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
          <TitleAndList list={movie?.actors} title="Actores" />
          <TitleAndList list={[movie?.company]} title="Company" />
          <TitleAndList list={movie?.genre} title="Géneros" />
        </div>
        <div className="fixed bottom-4 right-4">
          <FontAwesomeIcon
            icon={faTrash}
            size="3x"
            className="text-red cursor-pointer"
            onClick={() => alert("TO DO")}
          />
          <FontAwesomeIcon
            icon={faEdit}
            size="3x"
            className={"ml-6 text-secondary cursor-pointer"}
            onClick={() => alert("TO DO")}
          />
        </div>
      </Body>
    </>
  );
};

const TitleAndList: React.FC<any> = ({ title, list }) => {
  return (
    <div className="text-left font-bold flex flex-col">
      <span className="text-grey-400 border-grey-500 border-b-2 mb-2">
        {title}
      </span>
      <div className="flex flex-col ">
        {list?.map((el: string | number) => (
          <p key={`${title}-${el}`} className="text-xl">
            {el}
          </p>
        ))}
      </div>
    </div>
  );
};

export default MovieDetail;
