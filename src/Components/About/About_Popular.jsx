import React from 'react'
import B1 from '../../assets/Index/BookingSteps/Title-Shape.png'
import APR from '../../assets/hotballon-right.png'
import APL from '../../assets/hotballon-left.png'
import About_Popular_Section from '../../../Json/About_Popular_Section.json'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const About_Popular = () => {
      return (
            <>
                  {/* top */}
                  <div className=' flex flex-col space-y-2 justify-center items-center'>
                        <h3 className=' font-group text-yellow-500' data-aos='fade-up' data-aos-delay='300'>popular <span className=' text-teal-900'>destination</span></h3>
                        <p className='text-teal-900' data-aos='fade-up' data-aos-delay='600'>Destinations worth exploring! Here are a few popular spots</p>
                        <img src={B1} alt="" className='w-96 h-8' data-aos='fade-up' data-aos-delay='900' />
                  </div>
                  {/* center */}
                  <div className=' flex justify-between items-center mt-7 gap-7'>

                        <div className=' opacity-50' data-aos='zoom-in' data-aos-delay='900' >
                              <img src={APL} alt="" className='w-full h-56' />
                        </div>

                        <Swiper
                              slidesPerView={8}
                              spaceBetween={20}
                              loop={true}
                              modules={[Autoplay]}
                              autoplay={{ delay: 1500 }}
                              speed={1500}
                              breakpoints={{
                                    320: { slidesPerView: 1, spaceBetween: 10 },
                                    640: { slidesPerView: 2, spaceBetween: 15 },
                                    1024: { slidesPerView: 4, spaceBetween: 20 },
                                    1280: { slidesPerView: 4, spaceBetween: 20 },
                              }}
                        >
                              {
                                    About_Popular_Section.map((item) => (
                                          <SwiperSlide key={item.id}>
                                                <div data-aos='zoom-in' data-aos-delay='1200'  className=' w-full relative overflow-hidden rounded-lg cursor-pointer'>
                                                      <img src={item.image} alt="" className='w-full h-72 rounded-lg hover:scale-110 duration-300 transition-all' />
                                                      <h3 className=' absolute top-2 right-2 bg-red-200 rounded-full p-2 text-xs'>{item.name}</h3>
                                                </div>
                                          </SwiperSlide>
                                    ))
                              }
                        </Swiper>


                        <div className=' -z-50' data-aos='zoom-in' data-aos-delay='900' >
                              <img src={APR} alt="" className='w-full h-36' />
                        </div>
                  </div>
            </>
      )
}

export default About_Popular