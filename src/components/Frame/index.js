import React from 'react';
import './frame.css';

function Frame (){
    return(
        <section className="frame">
          <article className="cardProyect cardProyect-left">
            <div className="cardProyect-image cardProyect-image--left frame-image_01"></div>
            <div className="cardProyect-bg"></div>
            <div className="cardProyect-container cardProyect-container_01 cardProyect-container--left">
              <div className="cardProyect-description">
                <h3 className='description-title description-title--frame description-title--frame_01'>Landing Page de Pruebas Remotas</h3>
                <p className='description-paragraph description-paragraph--frame description-paragraph--frame_01'>Aprende a construir una eficiente y bonita Landing Page que puedes aplicar para todo tipo de proyecto personal.</p>
              </div>
              <div className="cardProyect-actions cardProyect-actions_01">
                <button className="btn btn_01-01" type='button'>Ver proyecto</button>
                <button className="btn btn_01-02" type='button'>Ver codigo</button>
              </div>
            </div>
          </article>
          <article className="cardProyect cardProyect-right">
            <div className="cardProyect-image cardProyect-image--right frame-image_02"></div>
            <div className="cardProyect-bg cardProyect-bg_02"></div>
            <div className="cardProyect-container cardProyect-container_02 cardProyect-container--right">
              <div className="cardProyect-description">
                <h3 className='description-title description-title--frame description-title--frame_02'>Tiendita</h3>
                <p className='description-paragraph description-paragraph--frame description-paragraph--frame_02'>Realiza la compra de tu despensa semanal de manera digital! Tiendita te ayuda a protegerte de los contagios y no extrañar ninguno de los productos del supermercado en tu hogar. </p>
              </div>
              <div className="cardProyect-actions cardProyect-actions_02">
                <button className="btn btn_02-01" type='button' >Ver proyecto</button>
                <button className="btn btn_02-02" type='button'>Ver codigo</button>
              </div>
            </div>
          </article>
          <article className="cardProyect cardProyect-left">
            <div className="cardProyect-image cardProyect-image--right frame-image_03"></div>
            <div className="cardProyect-bg cardProyect-bg_03"></div>
            <div className="cardProyect-container cardProyect-container_03 cardProyect-container--right">
              <div className="cardProyect-description">
                <h3 className='description-title description-title--frame description-title--frame_03'>Slacker</h3>
                <p className='description-paragraph description-paragraph--frame description-paragraph--frame_03'>Trabaja de manera coordinada y toma decisiones más rápido al reunir toda la comunicación laboral en un solo lugar.</p>
              </div>
              <div className="cardProyect-actions cardProyect-actions_03">
                <button className="btn btn_03-01" type='button' >Ver proyecto</button>
                <button className="btn btn_03-02" type='button'>Ver codigo</button>
              </div>
            </div>
          </article>
        </section>
    )
};

export { Frame };