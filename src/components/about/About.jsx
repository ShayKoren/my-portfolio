import React from 'react'
import './about.css'
import SHAY3 from '../../assets/SHAY3.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'



const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
        <div className="about__me-image">
          <img src={SHAY3} alt="About image" />
        </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>6+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>5+ Completed Projects</small>
            </article>

           
          </div>
          <p>Hello! My name is Shay and I enjoy creating things that live on the internet. I’m a Full stack Developer I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.

Well-organised person, problem solver,  with high attention to detail. love outdoor activities, animals and zoology. A family person and father of a cute little girl,

Interested in the entire frontend spectrum and working on ambitious projects with positive people that will make me better developer  .

Let’s make something special.</p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>


    </section>
  )
}

export default About
