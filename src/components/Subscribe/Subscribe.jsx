import React from 'react'
import Banner from "../../assets/Banner/orange-pattern.jpg";

const BannerImg ={
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
}

function Subscribe() {
  return (
    <div 
    data-aos="zoom-in"
    className='mb-20  bg-gray-100 dark:bg-gray-800 text-white'
    style={BannerImg}>
        <div className='container backdrop-blur-sm py-10'>
            <div className='flex '>
                <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-semibold'>Get Notified About New Products</h1>
                <input
                data-aos="fade-up" type="text" 
                className='w-full p-3'
                placeholder='Enter your email'/>
            </div>
        </div>
    </div>
  )
}

export default Subscribe