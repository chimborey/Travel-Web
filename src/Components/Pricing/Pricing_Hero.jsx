import React from 'react'
import { Link } from 'react-router-dom'
import Bg from '../../assets/section-banner.jpg'
const Pricing_Hero = () => {
      return (
            <section className=' w-full overflow-hidden h-[100vh] bg-center bg-cover bg-no-repeat py-14' style={{ backgroundImage: `url(${Bg})` }}>
                  <main className=' container mt-12'>
                        <div className=' h-[70vh] flex flex-col justify-center items-center'>
                              <h3 className='hero-group'  data-aos='zoom-in' data-aos-delay='300'>Pricing plan</h3>
                              <div className=' hero-group-section flex items-center gap-3'  data-aos='zoom-in' data-aos-delay='600'>
                                    <Link to='/' className=' underline'>home</Link>
                                    /
                                    <span>Pricing plan</span>
                              </div>
                        </div>
                  </main>
            </section>
      )
}

export default Pricing_Hero