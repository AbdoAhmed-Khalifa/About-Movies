'use client';
import { Button, Navbar } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Badge } from 'flowbite-react';
import { BiSolidCameraMovie } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { languageContext } from '../../context/language';
function Header() {
  const navigate = useNavigate();
  const favouriteMovies = useSelector(state => state.favouriteMovies);
  const { lang, setLang } = useContext(languageContext);
  console.log(lang);
  return (
    <Navbar fluid rounded className=" bg-slate-900  ">
      <Navbar.Brand href="/">
        <span className=" text-3xl self-center whitespace-nowrap  font-semibold text-white">
          About Movies
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Badge
          onClick={() => {
            navigate('/favourite');
          }}
          className="mt-2 cursor-pointer"
          icon={BiSolidCameraMovie}
        >
          {favouriteMovies.length
            ? `${favouriteMovies.length} Movies Added`
            : 'No Movie Added'}
        </Badge>
        <Button
          onClick={() => {
            navigate('/login');
          }}
          className="mx-2"
        >
          Login
        </Button>
        <Button
          onClick={() => {
            navigate('/register');
          }}
        >
          Register
        </Button>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <select
          className=" bg-transparent border-0  text-cyan-950"
          onChange={e => setLang(e.target.value)}
        >
          <option value="en">English</option>
          <option value="ar">Arabic</option>
        </select>
        <Navbar.Link className="text-white text-xl">
          <Link to={'/'}>Home</Link>
        </Navbar.Link>
        <Navbar.Link className="text-white text-xl">
          <Link to={'/movies'}>Movies</Link>
        </Navbar.Link>
        <Navbar.Link className="text-white text-xl">
          <Link to={'/favourite'}>Favourite Movies</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
