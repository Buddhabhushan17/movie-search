function MovieCard({ movie, onMoreInfo }) {
    return (
      <div className="bg-gray-800 rounded p-3 shadow-lg">
        <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover rounded" />
        <h2 className="mt-2 font-semibold text-lg">{movie.Title}</h2>
        <p className="text-sm text-gray-400">{movie.Year}</p>
        <button
          className="mt-2 text-blue-400 underline"
          onClick={() => onMoreInfo(movie.imdbID)}
        >
          More Info
        </button>
      </div>
    );
  }
  
  export default MovieCard;
  