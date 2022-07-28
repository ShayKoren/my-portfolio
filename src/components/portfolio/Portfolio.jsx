import React from 'react'
import './portfolio.css'
import img1 from '../../assets/img1.png'
/* import img2 from '../../assets/img2.jpg' *//* this image is to small so i didnt take it */
/* import img3 from '../../assets/img3.jpg' *//* this image is to small so i didnt take it */
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
const data = [
  {
    id:1,
    image:img1,
    title: 'viki about al pachino scarface movie and michel piper',
    github: 'https://github.com/enterprise',
    demo: 'https://www.wix.com/website/templates/html/portfolio-cv/portfolios?utm_source=google&utm_medium=cpc&utm_campaign=9753534917^114111739889&experiment_id=^^473098900979^^_DSA&gclid=EAIaIQobChMI2ryB5OP1-AIVn4xoCR11YwQiEAAYASAAEgJY6_D_BwE'
  },
  {
    id:2,
    image:img5,
    title: 'viki about al pachino scarface movie and michel piper',
    github: 'https://github.com/enterprise',
    demo: 'https://www.wix.com/website/templates/html/portfolio-cv/portfolios?utm_source=google&utm_medium=cpc&utm_campaign=9753534917^114111739889&experiment_id=^^473098900979^^_DSA&gclid=EAIaIQobChMI2ryB5OP1-AIVn4xoCR11YwQiEAAYASAAEgJY6_D_BwE'
  },
  {
    id:3,
    image:img1,
    title: 'viki about al pachino scarface movie and michel piper',
    github: 'https://github.com/enterprise',
    demo: 'https://www.wix.com/website/templates/html/portfolio-cv/portfolios?utm_source=google&utm_medium=cpc&utm_campaign=9753534917^114111739889&experiment_id=^^473098900979^^_DSA&gclid=EAIaIQobChMI2ryB5OP1-AIVn4xoCR11YwQiEAAYASAAEgJY6_D_BwE'
  },
  {
    id:4,
    image:img4,
    title: 'viki about al pachino scarface movie and michel piper',
    github: 'https://github.com/enterprise',
    demo: 'https://www.wix.com/website/templates/html/portfolio-cv/portfolios?utm_source=google&utm_medium=cpc&utm_campaign=9753534917^114111739889&experiment_id=^^473098900979^^_DSA&gclid=EAIaIQobChMI2ryB5OP1-AIVn4xoCR11YwQiEAAYASAAEgJY6_D_BwE'
  },
  {
    id:5,
    image:img5,
    title: 'viki about al pachino scarface movie and michel piper',
    github: 'https://github.com/enterprise',
    demo: 'https://www.wix.com/website/templates/html/portfolio-cv/portfolios?utm_source=google&utm_medium=cpc&utm_campaign=9753534917^114111739889&experiment_id=^^473098900979^^_DSA&gclid=EAIaIQobChMI2ryB5OP1-AIVn4xoCR11YwQiEAAYASAAEgJY6_D_BwE'
  },
  {
    id:6,
    image:img6,
    title: 'viki about al pachino scarface movie and michel piper',
    github: 'https://github.com/enterprise',
    demo: 'https://www.wix.com/website/templates/html/portfolio-cv/portfolios?utm_source=google&utm_medium=cpc&utm_campaign=9753534917^114111739889&experiment_id=^^473098900979^^_DSA&gclid=EAIaIQobChMI2ryB5OP1-AIVn4xoCR11YwQiEAAYASAAEgJY6_D_BwE'
  },

]

 const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
     {
      data.map(({id,image,title,github,demo}) =>{
        return (
          <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
        <div className="portfolio__item-cta">
        <a href={github} className="btn" target="_blank" rel="noreferrer">Github</a>
          <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer" >Live Demo</a>
        </div>
        </article>
        )
      })
     }
   
      </div>
    </section>
  )
}
 export default Portfolio