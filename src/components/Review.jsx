import React from 'react'
import { useState } from 'react'
import { ImStarFull } from 'react-icons/im';
import { ImStarHalf } from 'react-icons/im';
import reviews from "./reviews.js"
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';

const Review = () => {
  const [datas, setDatas] = useState(reviews);

  return (
    <div className='aka'>
        <section className="review" id="review">
            <h1 className='heading'>review <span>what people says</span></h1>

            <Swiper 
        
            spaceBetween={15}
            pagination={{ clickable: true }}
            breakpoints={{
           1200: {
            slidesPerView: 2,
            padding: '2rem',
            type: 'loop',
            rewind: true,
            keyboard: 'global',
           },
           991: {
            slidesPerView: 2,
            padding: '2rem',
            type: 'loop',
            rewind: true,
            keyboard: 'global',
           },
           768: {
            slidesPerView: 2,
            padding: '2rem',
            type: 'loop',
            rewind: true,
            keyboard: 'global',
           },
           500: {
            slidesPerView: 1,
            padding: '2rem',
            type: 'loop',
            rewind: true,
            keyboard: 'global',
           },
           425: {
            slidesPerView: 1,
            padding: '2rem',
            type: 'loop',
            rewind: true,
            keyboard: 'global',
          },
         }}  >

          

           

              {datas.map((value) =>{
                const {idk, title, desc, name, image} = value;

                return (
                  <>
                       <SwiperSlide>
                       <div className="review-slider">
                    <div className="box" key={idk}>
                      <img src={image} alt="" />
                      <div className="stars">
                        <ImStarFull/>
                        <ImStarFull/>
                        <ImStarFull/>
                        <ImStarFull/>
                        <ImStarHalf/>
                      </div>
                      <p>{desc}</p>
                      <h3>{name}</h3>
                      <span>{title} </span>
                    </div>
                    </div>
                    </SwiperSlide>
                  </>
                )
              })}

           
            </Swiper>


        </section>
    </div>
  )
}

export default Review