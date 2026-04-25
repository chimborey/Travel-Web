import React from 'react'
import AB1 from '../../assets/AboutPage/service-01.jpg'
import AB2 from '../../assets/AboutPage/service-02.jpg'
import AB3 from '../../assets/AboutPage/service-03.jpg'
import AB4 from '../../assets/AboutPage/service-04.jpg'
import AB5 from '../../assets/AboutPage/service-05.jpg'
import AB6 from '../../assets/AboutPage/service-06.jpg'
import AB7 from '../../assets/AboutPage/service-07.jpg'
import AB8 from '../../assets/AboutPage/service-08.jpg'

const About_Services = () => {
      const blogData = [
            { id: 1, imgUrl: AB1, name: 'tour guide', },
            { id: 2, imgUrl: AB2, name: 'entertainment', },
            { id: 3, imgUrl: AB3, name: 'safe flight', },
            { id: 4, imgUrl: AB4, name: 'taxi & metro', },
            { id: 5, imgUrl: AB5, name: 'delicious food', },
            { id: 6, imgUrl: AB6, name: 'spa & massages', },
            { id: 7, imgUrl: AB7, name: 'interesting rest', },
            { id: 8, imgUrl: AB8, name: 'pickup & drop', },
            { id: 3, imgUrl: AB3, name: 'safe flight', },
      ]
      return (
            <>
                  {/* top */}
                  <div className=' flex flex-col space-y-2 justify-center items-center'>
                        <h3 className=' font-group text-yellow-500' data-aos='fade-up' data-aos-delay='300'>our amazing <span className=' text-teal-900'>services</span></h3>
                        <p className='text-teal-900' data-aos='fade-up' data-aos-delay='600'>Destinations worth exploring! Here are a few popular spots</p>
                  </div>
                  {/* center */}
                  <div className=' w-full overflow-hidden bg-white py-5 px-5 rounded-lg mt-7' data-aos='zoom-in' data-aos-delay='900'>
                        <div className=' grid grid-cols-2 md:grid-cols-3 gap-6'>
                              {
                                    blogData.map((ab) => {
                                          const { id, name, imgUrl } = ab
                                          return (
                                                <div key={id} className=' w-full hover:bg-teal-500 flex flex-col space-y-3 overflow-hidden bg-white py-3 px-3 rounded-lg shadow-2xl shadow-gray-300 cursor-pointer'>
                                                      <img src={imgUrl} alt="" className='w-full h-48 rounded-lg' />
                                                      <h3 className=' text-md text-teal-800 capitalize text-center'>{name}</h3>
                                                </div>
                                          )
                                    })
                              }
                        </div>
                  </div>
                  {/* bottom */}
                  <div className=' w-full text-left items-end flex flex-col  mt-7' data-aos='zoom-in' data-aos-delay='1200'>
                        <span className='  text-2xl text-white capitalize font-bold'>wonderful services for you</span>
                        <h3 className=' text-yellow-500 capitalize text-5xl font-bold'>services we offer</h3>
                  </div>
            </>
      )
}

export default About_Services