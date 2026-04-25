import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import T1 from '../../assets/Index/Testimonails/pic1.jpg'
import T2 from '../../assets/Index/Testimonails/pic2.jpg'
import T3 from '../../assets/Index/Testimonails/pic3.jpg'
import T4 from '../../assets/Index/Testimonails/pic4.jpg'
import T5 from '../../assets/Index/Testimonails/pic5.jpg'
import T6 from '../../assets/Index/Testimonails/pic6.jpg'
import Quote from '../../assets/Index/Testimonails/Quote.png'
import { FaStar } from 'react-icons/fa';
const Testimonial_Section = () => {
      const testimonialData = [
            { id: 1, name: "Kavin Martin", image: T1, span: 'travels', desc: 'I Was Very Impresed Lorem posuere in miss drana en the nisan semere sceriun amiss etiam ornare in the miss drana is lorem fermen nunta mauris.' },
            { id: 2, name: "Alex Morgan", image: T2, span: 'travels', desc: 'I Was Very Impresed Lorem posuere in miss drana en the nisan semere sceriun amiss etiam ornare in the miss drana is lorem fermen nunta mauris.' },
            { id: 3, name: "John Carter", image: T3, span: 'travels', desc: 'I Was Very Impresed Lorem posuere in miss drana en the nisan semere sceriun amiss etiam ornare in the miss drana is lorem fermen nunta mauris.' },
            { id: 4, name: "Sophia Lee", image: T4, span: 'travels', desc: 'I Was Very Impresed Lorem posuere in miss drana en the nisan semere sceriun amiss etiam ornare in the miss drana is lorem fermen nunta mauris.' },
            { id: 5, name: "Daniel Smith", image: T5, span: 'travels', desc: 'I Was Very Impresed Lorem posuere in miss drana en the nisan semere sceriun amiss etiam ornare in the miss drana is lorem fermen nunta mauris.' },
            { id: 6, name: "Emma Watson", image: T6, span: 'travels', desc: 'I Was Very Impresed Lorem posuere in miss drana en the nisan semere sceriun amiss etiam ornare in the miss drana is lorem fermen nunta mauris.' },
      ]
      return (
            <>
                  <div className=' flex flex-col space-y-3 text-center mb-9'>
                        <h3 className=' font-group text-teal-900' data-aos='zoom-in' data-aos-delay='300'>Our CLient <span className=' text-yellow-500'>say!</span></h3>
                        <p className=' text-teal-600 text-sm' data-aos='zoom-in' data-aos-delay='600'>Destinations worth exploring! Here are a few popular spots</p>
                  </div>
                  <Swiper
                        slidesPerView={6}
                        spaceBetween={20}
                        loop={true}
                        modules={[Autoplay]}
                        autoplay={{ delay: 1500 }}
                        speed={1500}
                        breakpoints={{
                              320: { slidesPerView: 1, spaceBetween: 10 },
                              640: { slidesPerView: 2, spaceBetween: 15 },
                              1024: { slidesPerView: 3, spaceBetween: 20 },
                              1280: { slidesPerView: 3, spaceBetween: 20 },
                        }}
                  >
                        {
                              testimonialData.map((td) => {
                                    const { id, image, desc, name, span } = td
                                    return (
                                          <SwiperSlide key={id}>
                                                <div data-aos='fade-up' data-aos-delay='900' className=' w-full relative rounded-lg overflow-hidden flex flex-col space-y-3 cursor-pointer bg-white border'>
                                                      <div className=' relative flex flex-col space-y-3'>
                                                            <img src={image} alt="" className=' w-full h-48 rounded-lg' />
                                                            <div className=' flex flex-col px-3 pb-4'>
                                                                  <h3 className=' text-teal-900 font-bold'>{name}</h3>
                                                                  <span className=' text-yellow-500 font-bold capitalize text-sm'>{span}</span>
                                                                  <p className=' text-teal-500 text-xs'>{desc}</p>
                                                            </div>
                                                            <div className=' bg-black w-24 py-2 px-2 rounded-full bottom-32 left-0 absolute flex items-center gap-2 text-yellow-400'>
                                                                  <FaStar />
                                                                  <FaStar />
                                                                  <FaStar />
                                                                  <FaStar />
                                                                  <FaStar />
                                                            </div>
                                                      </div>

                                                      <div className=' absolute right-2 bottom-16'>
                                                            <img src={Quote} alt="" className='w-8 h-8'/>
                                                      </div>
                                                </div>
                                          </SwiperSlide>
                                    )
                              })
                        }
                  </Swiper>

            </>
      )
}

export default Testimonial_Section