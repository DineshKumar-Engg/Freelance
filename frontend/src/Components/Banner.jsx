import React from 'react'
import Banners from '../Image/Banner1.jpg'
import '../Styles/Banner.css'


const Banner = () => {

  return (
    <div className='banner-main'>
        <div className='banner-container'>
            <img src={Banners} alt='Pic' ></img>
        </div>
    </div>
  )
}

export default Banner