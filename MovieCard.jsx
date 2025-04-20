import React from "react";

const MovieCard = ({ movie, onMoreInfo }) => {
  return (
    <div className="bg-zinc-800 p-4 rounded shadow-md">
      <img src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"} alt={movie.Title} className="mb-2 w-full h-80 object-cover rounded" />
      <h2 className="text-lg font-semibold text-green-400">{movie.Title}</h2>
      <p>{movie.Year}</p>
      <button
        onClick={() => onMoreInfo(movie.imdbID)}
        className="mt-2 px-3 py-1 bg-white text-black rounded hover:bg-gray-200"
      >
        More Info
      </button>
    </div>
  );
};

export default MovieCard;
