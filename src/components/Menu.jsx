import React from 'react'
import { useState } from 'react'
import menus from "./menus.js"


const Menu = () => {
  const [data, setData] = useState(menus);

  return (
    <div className='aka' >
        <section className="menu" id="menu">
            <h1 className="heading">our menu <span>popular menu</span></h1>

            <div className="box-container">


            {data.map((value) =>{
                const {id, title, desc, price, image} = value;

                return (
                  <>
                    <a href="#" className='box' key={id}>
                      <img src={image} alt="" />
                      <div className="content">
                        <h3>{title} </h3>
                        <p>{desc} </p>
                        <span>${price} </span>
                      </div>
                    </a>
                  </>
                )
            })}
            </div>
        </section>
    </div>
  )
}

export default Menu