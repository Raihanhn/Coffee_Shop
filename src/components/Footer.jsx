import React from 'react'
import { FiArrowRight } from 'react-icons/fi';
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { BsEnvelopeFill } from 'react-icons/bs';

import { AiFillFacebook } from 'react-icons/ai';
import { FaInstagramSquare} from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='aka'>
        <section className="footer">
            <div className="box-container">
                <div className="box">
                    <h3>our branches</h3>
                    <a href="#"><FiArrowRight className='lod' />Bangladesh </a>
                    <a href="#"><FiArrowRight className='lod' />indonesia </a>
                    <a href="#"><FiArrowRight className='lod' />Russia </a>
                    <a href="#"><FiArrowRight className='lod' />malaysia </a>
                    <a href="#"><FiArrowRight className='lod' />canada </a>
                </div>

                <div className="box">
                    <h3>quick links</h3>
                    <a href="#"><FiArrowRight className='lod'/>home </a>
                    <a href="#"><FiArrowRight className='lod'/>about </a>
                    <a href="#"><FiArrowRight className='lod'/>menu </a>
                    <a href="#"><FiArrowRight className='lod'/>review </a>
                    <a href="#"><FiArrowRight className='lod'/>book </a>
                </div>

                <div className="box">
                    <h3>contact info</h3>
                    <a href="#"><BsFillTelephoneOutboundFill className='lod'/>+8801715241690 </a>
                    <a href="#"><BsFillTelephoneOutboundFill className='lod'/>+8801950657600 </a>
                    <a href="#"><BsEnvelopeFill className='lod'/>coffee20@gmail.com </a>
                </div>

                <div className="box">
                    <h3>follow us</h3>
                    <a href="#"><AiFillFacebook className='lod'/>facebook </a>
                    <a href="#"><FaInstagramSquare className='lod'/>instagram </a>
                    <a href="#"><FaTwitterSquare className='lod'/>twitter </a>
                    <a href="#"><AiFillLinkedin className='lod'/>linkedin </a>
                </div>

            </div>
            <div className="credit">created by <span>Raihan</span> || All rights reserved</div>
        </section>
    </div>
  )
}

export default Footer