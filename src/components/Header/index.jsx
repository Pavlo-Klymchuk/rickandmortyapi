import React from 'react'
import { NavLink, Link } from "react-router-dom";
import './styles.scss'

const Header = () => {
   return (
      <div className="header">
         <Link
            to='/'
            className='header-nav'>
            Home
         </Link>
         <NavLink
            to='/character'
            className='header-nav'>
            Character
         </NavLink>
      </div>
   )
}

export default Header