import React from 'react'
import img1 from "../../src/assets/image/about-img.png"

const About = () => {
  return (
    <div className='aka' >
        <section className="about" id="about">
            <h1 className="heading">about us <span>why choose us</span></h1>
            <div className="row">
                <div className="image">
                    <img src={img1} alt="" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default About