'use client';
import { BsSuitHeartFill } from 'react-icons/bs';
import { BsSuitHeart } from 'react-icons/bs';
import { Card, Button } from 'flowbite-react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavouriteMovie,
  removeFavouriteMovie,
} from '../../store/slices/handleFavourite';

function MovieCard({ movie }) {
  const favouriteMovies = useSelector(state => state.favouriteMovies);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let isAdded = false;
  favouriteMovies.map(mov => {
    mov.id === movie.id ? (isAdded = true) : '';
  });
  function goToMovieDetails(id) {
    navigate(`/movie/${id}`);
  }

  function addToFavorite() {
    dispatch(addFavouriteMovie(movie));
  }

  function removeFromFavorite() {
    dispatch(removeFavouriteMovie(movie.id));
  }

  return (
    <Card
      className="  max-w-sm  justify-center bg-slate-400 relative  transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-105 duration-300"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
      //   onClick={() => goToMovieDetails(movie.id)}
    >
      {isAdded ? (
        <BsSuitHeartFill
          onClick={removeFromFavorite}
          fill="red"
          className=" cursor-pointer absolute top-5 right-5 h-90 text-2xl"
        />
      ) : (
        <BsSuitHeart
          onClick={addToFavorite}
          //   fill="white"
          className=" text-red-900 cursor-pointer absolute top-5 right-5 h-90 text-2xl"
        />
      )}
      <div className="h-60 overflow-hidden">
        <h5 className="  text-2xl font-bold tracking-tight text-white">
          {movie.title}
        </h5>
        <p className="font-normal  text-slate-200 ">
          <span>{movie.overview}</span>
        </p>
      </div>
      <Button onClick={() => goToMovieDetails(movie.id)}>
        Movie Details
        <HiOutlineArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </Card>
  );
}
export default MovieCard;
