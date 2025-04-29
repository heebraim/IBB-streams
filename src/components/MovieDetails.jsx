import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { API_KEY, BASE_URL } from '../config'; // Fixed import

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
        );
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };
    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;


  return (
    <div className="min-h-screen bg-secondary text-accent">
      <div className="px-4 py-8 mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full rounded-lg shadow-xl md:w-1/3"
          />
          <div className="flex-1">
            <h1 className="mb-2 text-4xl font-bold">{movie.title}</h1>
            <div className="flex items-center mb-4 space-x-4">
              <span className="px-2 py-1 text-sm rounded bg-primary">
                {movie.release_date?.split('-')[0]}
              </span>
              <span>{Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m</span>
            </div>
            <p className="mb-6 text-lg">{movie.overview}</p>
            <Link
              to={`/watch/${movie.id}`}
              className="inline-flex items-center px-6 py-3 font-bold text-white transition-colors rounded-lg bg-primary hover:bg-red-700"
            >
              Watch Trailer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;