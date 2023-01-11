import React from 'react'
import { useState } from 'react'
import { ImStarEmpty } from 'react-icons/im';
import { ImStarHalf } from 'react-icons/im';
import reviews from "./reviews.js"

const Review = () => {
  const [datas, setDatas] = useState(reviews);

  return (
    <div className='aka'>
        <section className="review" id="review">
            <h1 className='heading'>review <span>what people says</span></h1>

            <div className="swiper review-slider">
              <div className="swiper-wrapper">

              {datas.map((value) =>{
                const {id, title, desc, name, image} = value;

                return (
                  <>
                    <div className="box" key={id}>
                      <img src={image} alt="" />
                      <div className="stars">
                        <ImStarEmpty/>
                        <ImStarEmpty/>
                        <ImStarEmpty/>
                        <ImStarEmpty/>
                        <ImStarHalf/>
                      </div>
                      <p>{desc}</p>
                      <h3>{name}</h3>
                      <span>{title} </span>
                    </div>
                  </>
                )
              })}

              </div>
            </div>


        </section>
    </div>
  )
}

export default Review