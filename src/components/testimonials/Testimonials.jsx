import React from 'react'
import './testimonials.css'
import IJET from '../../assets/IJET.jpg'
import COMPANY from '../../assets/COMPANY.jpg'
import AVTR3 from '../../assets/AVTR3.jpg'
import AVTR4 from '../../assets/AVTR4.jpg'

import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data=[
  {
  avatar:IJET ,
  name:'I JET',
    review:'Working with Shay was better than expected and we had really high expectations. He is an incredibly talented developer but what really makes him stand out is his work ethic and steady approach. Time after time, and without us asking, he added enhancements and improvements that resulted in a better end product for us and our clients'
},
  {
  avatar:COMPANY,
  name:'THE COMPANY',
    review:'We have the fortune of working with Shay on a very regular basis. Every single project is done in a timely fashion and is delivered exactly as is outlined. Beyond that, his development skills and expertise make him an invaluable part of our process. We absolutely offer our highest possible recommendation.'
},
  {
  avatar:AVTR3,
  name:'Eli Show',
    review:'We have the fortune of working with Shay on a very regular basis. Every single project is done in a timely fashion and is delivered exactly as is outlined. Beyond that, his development skills and expertise make him an invaluable part of our process. We absolutely offer our highest possible recommendation.'
},
  {
  avatar:AVTR4,
  name:'Eli Show',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laboriosam dolor nam quod autem voluptates nostrum perferendis accusantium qui accusamus illum, sed amet aperiam voluptatibus dolorem quam repellendus sapiente deserunt placeat cumque perspiciatis nemo eos architecto! Amet consequatur aut distinctio.'
},

]
 const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients </h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
   >
        
        {
          data.map(({avatar,name,review},index) =>{
            return (
              <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="#"/>
          </div>
          <h5 className="client__name">{name}</h5>
            <small className="client__review">
              {review}
            </small>
        </SwiperSlide>
            )
          })
        }
        {/* poassibal like this to ===============================================*/}

        {/* <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar ONE" />
          </div>
          <h5 className="client__name">el pachino</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem reiciendis vero non dolore explicabo ea ratione minus perferendis aperiam quisquam, iusto delectus tenetur excepturi quasi consequuntur, vitae, totam optio cumque.
            </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar ONE" />
          </div>
          <h5 className="client__name">el pachino</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem reiciendis vero non dolore explicabo ea ratione minus perferendis aperiam quisquam, iusto delectus tenetur excepturi quasi consequuntur, vitae, totam optio cumque.
            </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar ONE" />
          </div>
          <h5 className="client__name">el pachino</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem reiciendis vero non dolore explicabo ea ratione minus perferendis aperiam quisquam, iusto delectus tenetur excepturi quasi consequuntur, vitae, totam optio cumque.
            </small>
        </article> */}
      </Swiper>
    </section >
  )
}
export default Testimonials