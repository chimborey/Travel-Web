import React from 'react'
import PS1 from '../../assets/PricingPage/tour-01.jpg'
import PS2 from '../../assets/PricingPage/tour-02.jpg'
import PS3 from '../../assets/PricingPage/tour-03.jpg'
import { IoIosArrowRoundForward } from "react-icons/io";
const Pricing_Section = () => {
      const pricingData = [
            {
                  id: 1,
                  imgUrl: PS1,
                  name: 'budget travel',
                  price: 49,
                  date: 'per day',
                  icon: <IoIosArrowRoundForward />,
                  span1: '3 star hotel (4 nights )',
                  span2: 'local taxi',
                  span3: 'sightseeing, tickets',
                  span4: 'tourist visa',
                  span5: 'meals & snacks',
                  btn: 'shop now',
            },
            {
                  id: 2,
                  imgUrl: PS2,
                  name: 'Mid-Range travel',
                  price: 79,
                  date: 'per day',
                  icon: <IoIosArrowRoundForward />,
                  span1: '3 star hotel (4 nights )',
                  span2: 'local taxi',
                  span3: 'sightseeing, tickets',
                  span4: 'tourist visa',
                  span5: 'meals & snacks',
                  btn: 'shop now',
            },
            {
                  id: 3,
                  imgUrl: PS3,
                  name: 'luxury travel',
                  price: 99,
                  date: 'per day',
                  icon: <IoIosArrowRoundForward />,
                  span1: '3 star hotel (4 nights )',
                  span2: 'local taxi',
                  span3: 'sightseeing, tickets',
                  span4: 'tourist visa',
                  span5: 'meals & snacks',
                  btn: 'shop now',
            },
      ]
      return (
            <>
                  {/* top */}
                  <div className=' flex flex-col space-y-3 text-center mb-9'>
                        <h3 className=' font-group text-teal-900' data-aos='zoom-in' data-aos-delay='300'>Our CLient <span className=' text-yellow-500'>say!</span></h3>
                        <p className=' text-teal-600 text-sm' data-aos='zoom-in' data-aos-delay='600'>Destinations worth exploring! Here are a few popular spots</p>
                  </div>
                  {/* center */}
                  <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {
                              pricingData.map((pd) => {
                                    const{id, imgUrl, span1, span2, span3, span4, span5, icon, btn, date, price, name} = pd
                                    return(
                                          <div data-aos='zoom-in' data-aos-delay='900' key={id} className=' w-full overflow-hidden bg-white py-5 px-5 cursor-pointer rounded flex flex-col space-y-3'>
                                                <img src={imgUrl} alt="" className='w-full h-28 cursor-pointer rounded-full'/>
                                                <div className=' flex items-center justify-between'>
                                                      <h3 className='text-md text-teal-600 capitalize font-bold'>{name}</h3>
                                                      <div className=' flex flex-col'>
                                                            <span className='text-md text-teal-600 capitalize font-bold'>${price}</span>
                                                            <span className='text-sm text-teal-600 capitalize'>{date}</span>
                                                      </div>
                                                </div>
                                                <div className='flex flex-col space-y-3'>
                                                      <div className=' flex items-center gap-3'>
                                                            <button className=' w-7 h-7 rounded-full border-yellow-700 font-bold border flex items-center justify-center text-yellow-700'>{icon}</button>
                                                            <span className=' text-xs text-teal-700 capitalize font-bold'>{span1}</span>
                                                      </div>
                                                      <div className=' flex items-center gap-3'>
                                                            <button className=' w-7 h-7 rounded-full border-yellow-700 font-bold border flex items-center justify-center text-yellow-700'>{icon}</button>
                                                            <span className=' text-xs text-teal-700 capitalize font-bold'>{span2}</span>
                                                      </div>
                                                      <div className=' flex items-center gap-3'>
                                                            <button className=' w-7 h-7 rounded-full border-yellow-700 font-bold border flex items-center justify-center text-yellow-700'>{icon}</button>
                                                            <span className=' text-xs text-teal-700 capitalize font-bold'>{span3}</span>
                                                      </div>
                                                      <div className=' flex items-center gap-3'>
                                                            <button className=' w-7 h-7 rounded-full border-yellow-700 font-bold border flex items-center justify-center text-yellow-700'>{icon}</button>
                                                            <span className=' text-xs text-teal-700 capitalize font-bold'>{span4}</span>
                                                      </div>
                                                      <div className=' flex items-center gap-3'>
                                                            <button className=' w-7 h-7 rounded-full border-yellow-700 font-bold border flex items-center justify-center text-yellow-700'>{icon}</button>
                                                            <span className=' text-xs text-teal-700 capitalize font-bold'>{span5}</span>
                                                      </div>
                                                </div>
                                                <div className=' flex justify-center items-center'>
                                                      <button className=' text-black bg-green-300 px-4 py-2 rounded-full capitalize'>{btn}</button>
                                                </div>
                                          </div>
                                    )
                              })
                        }
                  </div>
            </>
      )
}

export default Pricing_Section