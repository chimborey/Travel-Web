import React, { useState } from 'react'
import { CiMenuFries } from "react-icons/ci"
import { MdClose } from "react-icons/md"
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io"

const ClickMenuMobile = () => {
  const [clickMenuNav, setClickMenuNav] = useState(false)
  const [openPages, setOpenPages] = useState(false)
  const [openToursGuide, setOpenToursGuide] = useState(false)

  return (
    <>
      <button
        className="lg:hidden flex cursor-pointer z-50 relative"
        onClick={() => setClickMenuNav(!clickMenuNav)}
      >
        {clickMenuNav ? <MdClose size={28} /> : <CiMenuFries size={28} />}
      </button>

      <div className={`w-full absolute top-14 left-0 bg-white duration-300 transition-all
        shadow-md shadow-gray-300 z-40 ${clickMenuNav ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className='flex flex-col items-center py-8 space-y-1 w-full'>

          <Link to='/' onClick={() => setClickMenuNav(false)}
            className='w-full text-center py-3 font-text border-b border-gray-100 hover:text-green-500'>
            home
          </Link>

          <Link to='/about' onClick={() => setClickMenuNav(false)}
            className='w-full text-center py-3 font-text border-b border-gray-100 hover:text-green-500'>
            about us
          </Link>

          {/* Pages — click dropdown */}
          <div className='w-full border-b border-gray-100'>
            <button
              onClick={() => setOpenPages(!openPages)}
              className='w-full py-3 font-text flex items-center justify-center gap-2
                hover:text-green-500 transition-colors'
            >
              pages
              <IoIosArrowDown
                size={16}
                className={`transition-transform duration-300 ${openPages ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Pages sub-menu */}
            <div className={`overflow-hidden transition-all duration-300 bg-gray-50
              ${openPages ? 'max-h-96' : 'max-h-0'}`}>
              <div className='flex flex-col'>

                <Link to='/page/services' onClick={() => setClickMenuNav(false)}
                  className='py-2 text-sm text-center border-b border-gray-200
                    hover:bg-gray-100 hover:text-green-500 font-text'>
                  services
                </Link>

                <Link to='/page/services_Details' onClick={() => setClickMenuNav(false)}
                  className='py-2 text-sm text-center border-b border-gray-200
                    hover:bg-gray-100 hover:text-green-500 font-text'>
                  services details
                </Link>

                <Link to='/page/testimonials' onClick={() => setClickMenuNav(false)}
                  className='py-2 text-sm text-center border-b border-gray-200
                    hover:bg-gray-100 hover:text-green-500 font-text'>
                  testimonials
                </Link>

                {/* Tours Guide — nested click dropdown */}
                <div className='border-b border-gray-200'>
                  <button
                    onClick={() => setOpenToursGuide(!openToursGuide)}
                    className='w-full py-2 text-sm font-text flex items-center justify-center gap-2
                      hover:bg-gray-100 hover:text-green-500 transition-colors'
                  >
                    tours guide
                    <IoIosArrowDown
                      size={14}
                      className={`transition-transform duration-300
                        ${openToursGuide ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 bg-gray-100
                    ${openToursGuide ? 'max-h-32' : 'max-h-0'}`}>
                    <Link to='page/toursGuide/tours_Guide' onClick={() => setClickMenuNav(false)}
                      className='block py-2 text-sm text-center border-b border-gray-200
                        hover:bg-gray-200 hover:text-green-500 font-text'>
                      tours guide
                    </Link>
                    <Link to='/page/toursGuide/toursGuide_Details' onClick={() => setClickMenuNav(false)}
                      className='block py-2 text-sm text-center hover:bg-gray-200
                        hover:text-green-500 font-text'>
                      tours guide details
                    </Link>
                  </div>
                </div>

                <Link to='/page/faqs' onClick={() => setClickMenuNav(false)}
                  className='py-2 text-sm text-center border-b border-gray-200
                    hover:bg-gray-100 hover:text-green-500 font-text'>
                  faqs
                </Link>

                <Link to='/page/pricing' onClick={() => setClickMenuNav(false)}
                  className='py-2 text-sm text-center border-b border-gray-200
                    hover:bg-gray-100 hover:text-green-500 font-text'>
                  pricing
                </Link>

                <Link to='/page/404' onClick={() => setClickMenuNav(false)}
                  className='py-2 text-sm text-center hover:bg-gray-100
                    hover:text-green-500 font-text'>
                  error 404
                </Link>

              </div>
            </div>
          </div>

          <Link to='/destinations' onClick={() => setClickMenuNav(false)}
            className='w-full text-center py-3 font-text border-b border-gray-100 hover:text-green-500'>
            destinations
          </Link>

          <Link to='/tours' onClick={() => setClickMenuNav(false)}
            className='w-full text-center py-3 font-text border-b border-gray-100 hover:text-green-500'>
            tours
          </Link>

          <Link to='/blog' onClick={() => setClickMenuNav(false)}
            className='w-full text-center py-3 font-text border-b border-gray-100 hover:text-green-500'>
            blog
          </Link>

          <Link to='/contact' onClick={() => setClickMenuNav(false)}
            className='w-full text-center py-3 font-text hover:text-green-500'>
            contact
          </Link>

        </div>
      </div>
    </>
  )
}

export default ClickMenuMobile