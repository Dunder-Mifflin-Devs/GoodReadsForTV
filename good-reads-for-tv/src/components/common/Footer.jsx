import {NavLink} from 'react-router-dom';
// import { Link } from 'react-router-dom'
// import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer className="w-full bg-[--blue] h-24 text-[--white] flex justify-between items-center px-5">
      <div className="flex gap-10">
        {/* <Link to={'/'}><img className={style.logo} src={logo} alt={logo} /></Link> */}
        <h2 className="text-2xl">GoodReadsForTV</h2>
      </div>
      <div className="">
        <NavLink to="/" className="hover:text-[--orange] hover:underline text-base px-10">
          Home
        </NavLink>
        <NavLink to="/movies" className="hover:text-[--orange] hover:underline text-base px-10">
          Movies
        </NavLink>
        <NavLink to="/tv" className="hover:text-[--orange] hover:underline text-base px-10">
          TV Shows
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
