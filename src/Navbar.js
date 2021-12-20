import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
     <Link to="/">Главная</Link>
     <Link to="/catalog">Маркет</Link>
    </div>
  )
}

export default Navbar
