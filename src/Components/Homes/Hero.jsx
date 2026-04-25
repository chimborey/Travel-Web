import React from 'react'
import H1 from '../../assets/Index/Hero/right-pic.png'
import H2 from '../../assets/Index/Hero/Plane-With-Line.png'
import H3 from '../../assets/Index/Hero/Cloud1.png'
import H4 from '../../assets/Index/Hero/Cloud2.png'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
const Hero = () => {
      return (
            <section className=' relative grid grid-cols-1 md:grid-cols-2 gap-6'>
                  {/* left */}
                  <div className=' flex flex-col space-y-3 justify-center overflow-hidden md:h-[100vh]'>
                        <span className=' text-xl font-bold capitalize text-white' data-aos='fade-up' data-aos-delay='300'>discover</span>
                        <h3 className=' text-7xl text-white font-bold capitalize' data-aos='fade-up' data-aos-delay='600'>the world</h3>
                        <p className=' text-sm text-white' data-aos='fade-up' data-aos-delay='900'>The Safety of our customers at all stages</p>
                        <div className=' flex' data-aos='fade-up' data-aos-delay='1200'>
                              <Link to={'/'} className=' py-2 px-4 hover:-translate-y-1 hover:bg-white duration-300 transition-all hover:text-yellow-400 rounded-full bg-green-500 capitalize text-black'>get in touch</Link>
                        </div>
                        <div className=' flex items-center gap-3' data-aos='fade-up' data-aos-delay='1500'>
                              <span className='text-white capitalize'>follow us</span>
                              <div className=' w-24 h-1 bg-white rounded-lg'></div>
                              <div className=' flex items-center gap-3'>
                                    <FaFacebook size={18} className='text-white'/>
                                    <BsInstagram size={18} className='text-white'/>
                                    <IoLogoYoutube size={18} className='text-white'/>
                                    <FaSquareXTwitter size={18} className='text-white'/>
                              </div>
                        </div>
                  </div>
                  {/* right */}
                  <div className=' flex items-center relative' data-aos='zoom-in' data-aos-delay='600'>
                        <img src={H1} alt="" className=' w-full h-96 rounded-lg flex justify-center items-center' />
                        <div className=' flex-col flex -rotate-12 sm:absolute md:relative sm:-right-6 sm:top-12 md:top-0 md:right-0'>
                              <span className=' text-white text-ms capitalize'>get up to</span>
                              <span className='text-white text-7xl font-bold capitalize'>50%</span>
                              <span className=' text-white text-ms capitalize'>discount</span>
                        </div>
                  </div>
                  <div className=' absolute top-[20%] left-[50%]' data-aos='zoom-in' data-aos-delay='600'>
                        <img src={H2} alt="" className='w-44 h-44' />
                  </div>

                  <div data-aos='zoom-in' data-aos-delay='900' className=' absolute top-0 left-12'  style={{ animation: 'floatCloud 5s ease-in-out infinite',}}>
                        <img src={H3} alt="" className='w-24 h-24 ' />
                  </div>
                  <div data-aos='zoom-in' data-aos-delay='1200' className=' absolute top-44 left-0'style={{ animation: 'floatCloud 4s ease-in-out infinite', animationDelay: '1.5s', }}>
                        <img src={H4} alt="" className='w-24 h-24' />
                  </div>
            </section>
      )
}

export default Hero