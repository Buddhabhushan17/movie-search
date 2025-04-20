function MovieModal({ movie, onClose }) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
        <div className="bg-gray-800 p-6 rounded shadow-xl max-w-md text-white">
          <h2 className="text-2xl font-bold mb-2">{movie.Title}</h2>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
          <p className="mt-2"><strong>Plot:</strong> {movie.Plot}</p>
          <button
            className="mt-4 bg-red-600 px-4 py-2 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    );
  }
  
  export default MovieModal;
  