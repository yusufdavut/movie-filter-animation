"use client";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import Filter from "./Filter";
import { motion, AnimatePresence } from "framer-motion";

const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDQwNmFlOGI0MWY4MjdhMjY2NzE1YjQ4ZTY3ZjAyNyIsIm5iZiI6MTcyMzA1MzE2My45MTE5MTEsInN1YiI6IjY2YjNiMzQzMTRiYmY3NWVlM2I1MjIwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IVyld2ilWZXEGK8UWREZMpQ4bcdz6mT18H9mOO4GW14",
  },
};

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  const getAllMovies = async () => {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    setMovies(data.results);
    setFilteredMovies(data.results);
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <div className="flex flex-col py-10">
      <Filter
        setActiveGenre={setActiveGenre}
        activeGenre={activeGenre}
        movies={movies}
        setFilteredMovies={setFilteredMovies}
      />
      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10"
      >
        <AnimatePresence>
          {filteredMovies.map((movie) => (
            <Movie movie={movie} key={movie.id} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default MovieList;
