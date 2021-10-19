// This file is intended for functions dispatching as many actions as desired in a row. These functions will make component files look cleaner
// This approach comes from redux-duck pattern

import { setLoading, setMovie } from ".";
import { API_HOST } from "../../../constants";
import { Actor } from "../../../interfaces/actor";
import { Company } from "../../../interfaces/company";
import {
  Movie,
  MovieWithCompanyAndActorsAsStrings
} from "../../../interfaces/movie";

type ApiResponse = [Movie, Company[], Actor[]];

export const fetchAll: (dispatch: any, id?: string) => void = (
  dispatch,
  id
) => {
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
};
