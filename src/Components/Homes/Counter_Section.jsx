import React from 'react'
import C1 from '../../assets/Index/Count/count-icon1.png'
import C2 from '../../assets/Index/Count/count-icon2.png'
import C3 from '../../assets/Index/Count/count-icon3.png'
import C4 from '../../assets/Index/Count/count-icon4.png'
import CBg from '../../assets/Index/banner-video.mp4'
const Counter_Section = () => {
      const counterData = [
            { id: 1, title: "Awards Winning", value: 3600, suffix: "+", image: C1 },
            { id: 2, title: "Happy Traveler", value: 7634, suffix: "+", image: C2 },
            { id: 3, title: "Tours Success", value: 2.5, suffix: "K", image: C3, decimals: 1 },
            { id: 4, title: "Our Experience", value: 25, suffix: "+", image: C4 },
      ];
      return (
            <>
            {/* left */}
                  <video loop controls autoPlay src={CBg} alt="" className='w-full cursor-pointer h-[70vh] rounded-lg object-cover' data-aos='zoom-in' data-aos-delay='600'/>
                  {/* right */}
                  <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-7' data-aos='zoom-in' data-aos-delay='900'>
                        {
                              counterData.map((cd) => {
                                    const{id, title, value, image, suffix} = cd
                                    return(
                                          <div key={id} className='w-full overflow-hidden border border-white rounded-lg py-3 px-3 flex flex-col space-y-3 hover:shadow-md hover:shadow-gray-300 duration-300 transition-all'>
                                                <div className=' flex items-center gap-3'>
                                                      <img src={image} alt="" className='w-12 h-12 '/>
                                                      <div className=' flex flex-col'>
                                                            <h3 className=' text-md text-white capitalize font-bold'>{title}</h3>
                                                            <div className=' flex items-center text-yellow-600 font-bold text-xl capitalize'>
                                                                  <span>{value}</span>
                                                                  <span>{suffix}</span>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    )
                              })
                        }
                  </div>
            </>
      )
}

export default Counter_Section