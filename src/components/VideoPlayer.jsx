import React from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL, API_KEY } from '../config'; // Import from config
import { useState,useEffect } from 'react';
import axios from 'axios';

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { API_KEY, BASE_URL } from '../config';

const VideoPlayer = () => {
  const { id } = useParams();
  const [videoKey, setVideoKey] = useState(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`
        );
        const trailer = response.data.results.find(
          (vid) => vid.site === 'YouTube' && vid.type === 'Trailer'
        );
        if (trailer) setVideoKey(trailer.key);
      } catch (error) {
        console.error('Error fetching trailer:', error);
      }
    };
    fetchTrailer();
  }, [id]);

  return (
    <div className="min-h-screen p-8 bg-secondary text-accent">
      <div className="max-w-6xl mx-auto">
        {videoKey ? (
          <>
            <h2 className="mb-4 text-3xl font-bold">Trailer Preview</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-96"
                src={`https://www.youtube.com/embed/${videoKey}`}
                title="Trailer"
                allowFullScreen
              ></iframe>
            </div>
            <p className="mt-4 text-lg">
              Full movies not available in demo. This is a trailer only.
            </p>
          </>
        ) : (
          <p>Loading trailer...</p>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;

