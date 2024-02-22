import { configureStore } from '@reduxjs/toolkit';
import handleFavourite from './slices/handleFavourite';
import movieSlice from './slices/moviesApi';

const store = configureStore({
  reducer: {
    favouriteMovies: handleFavourite,
    movies: movieSlice,
  },
});
export default store;
