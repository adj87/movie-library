import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import Body from "../../components/Body";
import Header from "../../components/Header";
import { RootState, useAppDispatch, useAppSelector } from "../../store";
import { fetchAll } from "./redux/operations";
import { useTranslation } from "react-i18next";

const MovieDetail: React.FC<any> = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const movie = useAppSelector((state: RootState) => state.movieDetail.movie);
  useEffect(() => {
    fetchAll(dispatch, id);
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
            <span className="text-grey-400">{t("movie.imdbRating")}</span>
            <span className="text-2xl">{movie?.imdbRating}</span>
          </div>
          <div className="text-center font-bold flex flex-col">
            <span className="text-grey-400">{t("movie.duration")}</span>
            <span className="text-2xl">{`${movie?.duration ?? ""} m`}</span>
          </div>
          <div
            className="bg-primary-light rounded-lg text-center cursor-pointer"
            onClick={() => alert("Just faking 😄")}
          >
            {t("watch-in")}
            <span className="text-red text-2xl font-bold"> NETFLIX</span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
          <TitleAndList list={movie?.actors} title={t("movie.actors")} />
          <TitleAndList list={[movie?.company]} title={t("movie.company")} />
          <TitleAndList list={movie?.genre} title={t("movie.genre")} />
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
