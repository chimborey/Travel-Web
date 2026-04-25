import React from 'react'
import StepsIcon1 from '../../assets/Index/BookingSteps/Steps-Icon1.png'
import StepsIcon2 from '../../assets/Index/BookingSteps/Steps-Icon2.png'
import StepsIcon3 from '../../assets/Index/BookingSteps/Steps-Icon3.png'
import Bg from '../../assets/Index/BookingSteps/Banner-bg.png'
import { Link } from 'react-router-dom'
const Booking = () => {
      const stepsData = [
            {
                  id: 1,
                  number: "01",
                  title: "Choose Destination",
                  description:
                        "All you have to do is, first select your preferred destination and proceed",
                  icon: StepsIcon1,
            },
            {
                  id: 2,
                  number: "02",
                  title: "Make Payment",
                  description:
                        "You are important to us. We pay attention to the quality of  service we provide to you.",
                  icon: StepsIcon2,
            },
            {
                  id: 3,
                  number: "03",
                  title: "Ready For Travelling",
                  description:
                        "We have seen that you have fulfilled all the requirements, now you are ready to travel.",
                  icon: StepsIcon3,
            },
      ];
      return (
            <>
                  <div className=' flex flex-col space-y-2 justify-center items-center'>
                        <h3 className=' font-group text-green-900' data-aos='zoom-in' data-aos-delay='300'>Easy Steps <span className=' text-yellow-600'>For Bookings</span></h3>
                        <p className=' text-green-900 text-sm' data-aos='zoom-in' data-aos-delay='600'>Destinations worth exploring! Here are a few popular spots</p>
                  </div>

                  <div className=' grid grid-cols-1 md:grid-cols-3 gap-6 mt-7' data-aos='fade-up' data-aos-delay='900'>
                        {
                              stepsData.map((sd) => {
                                    const { id, title, description, icon, number } = sd
                                    return (
                                          <div key={id} className=' w-full overflow-hidden px-3 py-3 cursor-pointer border flex flex-col space-y-3 rounded-lg bg-white hover:scale-120 duration-300 transition-all hover:shadow-md hover:shadow-gray-400'>
                                                <div className=' flex justify-between items-center'>
                                                      <span className='py-2 px-2 bg-green-900 rounded-lg text-white font-bold text-xl'>{number}</span>
                                                      <img src={icon} alt="" className='w-16 h-16 rounded-full border-yellow-400 border-2 p-3 text-2xl' />
                                                </div>
                                                <h3 className=' text-green-900 capitalize font-bold text-md'>{title}</h3>
                                                <p className=' text-sm text-gray-400'>{description}</p>
                                          </div>
                                    )
                              })
                        }
                  </div>

                  <div data-aos='zoom-in' data-aos-delay='1200' className=' w-full overflow-hidden relative bg-yellow-500 rounded-lg mt-12 py-3 px-3 flex justify-between items-center'>
                        <div className='w-full overflow-hidden bg-center bg-cover bg-no-repeat absolute inset-0' style={{ backgroundImage: `url(${Bg})` }}></div>
                        <div className=' flex items-center relative z-10'>
                              <h3 className=' text-xl md:text-7xl text-white font-bold'>48</h3>
                              <div className=' flex flex-col mt-9'>
                                    <span className=' text-green-900 font-bold text-xs md:text-2xl'>%</span>
                                    <span className=' text-green-900 font-bold uppercase text-xs md:text-2xl'>off</span>
                              </div>
                        </div>
                        <div  className=' flex flex-col relative z-10'>
                              <span className=' text-white font-bold capitalize text-xs md:text-md'>Get Special Offer</span>
                              <h3 className=' text-sm md:text-xl lg:text-4xl font-bold text-green-900 capitalize'>Tours and Trip Packages , Globally</h3>
                        </div>
                        <div className=' flex relative z-10'>
                              <Link to={'/'} className=' py-1 px-2 md:py-2 md:px-4 hover:-translate-y-1 md:text-xl text-xs hover:bg-white duration-300 transition-all hover:text-yellow-400 rounded-full bg-white capitalize text-black cursor-pointer'>discover more</Link>
                        </div>
                  </div>
            </>
      )
}

export default Booking