import React from 'react'
import B1 from '../../assets/Index/BookingSteps/Title-Shape.png'
import T1 from '../../assets/Index/TourGuide/pic1.jpg'
import T2 from '../../assets/Index/TourGuide/pic2.jpg'
import T3 from '../../assets/Index/TourGuide/pic3.jpg'
import T4 from '../../assets/Index/TourGuide/pic4.jpg'
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import CB1 from '../../assets/Index/TourGuide/CircleShape.png'
import CI2 from '../../assets/Index/TourGuide/team-1.png'

const TourGuideUs = () => {
      const tourData = [
            { id: 1, name: "Murphy", image: T1 },
            { id: 2, name: "Alexis Cox", image: T2 },
            { id: 3, name: "Murray", image: T3 },
            { id: 4, name: "Crawford", image: T4 },
      ]
      return (
            <>
                  {/* top */}
                  <div className=' flex flex-col space-y-2 justify-center items-center' data-aos='fade-up' data-aos-delay='300'>
                        <h3 className=' font-group text-yellow-500' data-aos='fade-up' data-aos-delay='600'>Meet With <span className=' text-teal-900'>Tour Guide</span></h3>
                        <p className='text-teal-900' data-aos='fade-up' data-aos-delay='900'>Destinations worth exploring! Here are a few popular spots</p>
                        <img src={B1} alt="" className='w-96 h-8' />
                  </div>
                  {/* bottom */}
                  <div data-aos='fade-up' data-aos-delay='1200' className=' grid grid-cols-1 md:grid-cols-2 gap-6 mt-7'>
                        <div className=' relative bg-center bg-cover bg-no-repeat w-full md:h-[400px] lg:h-[500px] h-[400px] rounded-full' style={{backgroundImage: `url(${CB1})`}}>
                              <h3 className=' text-xl text-teal-900 capitalize font-bold text-center mt-5 md:mt-12 lg:mt-5'>meet with</h3>
                              <h3 className=' text-5xl text-white capitalize font-bold text-center'>expert guide</h3>
                              <img src={CI2} alt="" className='w-full h-[300px] md:h-[500px] rounded-lg absolute md:top-44 bottom-0 lg:-bottom-44'/>
                        </div>
                        <div className=' grid grid-cols-1 md:grid-cols-2 gap-3'>
                              {
                                    tourData.map((item) => {
                                          const { id, name, image } = item
                                          return (
                                                <div key={id} className=' border w-full overflow-hidden flex flex-col space-y-3 bg-white rounded-lg px-2 py-2 cursor-pointer'>
                                                      <img src={image} alt="" className=' w-full h-48 rounded-lg hover:scale-110 duration-300 transition-all' />
                                                      <div className=' flex items-center gap-3 p-2 justify-center'>
                                                            <FaFacebook className='text-white bg-teal-900 rounded-full  w-9 h-9 border-yellow-500 border-2 py-2 px-2 text-2xl' />
                                                            <BsInstagram className='text-white bg-teal-900 rounded-full w-9 h-9 border-yellow-500 border-2 py-2 px-2 text-2xl' />
                                                            <IoLogoYoutube className='text-white bg-teal-900 rounded-full w-9 h-9 border-yellow-500 border-2 py-2 px-2 text-2xl' />
                                                            <FaSquareXTwitter className='text-white bg-teal-900 rounded-full w-9 h-9 border-yellow-500 border-2 py-2 px-2 text-2xl' />
                                                      </div>
                                                      <div className=' mt-4'>
                                                            <h3 className=' text-xl text-teal-900 capitalize font-bold text-center'>{name}</h3>
                                                      </div>
                                                </div>
                                          )
                                    })
                              }
                        </div>
                  </div>
            </>
      )
}

export default TourGuideUs