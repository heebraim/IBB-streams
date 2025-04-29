import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed z-20 w-full px-6 py-4 shadow-lg top bg-secondary">
      <div className="flex items-center justify-between gap-10 mx-auto max-w-7xl">
        <Link to="/" className="text-3xl font-bold text-primary">
          IBBStreams
        </Link>
        <div className="space-x-6">
          <span className="cursor-pointer text-accent hover:text-primary">Home</span>
          <span className="cursor-pointer text-accent hover:text-primary">Movies</span>
          <span className="cursor-pointer text-accent hover:text-primary">TV Shows</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;