import React from 'react'
import { useState } from "react"
import { FaMugHot } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <a href="#" className='Logo'>Coffee <FaMugHot/> </a>
      <button className="hamburger"  onClick={() => {setIsNavExpanded(!isNavExpanded)}} >
        <RxHamburgerMenu/>
      </button>
      <div
        className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/service">Review</a>
          </li>
          <li>
            <a href="/book">Book</a>
          </li>
        </ul>
      </div>
      <a href="#" className='btn'>Book a table</a>
    </nav>
  )
}

export default Navbar