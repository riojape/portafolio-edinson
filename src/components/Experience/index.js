import React from 'react';
import './experiencie.css';

function Experience (){
    return(
        <section className="experience" >
          <div className="experience-title">
          <h2 >Experiencia</h2>
          <h3 className='description-title description-title_experiencie'>Tengo más de 3 años de experiencia en Frontend.</h3>
          </div>
          <article className="card" >
            <h3 className='description-title description-title_card'>Marvol</h3>
            <p className="description-paragraph description-paragraph_card-date">Frontend - 2018</p>
            <p className='description-paragraph description-paragraph_card'>¡Marvol.com es el sitio oficial de Marvol Entertainment! Explore películas, personajes, cómics, programas de televisión, videos y más oficiales de Marvel.</p>
          </article>
          <article className="card" >
            <h3 className='description-title description-title_card'>Niko</h3>
            <p className="description-paragraph description-paragraph_card-date">Frontend - 2019</p>
            <p className='description-paragraph description-paragraph_card'>Encuentra lo mejor de Niko, con productos nuevos cada semana y disfruta del envío gratis. ¡Únete a nosotros! y accede como miembro a productos y beneficios exclusivos. </p>
          </article>
          <section className="skillsAndTools">
          <div className="skill">
            <h3 className="description-title description-title_st">Habilidades principales</h3>
            <div className="st-content description-paragraph">
              <h4>Diseño de interfaz de usuario y web</h4>
              <p>Websites, web experiences</p>
            </div>
            <div className="st-content description-paragraph">
              <h4>Front-End Development</h4>
              <p>Html, CSS, JavaScript</p>
            </div>
          </div>
          <div className="tools">
            <h3 className="description-title description-title_st">Herramientas</h3>
            <div className="st-content description-paragraph">
              <h4>Diseño</h4>
              <p>Sketch, Abstract, Zeplin, Figma.</p>
            </div>
            <div className="st-content description-paragraph">
              <h4>Programación</h4>
              <p>VSCode, Sketch, SourceTree, Slack, Evernote, Spark, Todoist, Asana, Google Drive Google Calendar.</p>
            </div>
          </div>
        </section>
        </section>
    )
};

export { Experience };