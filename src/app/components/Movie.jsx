import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const imageVar = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  exit: { opacity: 0 },
};

function Movie({ movie }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-5"
      layout
      variants={imageVar}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="relative">
        <span className="absolute rounded-full right-3 top-2 w-10 h-10 bg-orange-400 shadow-md shadow-black flex items-center justify-center">
          {movie.vote_average.toFixed(1)}
        </span>
        <Image
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          width={200}
          height={150}
          className="object-cover rounded-md"
        />
      </div>

      <h1 className="flex font-bold text-sm uppercase text-center">
        {movie.title}
      </h1>
    </motion.div>
  );
}

export default Movie;
