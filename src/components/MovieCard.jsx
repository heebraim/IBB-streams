import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (
      <div className="relative overflow-hidden transition-transform duration-300 rounded-lg shadow-lg group hover:scale-105 hover:shadow-xl">
        <Link to={`/movie/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="object-cover w-full h-64"
          />
          <div className="absolute inset-0 flex items-end p-4 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black to-transparent group-hover:opacity-100">
            <h3 className="text-lg font-bold text-white truncate">{movie.title}</h3>
          </div>
          <div className="p-4 bg-secondary">
            <h3 className="font-semibold truncate text-accent">{movie.title}</h3>
            <p className="mt-1 text-sm text-gray-400">
              {movie.release_date?.split('-')[0]}
            </p>
          </div>
        </Link>
      </div>
    );
  };

export default MovieCard;