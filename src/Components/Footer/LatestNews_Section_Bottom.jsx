import React from 'react'

import B4 from '../../assets/Index/Blogs/blog-img04.jpg'
import B5 from '../../assets/Index/Blogs/blog-img05.jpg'
import B6 from '../../assets/Index/Blogs/blog-img06.jpg'
import B7 from '../../assets/Index/Blogs/blog-img07.jpg'
import B8 from '../../assets/Index/Blogs/blog-img08.jpg'
import B9 from '../../assets/Index/Blogs/blog-img09.jpg'
import { BsInstagram } from "react-icons/bs";
import { Link } from 'react-router-dom'
import Left from '../../assets/Footer/Left-Car-tyre.png'
import Car from '../../assets/Footer/Left-Car.png'
import Right from '../../assets/Footer/Righttreepic.png'
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { FaSearchengin } from "react-icons/fa";
const LatestNews_Section_Bottom = () => {
      const LatestNewsData = [
            {
                  id: 1,
                  imgUrl: B4
            },
            {
                  id: 5,
                  imgUrl: B5
            },
            {
                  id: 6,
                  imgUrl: B6
            },
            {
                  id: 7,
                  imgUrl: B7
            },
            {
                  id: 8,
                  imgUrl: B8
            },
            {
                  id: 9,
                  imgUrl: B9
            },
      ]
      return (
            <>
                  {/* top */}
                  <h5 className='text-teal-800 capitalize text-sm text-center font-bold' data-aos='fade-up' data-aos-delay='300'>follow instagram</h5>
                  {/* center */}
                  <div className=' flex items-center justify-between w-full gap-2 mt-7 overflow-hidden' data-aos='fade-up' data-aos-delay='600'>
                        {
                              LatestNewsData.map((item) => {
                                    const { id, imgUrl } = item
                                    return (
                                          <div key={id} className=' flex justify-between items-center w-full overflow-hidden relative group'>
                                                <img src={imgUrl} alt="" className='w-full h-full rounded-lg cursor-pointer' />

                                                <BsInstagram className=' absolute md:left-[30%] lg:top-[45%] lg:left-[35%] translate-[-50%, -50%] w-7 h-7 left-[20%] md:w-12 md:h-12 bg-white px-2 py-2 rounded-lg group group-hover:opacity-100 opacity-0  duration-300 transition-all' />
                                          </div>
                                    )
                              })
                        }
                  </div>
                  <div className=' mt-7 relative ' data-aos='fade-up' data-aos-delay='900'>
                        <div className='z-10 car'>
                              <img src={Car} alt="" className='speed-car ' />
                              <span className='speed1'>
                                    <img src={Left} alt="" className='speedleft' />
                              </span>
                              <span className='spee2'>
                                    <img src={Left} alt="" className='speedleft' />
                              </span>
                        </div>
                        <div className='Right z-0'>
                              <img src={Right} alt="" className='Right1' />
                        </div>
                        <div className=' absolute bottom-0 right-0 left-0 bg-teal-900 w-[2500px] -translate-x-96 h-2 rounded-lg'></div>
                  </div>
                  {/* bottom */}
                  <div className=' grid grid-cols-1 md:grid-cols-5 gap-6 mt-9'>
                        {/* logo */}
                        <div className=' flex flex-col space-y-3' data-aos='fade-up' data-aos-delay='1200'>
                              <Link to={'/'} className=' flex items-center gap-1 cursor-pointer'>
                                    <h3 className=' text-red-500 font-bold capitalize text-xl'>World <span className=' text-yellow-500 capitalize'>Travel</span></h3>
                              </Link>
                              <p className=' text-sm text-gray-500'>Travel is a multi-award-winning strategy and contact creation agency that specialize in travel marketing.</p>
                              <div className=' flex items-start cursor-pointer gap-1 p-2 text-center md:text-start'>
                                    <FaFacebook className='text-white bg-teal-900 rounded-full  w-9 h-9 border-yellow-500 border-2 py-2 px-2 text-2xl' />
                                    <BsInstagram className='text-white bg-teal-900 rounded-full w-9 h-9 border-yellow-500 border-2 py-2 px-2 text-2xl' />
                                    <IoLogoYoutube className='text-white bg-teal-900 rounded-full w-9 h-9 border-yellow-500 border-2 py-2 px-2 text-2xl' />
                                    <FaSquareXTwitter className='text-white bg-teal-900 rounded-full w-9 h-9 border-yellow-500 border-2 py-2 px-2 text-2xl' />
                              </div>
                        </div>
                        {/* explore */}
                        <div className=' flex flex-col space-y-3' data-aos='fade-up' data-aos-delay='1500'>
                              <h3 className=' text-xl text-teal-600 capitalize text-center md:text-start'>explore</h3>
                              <div className=' flex flex-col items-center md:items-start cursor-pointer'>
                                    <span className=' text-teal-400 capitalize text-sm hover:text-yellow-600 duration-300 transition-all'>about us</span>
                                    <span className=' text-teal-400 capitalize text-sm hover:text-yellow-600 duration-300 transition-all'>FAQ's</span>
                                    <span className=' text-teal-400 capitalize text-sm hover:text-yellow-600 duration-300 transition-all'>Services</span>
                                    <span className=' text-teal-400 capitalize text-sm hover:text-yellow-600 duration-300 transition-all'>Team</span>
                                    <span className=' text-teal-400 capitalize text-sm hover:text-yellow-600 duration-300 transition-all'>new &  articles</span>
                              </div>
                        </div>
                        {/* destinations */}
                        <div className=' flex flex-col space-y-3' data-aos='fade-up' data-aos-delay='1800'>
                              <h3 className=' text-xl text-teal-600 capitalize text-center md:text-start'>destinations</h3>
                              <div className=' flex flex-col items-center md:items-start cursor-pointer'>
                                    <span className=' text-teal-400 capitalize text-sm hover:text-yellow-600 duration-300 transition-all'>phnom penh</span>
                                    <span className=' text-teal-400 capitalize text-sm hover:text-yellow-600 duration-300 transition-all'>tokyo</span>
                                    <span className=' text-teal-400 capitalize text-sm hover:text-yellow-600 duration-300 transition-all'>france</span>
                                    <span className=' text-teal-400 capitalize text-sm hover:text-yellow-600 duration-300 transition-all'>kenya</span>
                                    <span className=' text-teal-400 capitalize text-sm hover:text-yellow-560 duration-300 transition-all'>vietnam</span>
                              </div>
                        </div>
                        {/* legal */}
                        <div className=' flex flex-col space-y-3' data-aos='fade-up' data-aos-delay='2100'>
                              <h3 className=' text-xl text-teal-600 capitalize text-center md:text-start'>legal</h3>
                              <div className=' flex flex-col items-center md:items-start cursor-pointer'>
                                    <span className=' text-teal-400 capitalize text-sm hover:text-yellow-600 duration-300 transition-all'>team & conditaions</span>
                                    <span className=' text-teal-400 capitalize text-sm hover:text-yellow-600 duration-300 transition-all'>privacy policy</span>
                                    <span className=' text-teal-400 capitalize text-sm hover:text-yellow-600 duration-300 transition-all'>contact</span>
                                    <span className=' text-teal-400 capitalize text-sm hover:text-yellow-600 duration-300 transition-all'>careers</span>
                                    <span className=' text-teal-400 capitalize text-sm hover:text-yellow-560 duration-300 transition-all'>help</span>
                              </div>
                        </div>
                        {/* address */}
                        <div className=' flex flex-col space-y-3' data-aos='fade-up' data-aos-delay='2400'>
                              <div className=' flex items-center gap-3'>
                                    <FaPhone className='w-7 h-7 p-2 rounded-full bg-gray-300 text-teal-600 text-2xl'/>
                                    <span className='text-teal-600 text-xs'>885+ 713472013</span>
                              </div>
                              <div className=' flex items-center gap-3'>
                                    <MdOutlineMail className='w-7 h-7 p-2 rounded-full bg-gray-300 text-teal-600 text-2xl'/>
                                    <span className='text-teal-600 text-xs'>scorpion2026@gmail.com</span>
                              </div>
                              <div className=' flex items-center gap-3'>
                                    <IoIosHome className='w-7 h-7 p-2 rounded-full bg-gray-300 text-teal-600 text-2xl'/>
                                    <span className='text-teal-600 text-xs'>phnompenh, cambodai</span>
                              </div>
                        </div>
                  </div>
                  {/* end */}
                  <div className=' w-full overflow-hidden bg-teal-600 rounded-lg mt-9 py-3 px-3' data-aos='fade-up' data-aos-delay='2700'>
                        <div className=' flex flex-col md:flex-row  items-center justify-between'>
                              <div className=' flex flex-col space-y-3'>
                                    <h3 className=' text-5xl text-white capitalize font-bold'>subcribe <span className=' text-yellow-500'>now!</span></h3>
                                    <p className=' text-sm text-white'>Sign up to searing weekly newsletter to get the latest updates.</p>
                              </div>
                              <div className=' relative flex items-center mt-3 md:mt-0'>
                                    <input type="text" placeholder='enter your email address' className=' outline-none border-none py-4  w-[370px] md:w-[430px] px-3 rounded-full bg-white text-sm text-gray-400 capitalize'/>
                                    <FaSearchengin className='w-9 h-9 cursor-pointer  absolute right-3 flex justify-center items-center text-2xl p-2 rounded-full bg-teal-700 text-white'/>
                              </div>
                        </div>
                  </div>
                  {/* copy */}
                  <h5 data-aos='fade-up' data-aos-delay='3000' className=' text-center mt-3 text-sm text-black capitalize'>@2026<span className='text-yellow-500'>scorpion</span>all rights reserved.</h5>
            </>
      )
}

export default LatestNews_Section_Bottom