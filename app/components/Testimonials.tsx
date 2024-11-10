"use client";
import React from 'react';
import "../../style/testimonial.css";
import  { TestimomialData } from "../components/TestimomialData";
import { StaticImageData } from 'next/image';
import  Image  from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

interface ClientReview {
    id : number,
    image : StaticImageData ,
    title : string ,
    description : string 
}

function Testimonials() {
  return (
    <section className="testimonial container section">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span>
    <Swiper className="testimonial__container"
      loop={true}
      grabCursor={true}
      spaceBetween={24}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
      }}
      modules={[Pagination]}
    >
        {TestimomialData.map(( {id, image, title, description } :ClientReview) => {
            return (
                <SwiperSlide className='testimonial__card' key={id}>
                        <Image src={image} alt="" className='testimonial__img'/>
                        <h3 className="testimonial__name">{title}</h3>
                        <p className="testimonial__description">{description}</p>
                </SwiperSlide>
            );
        })}
    </Swiper>
    </section>
  )
}

export default Testimonials;