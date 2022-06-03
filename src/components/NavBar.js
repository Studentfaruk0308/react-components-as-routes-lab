import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
        <NavLink to="/" activeStyle={{background: 'darkblue'}}>Home</NavLink>
        <NavLink to="/Movies" activeStyle={{background: 'darkblue'}}>Movies</NavLink>
        <NavLink to="/Directors" activeStyle={{background: 'darkblue'}}>Directors</NavLink>
        <NavLink to="/Actors" activeStyle={{background: 'darkblue'}}>Actors</NavLink>
    </div>
  );
};

export default NavBar;
