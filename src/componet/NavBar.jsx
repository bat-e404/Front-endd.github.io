import React from 'react'
import imgLogo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faCartShopping, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'


export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <NavLink class="navbar-brand" to="/">
          <img src={imgLogo} alt="" width="115" height=""/>
        </NavLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to="/products">Productos</NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to="/nosotros">Nosotros</NavLink>
            </li>
          </ul>
          
          <div className="buttons">
            <NavLink to="/login" className="btn btn-outline-dark "> <FontAwesomeIcon icon={faArrowRightToBracket} /> Login</NavLink>
            <NavLink to="/registro" className="btn btn-outline-dark ms-1"> <FontAwesomeIcon icon={faUserPlus}/>Registrar</NavLink>
            <NavLink to="/" className="btn btn-outline-dark ms-1"> <FontAwesomeIcon icon={faCartShopping}/>Cart(0)</NavLink>
          </div>

        </div>
      </div>
    </nav>
        
    
    
   
    
  )
}