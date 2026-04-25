import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
const Menu = () => {
  const [isActive, setIsActive] = useState('home')
  return (
    <section className=' hidden lg:block py-14'>
      <div className=' flex justify-between items-center gap-7'>
        <Link to='/' className='font-text' onClick={() => setIsActive("home")}>{isActive === "home" ? <hr /> : <></>}home</Link>
        <Link to='/about' className='font-text' onClick={() => setIsActive("about")}>{isActive === "about" ? <hr /> : <></>}about us</Link>
        {/* page */}
        <div className=' relative group'>
          <div className=' cursor-pointer rounded-sm flex items-center group duration-300 transition-all'>
            <h3 className='font-text'>pages</h3>
            <IoIosArrowDown width={16} height={16} className='ms-2 transition-transform duration-300 group-hover:rotate-180' />
          </div>
          <div className=' absolute left-0 top-full mt-2 w-56 bg-white shadow-lg rounded-xl invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-50'>
            {/* services */}
            <div className=' border-b border-gray-400'>
              <Link to='/page/services' className='block px-4 py-2 font-text hover:bg-gray-100 rounded-xl'>services</Link>
            </div>
            {/* services details */}
            <div className=' border-b border-gray-400'>
              <Link to='/page/services_Details' className='block px-4 py-2 font-text hover:bg-gray-100 rounded-xl'>services details</Link>
            </div>
            {/* testimonials */}
            <div className=' border-b border-gray-400'>
              <Link to='/page/testimonials' className='block px-4 py-2 font-text hover:bg-gray-100 rounded-xl'>testimonials</Link>
            </div>
            {/* Tours Guide */}
            <div className=' relative group/ToursGuide border-b border-gray-400'>
              <div className=' px-4 py-2 flex justify-between items-center cursor-pointer'>
                <h3 className='font-text'>Tours guide</h3>
                <IoIosArrowDown width={16} height={16} className='ms-2 transition-transform duration-300 group-hover/ToursGuide:rotate-180' />
              </div>
              <div className=' absolute top-0 left-full min-w-52 bg-white border rounded-e-xl invisible opacity-0 translate-y-2 group-hover/ToursGuide:visible group-hover/ToursGuide:opacity-100 group-hover/ToursGuide:translate-y-0 transition-all duration-300 z-50'>
                <div className=' border-b border-gray-400'>
                  <Link to='/page/toursGuide/tours_Guide' className='block px-4 py-2 font-text hover:bg-gray-100 rounded-xl'>Tours guide</Link>
                </div>
                <div className=' border-b border-gray-400'>
                  <Link to='/page/toursGuide/toursGuide_Details' className='block px-4 py-2 font-text hover:bg-gray-100 rounded-xl'>Tours guide details</Link>
                </div>
              </div>
            </div>
            {/* faqs */}
            <div className=' border-b border-gray-400'>
              <Link to='/page/faqs' className='block px-4 py-2 font-text hover:bg-gray-100 rounded-xl'>faqs</Link>
            </div>
            {/* pricing */}
            <div className=' border-b border-gray-400'>
              <Link to='/page/pricing' className='block px-4 py-2 font-text hover:bg-gray-100 rounded-xl'>pricing</Link>
            </div>
            {/* 404 */}
            <div className=' border-gray-400'>
              <Link to='/page/404' className='block px-4 py-2 font-text hover:bg-gray-100 rounded-xl'>error 404</Link>
            </div>
          </div>
        </div>
        <Link to='/destinations' className='font-text' onClick={() => setIsActive("destinations")}>{isActive === "destinations" ? <hr /> : <></>}destinations</Link>
        <Link to='/tours' className='font-text' onClick={() => setIsActive("tours")}>{isActive === "tours" ? <hr /> : <></>}tours</Link>
        <Link to='/blog' className='font-text' onClick={() => setIsActive("blog")}>{isActive === "blog" ? <hr /> : <></>}blog</Link>
        <Link to='/contact' className='font-text' onClick={() => setIsActive("contact")}>{isActive === "contact" ? <hr /> : <></>}contact</Link>
      </div>
    </section>
  )
}

export default Menu