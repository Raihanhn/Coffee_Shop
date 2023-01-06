import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaMugHot } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='header'>
        <div className="menu-btn"><RxHamburgerMenu/> </div>
        <a href="#" className='Logo'>Coffee <FaMugHot/> </a>

        <nav className="navbar">
            <a href="home">Home</a>
            <a href="about">About</a>
            <a href="menu">Menu</a>
            <a href="review">Review</a>
            <a href="book">Book</a>
        </nav>
        <a href="#" className='btn'>Book a table</a>

    </div>
  )
}

export default Navbar