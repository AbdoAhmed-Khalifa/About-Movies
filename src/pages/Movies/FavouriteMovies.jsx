import { useSelector } from 'react-redux';
import MovieCard from '../../components/MovieCard/MovieCard';

function FavouriteMovies() {
  const favouriteMovies = useSelector(state => state.favouriteMovies);

  return (
    <div className=" min-h-screen">
      <h1 className="mb-4 flex place-content-center my-6 mx-60 text-2xl font-extrabold leading-none tracking-tight text-gray-500 md:text-3xl lg:text-4xl dark:text-white">
        <mark className="px-2 text-white bg-teal-600 rounded dark:bg-blue-500">
          Favourite
        </mark>
        Movies
      </h1>
      <div className=" container w-fit mx-32 grid grid-cols-4 gap-4">
        {favouriteMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
export default FavouriteMovies;
