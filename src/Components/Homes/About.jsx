import React from 'react'
import A1 from '../../assets/Index/About/travel-guide.png'
import A2 from '../../assets/Index/About/mission-icon.png'
import A3 from '../../assets/Index/About/about-image01.jpg'
import A4 from '../../assets/Index/About/about-image02.jpg'
import A5 from '../../assets/Index/About/about-image03.jpg'
import A6 from '../../assets/Index/About/airplane.png'
import P1 from '../../assets/Index/About/pic1.jpg'
import P2 from '../../assets/Index/About/pic2.jpg'
import P3 from '../../assets/Index/About/pic3.jpg'
import { Link } from 'react-router-dom'
const About = () => {
      const aboutData = [
            {
                  id: 1,
                  imgUrl: A1,
                  name: 'Trusted travel guide',
                  desc: 'Provides reliable information to help travelers plan their trips efficiently and safely.',
            },
            {
                  id: 2,
                  imgUrl: A2,
                  name: 'Mission & Vision',
                  desc: 'Aims to connect people to positive experience through travel, helping them see the world differently.',
            },
      ]
      return (
            <section className=' grid grid-cols-1 md:grid-cols-2 gap-6'>
                  {/* left */}
                  <div className=' flex flex-col space-y-3'>
                        <h3 className='font-group text-green-900' data-aos='zoom-in' data-aos-delay='300'>we <span className=' text-yellow-500'>Recommend</span> Beautiful <br />Destinations Every Month</h3>
                        <p className=' text-sm text-green-900' data-aos='zoom-in' data-aos-delay='600'>We Recommend Beautiful Destinations Every Month Travlla is a multi-award-winning strategy and content creation agency that specializes in travel marketing. They have one of the world's largest and most influential online travel communities, helping brands and tourism.</p>
                        <div className=' flex flex-col space-y-3' data-aos='fade-up' data-aos-delay='900'>
                              {
                                    aboutData.map((item) => {
                                          const { id, name, imgUrl, desc } = item
                                          return (
                                                <div key={id} className=' w-full flex items-center gap-3 border overflow-hidden py-2 px-2 border-black rounded-lg'>
                                                      <img src={imgUrl} alt="" className='w-12 h-12' />
                                                      <div className=' flex flex-col gap-3'>
                                                            <h3 className=' text-md text-black font-bold capitalize'>{name}</h3>
                                                            <p className=' text-gray-400 text-xs'>{desc}</p>
                                                      </div>
                                                </div>
                                          )
                                    })
                              }
                              <div className=' flex items-center gap-7'>
                                    <Link to={'/'} className=' py-2 px-4 hover:-translate-y-1 hover:bg-white duration-300 transition-all hover:text-yellow-400 rounded-full bg-green-500 capitalize text-black'>discover more</Link>
                                    <div className=' flex items-center gap-3'>
                                          <div className=' flex items-center relative'>
                                                <img src={P1} alt="" className='w-12 h-12 rounded-full'/>
                                                <img src={P2} alt="" className='w-12 h-12 rounded-full -translate-x-3'/>
                                                <img src={P3} alt="" className='w-12 h-12 rounded-full -translate-x-6'/>
                                          </div>
                                          <div className=' flex flex-col'>
                                                <span className='text-sm text-blue-900 capitalize font-bold'>3.5k</span>
                                                <span className=' text-sm text-gray-400 capitalize'>happy customer</span>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  {/* right */}
                  <div className=' relative hidden md:flex' data-aos='zoom-in' data-aos-delay='600'>
                        <img src={A3} alt="" className=' about-image1'/>
                        <img src={A4} alt="" className=' about-image3'/>
                        <img src={A5} alt="" className='about-image2'/>
                        <img src={A6} alt="" className='rounded-lg w-44 h-44 absolute -top-12 right-0' style={{ animation: 'floatCloud 5s ease-in-out infinite',}}/>
                  </div>
            </section>
      )
}

export default About