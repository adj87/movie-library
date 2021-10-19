import React, { useCallback, useState } from "react";

import Body from "../../components/Body";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { Movie } from "../../interfaces/movie";

const initialFormState = {
  id: undefined,
  title: undefined,
  poster: undefined,
  genre: [],
  year: undefined,
  duration: undefined,
  imdbRating: undefined,
  actors: [],
  company: undefined
};

const MovieCreate: React.FC<any> = () => {
  const [formState, setFormState] = useState(initialFormState);
  const updateForm = useCallback((name, value) => {
    setFormState((oldState) => ({ ...oldState, [name]: value }));
  }, []);
  console.log(formState);
  return (
    <>
      <Header text={"Crear película"} />
      <Body>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-4">
          <Input
            value={formState.title}
            name={"title"}
            label={"Título"}
            onChange={updateForm}
          />
          <Input
            value={formState.poster}
            name={"poster"}
            label={"Poster"}
            onChange={updateForm}
          />
          {/*           <Input
            value={formState.genre}
            name={"genre"}
            label={"Genres"}
            onChange={(name, value) => console.log(name, value)}
          />
          <Input
            value={formState.actors}
            name={"actors"}
            label={"Actores"}
            onChange={(name, value) => console.log(name, value)}
          /> */}
          <Input
            value={formState.company}
            name={"company"}
            label={"Company"}
            onChange={updateForm}
          />
          <Input
            value={formState.year}
            name={"year"}
            label={"Year"}
            onChange={updateForm}
          />
          <Input
            value={formState.duration}
            name={"duration"}
            label={"Duration"}
            onChange={updateForm}
          />
          <Input
            value={formState.imdbRating}
            name={"imdbRating"}
            label={"imdbRating"}
            onChange={updateForm}
          />
        </div>
      </Body>
    </>
  );
};

export default MovieCreate;
