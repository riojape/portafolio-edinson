import React from 'react';
import './hero.css';
import './desktop.css';

function Hero () {
    return(
        <section className="hero">
          <div className='hero-img'></div>
          <div className="hero-main">
            <div className="hero-main--description">
              <h3 className="description-title description-title-hero">Hola ✋, Soy Edinson Rioja un Frontend, centrado en la creación de productos digitales durante los últimos 2 años.</h3>
              <p className="description-paragraph description-paragraph-hero">Me encanta centrarme en los detalles de las experiencias de nuevos productos con una  implementación en código perfecta. Pero los grandes productos no comienzan ahí, comienzan con una sólida colaboración con los compañeros de equipo de investigación, ingeniería y productos para comprender los problemas y las circunstancias de los clientes.</p>
            </div>
            <button className="btn btn-style_01" type="button">Descargar currículum</button>
          </div>
        </section>
    )
};

export { Hero };