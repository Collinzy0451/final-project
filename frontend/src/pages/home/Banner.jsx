import React from 'react'
import { Link } from 'react-router-dom'

import bannerImg from "../../assets/header.png"

const Banner = () => {
  return (
    <div className='section__container header__container'>
        <div className='header__content z-30'>
            <h4 className='uppercase'>UP TO 20% Discount on</h4>
            <h1>Girl's Fashion</h1>
            <p>I'm Miriam, Bankole's Betrothed. I deal on quality male and female clothings. luxury sneakers, Cooporate shoes, Tee shirts, Sweatshirts, Female gowns, etc.</p>
            <button className='btn'><Link to='/shop'>EXPLORE MORE</Link></button>
        </div>
        <div className='header__image'>
            <img src={bannerImg} alt="banner img" />
        </div>

    </div>
  )
}

export default Banner