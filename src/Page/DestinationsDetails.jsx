import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Destinations_PP from '../../Json/Destinations_PP.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
const DestinationDetail = () => {
      const { slug } = useParams()

      const data = Destinations_PP.find(d => d.slug === slug)

      if (!data) return <h1>Not Found</h1>

      return (
            <>

                  {/* Banner */}
                  <div className=' w-full overflow-hidden h-[100vh] bg-center bg-cover bg-no-repeat py-14' style={{ backgroundImage: `url(${data.banner})` }}>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                              <h1 className='hero-group' data-aos='zoom-in' data-aos-delay='300'>{data.name}</h1>
                              <div className=' hero-group-section flex items-center gap-3' data-aos='zoom-in' data-aos-delay='600'>
                                    <Link to='/' className=' underline'>home</Link>
                                    /
                                    <Link to='/destinations' className=' underline'>destinations</Link>
                                    /
                                    <span>{data.name}</span>
                              </div>
                        </div>
                  </div>

                  {/* Content */}
                  <div className=' flex flex-col space-y-7 container my-14'>
                        <div>
                              <Swiper
                                    slidesPerView={1}
                                    spaceBetween={20}
                                    loop={true}
                                    modules={[Autoplay]}
                                    autoplay={{ delay: 1500 }}
                                    speed={1500}
                                    breakpoints={{
                                          320: { slidesPerView: 1, spaceBetween: 10 },
                                          640: { slidesPerView: 1, spaceBetween: 15 },
                                          1024: { slidesPerView: 1, spaceBetween: 20 },
                                          1280: { slidesPerView: 1, spaceBetween: 20 },
                                    }}
                              >
                                    {data.Detail_Img?.map((item, index) => (
                                          <SwiperSlide key={index}>
                                                <img
                                                      src={item.img}
                                                      alt={item.alt}
                                                      className="w-full h-48 object-cover rounded-lg"
                                                />
                                          </SwiperSlide>
                                    ))}
                              </Swiper>

                        </div>
                  </div>
            </>
      )
}

export default DestinationDetail