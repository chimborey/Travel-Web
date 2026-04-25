import React from 'react'
import T1 from '../../assets/Index/TourGuide/pic1.jpg'
import T2 from '../../assets/Index/TourGuide/pic2.jpg'
import T3 from '../../assets/Index/TourGuide/pic3.jpg'
import T4 from '../../assets/Index/TourGuide/pic4.jpg'
import T5 from '../../assets/TourGuidePage/pic5.jpg'
import T6 from '../../assets/TourGuidePage/pic6.jpg'
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";

const TourGuide_Section = () => {
      const tourData = [
            { id: 1, name: "Murphy", image: T1 },
            { id: 2, name: "Alexis Cox", image: T2 },
            { id: 3, name: "Murray", image: T3 },
            { id: 4, name: "Crawford", image: T4 },
            { id: 5, name: "Ehan Walker", image: T5 },
            { id: 6, name: "Liam Brooks", image: T6 },
      ]
      return (
            <>
            {/* top */}
                  <div className=' flex flex-col items-center justify-center space-y-3'>
                        <h3 className=' text-4xl text-yellow-500 font-bold capitalize' data-aos='zoom-in' data-aos-delay='300'>meet with <span className=' text-teal-500'>tour guide</span></h3>
                        <p className=' text-teal-500 text-sm'  data-aos='zoom-in' data-aos-delay='600'>Destinations worth exploring! Here are a few popular spots</p>
                  </div>
                  {/* center */}
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7' data-aos='zoom-in' data-aos-delay='900'>
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
            </>
      )
}

export default TourGuide_Section