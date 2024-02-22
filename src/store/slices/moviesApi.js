import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import configAxios from '../../BaseUrl/BaseUrl';

export const movieAction = createAsyncThunk('movies/getMovies', async page => {
  const res = await configAxios.get('/movie/popular', {
    params: {
      api_key: '886913db05826ee2f72691737c1b0fe9',
      page: page,
    },
  });
  return res.data.results;
});
export const movieActionByName = createAsyncThunk(
  'movies/getMoviebyName',
  async name => {
    const res = await configAxios.get(`/search/movie?query={${name}}`);
    return res.data.results;
  }
);

const movieSlice = createSlice({
  name: 'movies',
  initialState: { movies: [] },
  extraReducers: builder => {
    builder.addCase(movieAction.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
    builder.addCase(movieActionByName.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});

export default movieSlice.reducer;
