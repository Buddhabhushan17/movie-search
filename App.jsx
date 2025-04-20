import { useState } from "react";
import MovieCard from "./components/MovieCard";
import MovieModal from "./components/MovieModal";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "dbb6f8c8"; // Your OMDb API Key

  const handleSearch = async () => {
    if (!searchTerm) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`
      );
      const data = await res.json();
      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setError(data.Error);
        setMovies([]);
      }
    } catch {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const fetchDetails = async (id) => {
    const res = await fetch(
      `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
    );
    const data = await res.json();
    setSelectedMovie(data);
  };

  return (
    <div className="p-4 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold text-center mb-6">🎬 Movie Search</h1>
      <div className="flex justify-center gap-2 mb-6">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 w-64 rounded text-black"
        />
        <button onClick={handleSearch} className="bg-blue-600 px-4 py-2 rounded">
          Search
        </button>
      </div>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-400">{error}</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} onMoreInfo={fetchDetails} />
        ))}
      </div>

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
}

export default App;
