import React from 'react'
import Avtar from './Avtar'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import istagram from '../images/icon-instagram.svg'
import './Footer.css'
export default function Footer() {
  return (
    <div className='FContainer'>
        <div className='navigation'>
            <h1>loopstudios</h1>
            <ul>
                <li>About</li>
                <li>Event</li>
                <li>Product</li>
                <li>support</li>
            </ul>
        </div>
        <div className='FooterImage'>
           <div className='fImages'>
           <Avtar url={facebook} alt="facebook icon"/>
           <Avtar url={twitter} alt="twitter icon"/>
           <Avtar url={pinterest} alt="pinterest icon"/>
           <Avtar url={istagram} alt="instagram"/>
           </div>
           <p>&copy; 2021 Loopstudios All right reserve</p>
        </div>
    </div>
  )
}
