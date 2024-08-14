import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import Productos from './Productos';


const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
        <div className='container-fluid'>

          <Link to="./" className='navbar-brand fs-1'>Music Front End</Link>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className='collapse navbar-collapse' id='menu'>
         <ul className='navbar-nav ms-auto fs-4'>
          <li className='nav-item'><Link to="./" className='nav-link'>Inicio</Link></li>
          <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="./Productos">Cuerda</Link></li>
            <li><Link class="dropdown-item" to="./Productos">Viento</Link></li>
            <li><Link class="dropdown-item" to="./Productos">Percusion</Link></li>
            <li><Link class="dropdown-item" to="./Productos">Electronicos</Link></li>
          </ul>
        </li>
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Servicios
          </a>
          <ul class="dropdown-menu">
          <li><Link class="dropdown-item" to="./Servicios">Cursos</Link></li>
          <li><Link class="dropdown-item" to="./Servicios">Reparaciones</Link></li>
          <li><Link class="dropdown-item" to="./Servicios">Afinacion</Link></li>
          </ul>
        </li>
          <li className='nav-item'><Link to="./Contacto" className='nav-link'>Contacto</Link></li>
         </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
