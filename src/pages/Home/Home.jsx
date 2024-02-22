import configAxios from '../../BaseUrl/BaseUrl';
import { useEffect, useState } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    configAxios.get('/movie/top_rated').then(data => {
      setMovies(data.data.results);
    });
  }, []);
  return (
    <div>
      <h1 className="mb-4 flex place-content-center my-6 mx-60 text-2xl font-extrabold leading-none tracking-tight text-gray-500 md:text-3xl lg:text-4xl dark:text-white">
        Top{' '}
        <mark className="px-2 text-white bg-teal-600 rounded dark:bg-blue-500">
          Rated
        </mark>{' '}
        Movies
      </h1>
      <div className=" container w-fit mx-32 grid grid-cols-4 gap-4">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
