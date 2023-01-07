import React from 'react'
import img1 from "../../src/assets/image/home-img-1.png"

const Home = () => {
  return (
    <div className='aka'>
        <section className='home' id='home'>
            <div className="row">
                <div className="content">
                    <h3>fresh coffee in the morning</h3>
                    <a href="#" className='btn'> Buy one now</a>
                </div>
                <div className="image">
                    <img src={img1} alt="" className='main-home-image' />
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home