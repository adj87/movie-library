// This file is intended for functions dispatching as many actions as desired in a row. These functions will make component files look cleaner
// This approach comes from redux-duck pattern

import { setActors, setCompanies, setLoading } from ".";
import { API_HOST } from "../../../constants";
import { Actor } from "../../../interfaces/actor";
import { Company } from "../../../interfaces/company";

type ApiResponse = [Actor[], Company[]];

export const fetchAll: (dispatch: any) => void = (dispatch) => {
  dispatch(setLoading(true));
  Promise.all([fetch(`${API_HOST}/actors`), fetch(`${API_HOST}/companies`)])
    .then((responses) =>
      Promise.all(responses.map((res: Response) => res.json()))
    )
    .then((res) => {
      const [actors, companies] = res as ApiResponse;
      dispatch(setActors(actors));
      dispatch(setCompanies(companies));
      dispatch(setLoading(false));
    });
};
