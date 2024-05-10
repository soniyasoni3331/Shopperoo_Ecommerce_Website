import React from 'react'
import Logo from "../../assets/Shopperoo.png"
import { IoMdSearch } from "react-icons/io";
import {FaCartShopping} from "react-icons/fa6";
import DarkMode from './DarkMode';

const Menu =[
    {
        id: 1,
        name: "Home",
        link: "/#"
    },
    {
        id: 2,
        name: "Top Rated",
        link: "#/services",
    },
    {
        id: 3,
        name: "Kids Wear" ,
        link: "/#services",
    },
    {
        id: 3,
        name: "Mens Wear" ,
        link: "/#",
    },
    {
        id: 3,
        name: "Electronics",
        link: "/#"
    }
]

function Navbar() {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
        {/* uppper navbar */}
        <div className='bg-primary/40 py-2'>
            <div className='container flex justify-between items-center'>
                {/* logo */}
                <div>
                    <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2'>
                        <img src={Logo} alt="Logo" className='w-14 bg-transparent rounded-full
                        uppercase' />
                        Shopperoo
                    </a>
                </div>
                {/* search bar and order button */}
                <div className='flex justify-between items-center gap-4'>
                    <div className='gourp relative hidden sm:block'>
                        <input type="text" placeholder='search' className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full px-2 py-1 border border-gray-300 focus:outline-none focus:border-1 focus:border-primary ' />
                        <IoMdSearch className='text-gray-500 group-hover:text-primary   absolute
                        top-1/2 -translate-y-1/2  right-3 ' />
                    </div>
                
                {/* order button  */}
                <button onClick={()=>alert("Ordering not available yet")} className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'> 
                    <span className='group-hove:block hidden transition-all duration-200'>Order</span>
                    <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer'/>
                </button>
                {/* darkmode switch  */}
                <div>
                    <DarkMode />
                </div>
                </div>
            <div/>
        </div>
        {/* lower navbar */}
        <div>
            <ul>
                {
                    Menu.map((data)=>(
                        <li key={data.id}>
                            <a href={data.link}>{data.name}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Navbar