import React from 'react'
import B1 from '../../assets/Index/BookingSteps/Title-Shape.png'
import Destinations_PP from '../../../Json/Destinations_PP.json'

const Destinations_Popular = () => {
      return (
            <>
                  {/* top */}
                  <div className=' flex flex-col space-y-2 justify-center items-center'>
                        <h3 className=' font-group text-yellow-500' data-aos='fade-up' data-aos-delay='300'>popular <span className=' text-teal-900'>destination</span></h3>
                        <p className='text-teal-900' data-aos='fade-up' data-aos-delay='600'>Destinations worth exploring! Here are a few popular spots</p>
                        <img src={B1} alt="" className='w-96 h-8' data-aos='fade-up' data-aos-delay='900' />
                  </div>
                  {/* center */}
                  <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-7'>
                        {
                              Destinations_PP.map((dp) => (
                                    <div data-aos='zoom-in' data-aos-delay='1200' className=' w-full relative overflow-hidden rounded-lg cursor-pointer'>
                                          <img src={dp.image} alt="" className='w-full h-48 rounded-lg hover:scale-110 duration-300 transition-all' />
                                          <h3 className=' absolute top-2 right-2 bg-red-200 rounded-full p-2 text-xs'>{dp.name}</h3>
                                    </div>
                              ))
                        }
                  </div>
            </>
      )
}

export default Destinations_Popular