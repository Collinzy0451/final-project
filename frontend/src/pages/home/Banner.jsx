import React from 'react'
import { Link } from 'react-router-dom'

import bannerImg from "../../assets/header.png"

const Banner = () => {
  return (
    <div className='section__container header__container'>
        <div className='header__content z-30'>
            <h4 className='uppercase'>Exclusive Offer: Up to 20% Off</h4>
            <h1>Exquisite Fashion</h1>
            <p>Step into a world of sophistication with our carefully curated collection. From sleek, modern styles to classic elegance, our range includes premium apparel and footwear for both men and women. Elevate your wardrobe with pieces that exude quality, comfort, and style.</p>
            <button className='btn'><Link to='/shop'>EXPLORE MORE</Link></button>
        </div>
        <div className='header__image'>
            <img src={bannerImg} alt="banner img" />
        </div>

    </div>
  )
}

export default Banner