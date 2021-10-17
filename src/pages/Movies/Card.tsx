import React from "react";
import { Movie } from "../../interfaces/movies";

interface CardProps {
  movie: Movie;
}

const Card: React.FC<CardProps> = ({ movie }) => {
  return (
    <div>
      <p className="mb-6 ellipsis-effect font-semibold text-xl">
        {movie.title}
      </p>
      <div
        className="h-40 bg-secondary transform hover:scale-110 transition-all rounded-lg cursor-pointer"
        style={{
          backgroundImage: `url(${movie.poster})`,
          backgroundPosition: "center"
        }}
      ></div>
      <div className="mt-1 flex flex-row-reverse flex-wrap ">
        {movie.genre.map((el: string) => (
          <span
            key={`genre-tag-${el}`}
            className="px-4 bg-primary-light rounded-lg ml-2 cursor-default text-sm mt-1"
          >
            {`#${el}`}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
