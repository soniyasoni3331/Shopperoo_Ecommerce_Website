import React from 'react'
import Img1 from "../../assets/Shirt/shirt-1.png"
import Img2 from "../../assets/Shirt/shirt-2.png"
import Img3 from "../../assets/Shirt/shirt-3.png"
import {FaStar} from "react-icons/fa";


const ProductsData =[
    {
        id: 1,
        img: Img1,
        title: "Casual Wear",
        description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolores debitis veritatis vitae cum. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        id: 2,
        img: Img2,
        title: "Printed shirt",
        description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolores debitis veritatis vitae cum. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        id: 3,
        img: Img3,
        title: "Women shirt",
        description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolores debitis veritatis vitae cum. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
]

function TopProducts() {
  return (
    <div>
        <div className='container'>
            {/* Header section  */}
            <div className='text-left mb-24'>
                <p data-aos="fade-up" className='text-sm text-primary'>Top Rated Products for you</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>Best Products</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis ipsam ab labore.</p>
            </div>

            {/* Body section  */}
            <div 
            data-aos="zoom-out" 
             className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
                {
                    ProductsData.map((data)=>(
                        <div className='rounded-2xl bg-white
                        dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]'>
                            {/* Image section */}
                            <div className='h-[100px]'>
                                <img src={data.img} alt="" 
                                className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md   '/>
                            </div>
                            {/* details section */}
                            <div className='p-4 text-center'>
                            {/* star rating */}
                            <div className='w-full 
                            flex items-center justify-center gap-1'>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>

                            </div>
                            <h1 className='text font-bold'>{data.title}</h1>
                            <p className='text-xs text-gray-400 group-hover:text-white duration-300 line-clamp-2'>{data.description}</p>
                            <button className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary'>
                                Order Now
                            </button>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    </div>
  )
}

export default TopProducts