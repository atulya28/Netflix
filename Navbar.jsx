import React from 'react'
import n1 from './n1.png'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.css';
import man from './sm.png'
import dark from './dark1.jpg'

function Navbar(){
  return(
    <main>
      <img src={dark} className="darkImg"/>
      <div className="navbar1 d-flex navbar navbar-brand container-fluid">
        <img src={n1} className="logo"/>
        <img src={man} className="man1"/>
      </div>
    </main>
  )
}

export default Navbar;