import React, { useCallback, useEffect, useState } from "react";
import Select, { MultiValue, SingleValue } from "react-select";

import Body from "../../components/Body";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { Actor } from "../../interfaces/actor";
import { Company } from "../../interfaces/company";
import { RootState, useAppDispatch, useAppSelector } from "../../store";
import { fetchAll } from "./redux/operations";

const initialFormState = {
  id: undefined,
  title: undefined,
  poster: undefined,
  genre: undefined,
  year: undefined,
  duration: undefined,
  imdbRating: undefined,
  actors: undefined,
  company: undefined
};

const MovieCreate: React.FC<any> = () => {
  const [formState, setFormState] = useState(initialFormState);
  const dispatch = useAppDispatch();
  const [actors, companies] = useAppSelector(({ movieCreate }: RootState) => [
    movieCreate.actors,
    movieCreate.companies
  ]);
  const updateForm = useCallback((name, value) => {
    setFormState((oldState) => ({ ...oldState, [name]: value }));
  }, []);
  useEffect(() => {
    fetchAll(dispatch);
  }, []);
  return (
    <>
      <Header text={"Crear película"} />
      <Body>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(`The values are ${JSON.stringify(formState, null, 2)}`);
            alert("TODO: Validation and send data to backend");
          }}
        >
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
            <div>
              <label className="text-grey-200 mb-4">{"Genre"}</label>
              <Select
                classNamePrefix="react-select"
                options={[
                  { value: "Fiction", label: "Fiction" },
                  { value: "Drama", label: "Drama" }
                ]}
                isMulti
                value={formState.genre}
                name="genre"
                onChange={(genres: any, { name }) => {
                  updateForm(name, genres);
                }}
              />
            </div>

            <div>
              <label className="text-grey-200 mb-4">{"Actors"}</label>
              <Select
                classNamePrefix="react-select"
                options={actors}
                isMulti
                getOptionValue={(opt: any) => opt.id}
                value={formState.actors}
                name="actors"
                onChange={(actors: MultiValue<Actor>, { name }) => {
                  updateForm(name, actors);
                }}
                getOptionLabel={(el: Actor) =>
                  `${el.first_name} ${el.last_name}`
                }
              />
            </div>
            <div>
              <label className="text-grey-200 mb-4">{"Company"}</label>
              <Select
                classNamePrefix="react-select"
                options={companies}
                getOptionValue={(opt: any) => opt.id}
                value={formState.company}
                name="company"
                onChange={(c: SingleValue<Company>, { name }) => {
                  updateForm(name, c);
                }}
                getOptionLabel={(c: Company) => c.name}
              />
            </div>

            <Input
              value={formState.year}
              name={"year"}
              type="number"
              label={"Year"}
              onChange={updateForm}
            />
            <Input
              value={formState.duration}
              name={"duration"}
              type="number"
              label={"Duration"}
              onChange={updateForm}
            />
            <Input
              value={formState.imdbRating}
              name={"imdbRating"}
              type="number"
              label={"imdbRating"}
              onChange={updateForm}
            />
          </div>
          <div className="my-16 text-center">
            <button
              type="submit"
              className="px-16 py-2 text-xl bg-secondary rounded-md w-full sm:w-auto"
            >
              Enviar
            </button>
          </div>
        </form>
      </Body>
    </>
  );
};

export default MovieCreate;
