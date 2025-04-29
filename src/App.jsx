// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import MovieCard from './components/MovieCard';
// import MovieDetails from './components/MovieDetails';
// import VideoPlayer from './components/VideoPlayer';
// import { API_KEY, BASE_URL } from './config'; // Import from config

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { API_KEY, BASE_URL } from './config';
import Navbar from './components/Navbar';
import MovieCard from './components/MovieCard';
import MovieDetails from './components/MovieDetails';
import VideoPlayer from './components/VideoPlayer';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/movie/popular?api_key=${API_KEY}`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-secondary">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="px-4 py-8 mx-auto max-w-7xl">
                <h2 className="mb-6 text-3xl font-bold text-accent">Popular Movies</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                  ))}
                </div>
              </div>
            }
          />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/watch/:id" element={<VideoPlayer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
