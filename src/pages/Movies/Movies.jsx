'use client';
import MovieCard from '../../components/MovieCard/MovieCard';
import configAxios from '../../BaseUrl/BaseUrl';
import { useContext, useEffect, useState } from 'react';
import { Pagination } from 'flowbite-react';
import { TextInput, Button } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { Badge } from 'flowbite-react';
import { languageContext } from '../../context/language';
import { movieAction, movieActionByName } from '../../store/slices/moviesApi';

function Movies() {
  // const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const { lang } = useContext(languageContext);
  const movies = useSelector(state => state.movies.movies);
  const dispatch = useDispatch();
  const onPageChange = page => {
    setCurrentPage(page);
    dispatch(movieAction(page));
    // configAxios
    //   .get('/movie/popular', { params: { page: currentPage } })
    //   .then(data => {
    //     setMovies(data.data.results);
    //   })
    //   .catch(() => {
    //     setMovies([]);
    //   });
  };
  function getMovieByName(e) {
    e.preventDefault();
    if (search) dispatch(movieActionByName(search));
    else dispatch(movieAction());
    // // configAxios
    // //   .get(`/search/movie?query={${search}}`)
    // //   .then(res => setMovies(res.data.results));
    // // setMovies(data.data.results);
  }
  useEffect(() => {
    // configAxios
    //   .get('/movie/popular', { params: { page: currentPage } })
    //   .then(data => {
    //     setMovies(data.data.results);
    //   });
    dispatch(movieAction());
  }, []);

  return (
    <div className="my-5 ">
      <div className=" flex place-content-center mb-5">
        <Badge
          onClick={() => {
            navigate('/favourite');
          }}
          className="mt-2 text-md cursor-pointer"
        >
          language: {lang}
        </Badge>
        <form onSubmit={e => getMovieByName(e)} className="flex">
          <TextInput
            className="mx-6 w-80 "
            id="small"
            type="text"
            sizing="md"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <Button type="sumbit">Search</Button>
        </form>
      </div>

      <div className=" container w-fit mx-32 grid grid-cols-4 gap-4">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div className=" flex place-content-center">
        <div className="flex  justify-center ">
          <Pagination
            currentPage={currentPage}
            totalPages={500}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </div>
  );
}
export default Movies;
