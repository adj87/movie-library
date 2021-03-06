import React from "react";
import { Movie } from "../../interfaces/movie";

interface CardProps {
  movie: Movie;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ movie, onClick }) => {
  return (
    <div>
      <p className="mb-6 ellipsis-effect font-semibold">{movie.title}</p>
      <div
        className="h-40 bg-secondary transform hover:scale-110 transition-all rounded-lg cursor-pointer border border-primary-light"
        style={{
          backgroundImage: `url(${movie.poster})`,
          backgroundPosition: "center"
        }}
        onClick={onClick}
      />
      <div className="mt-1 flex flex-row-reverse flex-wrap ">
        {movie.genre.map((el: string) => (
          <span
            key={`genre-tag-${el}`}
            className="px-4 bg-primary-light rounded-lg ml-2 cursor-default text-xs mt-1"
          >
            {`#${el}`}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
