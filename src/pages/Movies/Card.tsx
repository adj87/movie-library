import React from "react";
import { Movie } from "../../interfaces/movies";

interface CardProps {
  movie: Movie;
}

const Card: React.FC<CardProps> = ({ movie }) => {
  return (
    <div>
      <p className="mb-2 ellipsis-effect">{movie.title}</p>
      <div
        className="h-36 bg-secondary transform hover:scale-110 transition-all"
        style={{
          backgroundImage: `url(${movie.poster})`,
          backgroundPosition: "center"
        }}
      ></div>
      <div className="mt-2 flex flex-row-reverse">
        {movie.genre.map((el: string) => (
          <span
            key={`genre-tag-${el}`}
            className="px-4 bg-primary-light rounded-lg ml-2"
          >
            {el}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
