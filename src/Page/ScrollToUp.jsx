import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';
const ScrollToUp = () => {
      const [isScroll, setIsScroll] = useState(false)
      useEffect(() => {
            const handleScroll = () => {
                  if (window.scrollY > 300) {
                        setIsScroll(true)
                  } else {
                        setIsScroll(false)
                  }
            }
            window.addEventListener('scroll', handleScroll)
            return () => window.removeEventListener('scroll', handleScroll)
      }, [])
      const scrollToTop = () => {
            window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
            })
      }
      return (
            <section className=' fixed bottom-4 right-2 animate-pulse z-50'>
                  {
                        isScroll && (
                              <div onClick={scrollToTop} className=' cursor-pointer w-12 h-12 rounded-full flex justify-center items-center bg-rose-500 text-white'>
                                    <FaArrowUp size={28} />
                              </div>
                        )
                  }
            </section>
      )
}

export default ScrollToUp