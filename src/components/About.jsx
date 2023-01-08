import React from 'react'
import img1 from "../../src/assets/image/about-img.png"
import img2 from "../../src/assets/image/about-icon-1.png"
import img3 from "../../src/assets/image/about-icon-2.png"
import img4 from "../../src/assets/image/about-icon-3.png"

const About = () => {
  return (
    <div className='aka' >
        <section className="about" id="about">
            <h1 className="heading">about us <span>why choose us</span></h1>
            <div className="row">
                <div className="image">
                    <img src={img1} alt="" />
                </div>
                <div className="content">
                  <h3 className="title">what's make our coffee special!</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id perferendis dolores, atque tenetur laboriosam error!</p>
                  <a href="#" className='btn' >Read more</a>
                  <div className="icons-container">
                    <div className="icons">
                      <img src={img2} alt="" />
                      <h3>quality coffee</h3>
                    </div>
                    <div className="icons">
                      <img src={img3} alt="" />
                      <h3>our branches</h3>
                    </div>
                    <div className="icons">
                      <img src={img4} alt="" />
                      <h3>free delivery</h3>
                    </div>
                  </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About