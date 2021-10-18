export interface Movie {
  id: number;
  title: string;
  poster: string;
  genre: string[];
  year: number;
  duration: number;
  imdbRating: number;
  actors: number[];
}

export interface MovieWithCompanyAndActorsAsStrings
  extends Omit<Movie, "actors"> {
  actors: string[];
  company: string;
}
