import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

 const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">

        <article className="service">
          <div className="service__head">
            <h3>UX/UI Desing</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Keep it as simple and intuitive as possible and find unique, unexpected solutions for your problems. The best interface is one you don´t notice.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Business model then understand its users. What are the pain points users have and how can you solve them, while pushing company’s business goals.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design sustainable and keep the brand in mind. Work with design systems, layout grids and pattern libraries to guarantee consistency and an easy design</p>
            </li>

          </ul>
        </article>
        {/* end of ux/ui */}

        <article className="service">
          {/* web developmnt */}
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p> will create and maintain websit,using the latest industry software to provide a superior user.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Ensure cross-browser compatibility of new features.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Collaborate with web designers to realize visual design intent.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Work with stakeholders to gather and refine specifications and requirements based on technical needs.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Integrate data from various back-end web services and databases.</p>
            </li>
          </ul>
        </article>
        {/* end of  web developmnt */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I help industrial manufacturers find the right words.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> I excel at listening to your big-picture goals and turning them into a winning content marketing strategy.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create written or visual content around yure ideas, and making that information accessible to your audience. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Providing free and useful information to your audience, attracting potential customers to your website.</p>
            </li>
            
          </ul>
        </article>
        {/* end of cotent Creation */}
      </div>
    </section >
  )
}
export default Services