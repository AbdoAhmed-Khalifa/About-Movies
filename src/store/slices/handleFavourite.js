import { createSlice } from '@reduxjs/toolkit';

const handlefavourite = createSlice({
  name: 'favouriteMovies',
  initialState: [],
  reducers: {
    addFavouriteMovie: (state, action) => {
      state.push(action.payload);
    },
    removeFavouriteMovie: (state, action) => {
      state = state.filter(movie => movie.id !== action.payload);
      return state;
    },
  },
});

export const { addFavouriteMovie, removeFavouriteMovie } =
  handlefavourite.actions;
export default handlefavourite.reducer;
