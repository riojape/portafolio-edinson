import React from 'react';
import './header.css';

function Header () {
    return (
        <header className="header">
          <p className="header-logo">Edinson Rioja</p>
          <nav className='header-nav'>
            <ul className="header-nav-menu">
              <li className="header-nav-item"><a href='#'>Proyectos</a></li>
              <li className="header-nav-item"><a href='#'>Experiencia</a></li>
              <li className="header-nav-item"><a href='#'>Contacto</a></li>
            </ul>
          </nav>
        </header>
    )
};

export { Header };
