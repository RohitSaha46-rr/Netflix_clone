import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import logo from './images/logo.jpg';
import './navbar.css';
const Navbar = () => {
  const icon=useRef(null);
  window.onscroll= () =>{
    if(window.scrollY>25){
   icon.current.classList.add("active");
    }
    else{
    icon.current.classList.remove("active");
    }
};
  return (
    <div className='nAvbar' ref={icon}>
        <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={logo}></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a  aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <Link to="/tvshows"><a  href="">Tv Shows</a></Link>
        </li>
        <li className="nav-item">
          <Link to="/movies"><a  href="">Movies</a></Link>
        </li>
        <li className="nav-item">
         <Link to="/trending"> <a  href="">Trending</a></Link>
        </li>
        <li className="nav-item">
          <Link to="/my_list"><a  href="">My List</a></Link>
        </li>
      </ul>
      <div className='icons'>
       <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
       <FontAwesomeIcon icon={faBell} className='ps-5'></FontAwesomeIcon>
      </div>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar