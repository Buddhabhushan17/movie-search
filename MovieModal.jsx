import ReactDOM from "react-dom";

const MovieModal = ({ movie, onClose }) => {
  // Get the screen height, width, and scroll position
  const screenHeight = window.innerHeight;
  const screenWidth = window.innerWidth;
  const scrollPosition = window.scrollY; // The amount the user has scrolled

  // Calculate the modal position
  const modalTop = Math.max(scrollPosition + 100, screenHeight * 0.2); // Modal 20% from the top or 100px down
  const modalLeft = screenWidth * 0.05; // Position it 5% from the left of the screen
  
  return ReactDOM.createPortal(
    <div className="fixed z-50 bg-black bg-opacity-180" style={{ top: modalTop, left: modalLeft }}>
      <div className="relative bg-zinc-900 text-white rounded-lg p-6 max-w-3xl w-[90%] shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-600 text-white rounded-full px-3 py-1 hover:bg-red-700"
        >
          ✕
        </button>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"}
            alt={movie.Title}
            className="w-48 h-auto rounded"
          />
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-green-400">{movie.Title}</h2>
            <p><span className="text-green-300 font-semibold">Genre:</span> {movie.Genre}</p>
            <p><span className="text-green-300 font-semibold">Ratings:</span> {movie.imdbRating}/10</p>
            <p><span className="text-green-300 font-semibold">Actors:</span> {movie.Actors}</p>
            <p><span className="text-green-300 font-semibold">Director:</span> {movie.Director}</p>
            <p><span className="text-green-300 font-semibold">Release Date:</span> {movie.Released}</p>
            <p><span className="text-green-300 font-semibold">Box Office:</span> {movie.BoxOffice}</p>
            <p><span className="text-green-300 font-semibold">IMDb ID:</span> {movie.imdbID}</p>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default MovieModal;
