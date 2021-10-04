import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <nav className="navbar  navbar-expand-lg navbar-light bg-info  ">
        <Link className="navbar-brand container " to="/home"><h1>UPH</h1></Link>
      <div className=" d-flex ms-auto d-block ">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav  ">
            <li className="nav-item px-5">
            <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item px-3">
            <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item px-3">
            <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item px-3">
            <Link className="nav-link" to="/academic">Academic</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
};

export default Header;