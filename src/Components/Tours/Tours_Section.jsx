import React from 'react'
import B1 from '../../assets/Index/BookingSteps/Title-Shape.png'
import Popular from '../../../Json/Popular.json'
import { MdDateRange } from "react-icons/md";
import { FaStar } from 'react-icons/fa';

const Popular_Section = () => {
      return (
            <>
                  {/* left */}
                  <div className=' flex flex-col space-y-2 justify-center items-center mb-7'>
                        <h3 className=' font-group text-teal-700' data-aos='fade-up' data-aos-delay='300'>Explore Popular <span className=' text-yellow-500'>Tours!</span></h3>
                        <p className='text-teal-500' data-aos='fade-up' data-aos-delay='600'>Destinations worth exploring! Here are a few popular spots</p>
                        <img src={B1} alt="" className='w-96 h-8' data-aos='fade-up' data-aos-delay='900' />
                  </div>
                  {/* right */}
                  <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-7'>
                        {
                              Popular.map((pd) => (
                                    <div key={pd.id}>
                                          <div data-aos='zoom-in' data-aos-delay='1200' className='w-full overflow-hidden rounded-lg cursor-pointer bg-white shadow-2xl mb-4 shadow-gray-300 flex flex-col space-y-3'>
                                                <img src={pd.image} alt="" className='w-full h-48 rounded-lg hover:scale-110 duration-300 transition-all' />
                                                <div className=' flex flex-col px-3 py-3'>
                                                      <h3 className=' popular font-bold capitalize text-teal-600'>{pd.title}</h3>
                                                      <div className=' flex items-center justify-between pt-3 font-bold'>
                                                            <div className=' flex items-center gap-1'>
                                                                  <span className=' text-xs text-teal-400'>({pd.review})</span>
                                                                  <div className='flex text-yellow-500 text-xs items-center'>
                                                                        <FaStar />
                                                                        <FaStar />
                                                                        <FaStar />
                                                                        <FaStar />
                                                                        <FaStar />
                                                                  </div>
                                                            </div>
                                                            <div className=' flex items-center text-xs text-teal-500 gap-1'>
                                                                  <MdDateRange />
                                                                  <span className=' '>{pd.days}</span>
                                                            </div>
                                                      </div>
                                                      <div className=' flex items-center justify-between pt-2'>
                                                            <button className=' px-4 py-1 rounded-full bg-green-400 text-black capitalize'>book now</button>
                                                            <div className=' flex items-center gap-1'>
                                                                  <span className=' text-md font-bold text-teal-800'>{pd.price}</span>
                                                                  <span className=' text-xs text-teal-400 capitalize'>per day</span>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              ))
                        }
                  </div>
            </>
      )
}

export default Popular_Section