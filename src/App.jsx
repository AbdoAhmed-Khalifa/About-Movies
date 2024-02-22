import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageFooter from './components/Footer/PageFooter';
import Header from './components/Navbar/Header';
import Movies from './pages/Movies/Movies';
import LogIn from './pages/LogIn/LogIn';
import Register from './pages/Register/Register';
import MovieDetails from './pages/Movies/MovieDetails';
import Home from './pages/Home/Home';
import { Provider } from 'react-redux';
import store from './store/store';
import FavouriteMovies from './pages/Movies/FavouriteMovies';
import { LanguageProvider } from './context/language';
import { useState } from 'react';
function App() {
  const [lang, setLang] = useState('en');
  return (
    <LanguageProvider value={{ lang, setLang }}>
      <Provider store={store}>
        <BrowserRouter>
          <div className="bg-slate-950">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/favourite" element={<FavouriteMovies />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/register" element={<Register />} />
            </Routes>
            <PageFooter />
          </div>
        </BrowserRouter>
      </Provider>
    </LanguageProvider>
  );
}

export default App;
