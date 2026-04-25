import React from 'react'
import ES1 from '../../assets/ErrorPage/error-bg.png'
import ES2 from '../../assets/ErrorPage/hotballon-error.png'
import { Link } from 'react-router-dom'
const Erorr_Section = () => {
  return (
    <section className=' grid grid-cols-1 md:grid-cols-2 gap-6'>
      {/* left */}
      <div className=' flex flex-col justify-center' data-aos='zoom-in' data-aos-duration='1500'>
            <span className=' text-teal-500 capitalize font-bold text-xl'>oops!</span>
            <div className=' flex items-center gap-3'>
                  <h3 className=' text-teal-600 text-7xl font-bold'>4</h3>
                  <img src={ES2} alt="Error" className=' w-full md:w-44 h-44'/>
                  <h3 className=' text-teal-600 text-7xl font-bold'>4</h3>
            </div>
            <div className=' flex flex-col space-y-3'>
                  <h3 className=' text-teal-600 text-xl font-bold text-center lg:mr-44'>page not found</h3>
                  <p className=' text-gray-400 text-sm'>The page you are looking for isn't available. Try navigating to the homepage or contact support.</p>
                  <Link to="/">
                        <button className=' py-2 px-4 rounded-full bg-green-500 text-black cursor-pointer capitalize text-center mx-auto justify-center flex'>back home</button>
                  </Link>
            </div>
      </div>
      {/* right */}
      <div data-aos='zoom-in' data-aos-duration='1500'>
            <img src={ES1} alt="" className=' w-full h-96 object-cover cursor-pointer rounded-lg'/>
      </div>
    </section>
  )
}

export default Erorr_Section