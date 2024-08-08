"use client";
import React, { useEffect } from "react";

function Filter({ setActiveGenre, activeGenre, movies, setFilteredMovies }) {
  useEffect(() => {
    console.log(activeGenre);
    if (activeGenre === 0) {
      setFilteredMovies(movies);
      return;
    }
    const filtered = movies.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFilteredMovies(filtered);
  }, [activeGenre]);

  return (
    <div className="flex gap-5 mb-10">
      <button
        className={
          activeGenre === 35
            ? "bg-teal-500 text-white rounded-md p-3"
            : "border-teal-500 rounded-md p-3"
        }
        onClick={() => setActiveGenre(35)}
      >
        Comedy
      </button>
      <button
        className={
          activeGenre === 28
            ? "bg-teal-500 text-white rounded-md p-3"
            : "border-teal-500 rounded-md p-3"
        }
        onClick={() => setActiveGenre(28)}
      >
        Action
      </button>
      <button
        className={
          activeGenre === 16
            ? "bg-teal-500 text-white rounded-md p-3"
            : "border-teal-500 rounded-md p-3"
        }
        onClick={() => setActiveGenre(16)}
      >
        Animation
      </button>
    </div>
  );
}

export default Filter;
