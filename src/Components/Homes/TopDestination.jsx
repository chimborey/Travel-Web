import React, { useState, useEffect } from 'react'
import P1 from '../../assets/Index/About/pic1.jpg'
import P2 from '../../assets/Index/About/pic2.jpg'
import P3 from '../../assets/Index/About/pic3.jpg'
import { Link } from 'react-router-dom'
import TD1 from '../../assets/Index/TopDestination/man-rock.png'
import D1 from '../../assets/Index/TopDestination/destination1.jpg'
import D2 from '../../assets/Index/TopDestination/destination2.jpg'
import D3 from '../../assets/Index/TopDestination/destination3.jpg'
import D4 from '../../assets/Index/TopDestination/destination4.jpg'
import D5 from '../../assets/Index/TopDestination/destination5.jpg'
import D6 from '../../assets/Index/TopDestination/destination6.jpg'
import D7 from '../../assets/Index/TopDestination/destination7.jpg'
import { IoLocationSharp } from "react-icons/io5"
import { IoMdStar } from "react-icons/io"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

const destinations = [
  { id: 1, img: D1, name: 'Kashmir', country: 'India', rating: 4.8, listing: 32 },
  { id: 2, img: D2, name: 'Koh Norea', country: 'Phnom Penh', rating: 4.7, listing: 25 },
  { id: 3, img: D3, name: 'Maldives', country: 'Maldives', rating: 4.9, listing: 20 },
  { id: 4, img: D4, name: 'Indonesia', country: 'Indonesia', rating: 4.6, listing: 60 },
  { id: 5, img: D5, name: 'Bali', country: 'Indonesia', rating: 4.8, listing: 20 },
  { id: 6, img: D6, name: 'Paris', country: 'France', rating: 4.9, listing: 45 },
  { id: 7, img: D7, name: 'Santorini', country: 'Greece', rating: 4.7, listing: 18 },
]

const TopDestination = () => {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [hovered, setHovered] = useState(null)
  const [visible, setVisible] = useState(4)

  // responsive visible count
  useEffect(() => {
    const update = () => setVisible(window.innerWidth < 768 ? 2 : 4)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  // reset on resize
  useEffect(() => {
    setCurrent(0)
    setSelected(null)
  }, [visible])

  const prev = () => setCurrent(c => Math.max(c - 1, 0))
  const next = () => setCurrent(c => Math.min(c + 1, destinations.length - visible))

  const handleClick = (id) => setSelected(p => p === id ? null : id)

  return (
    <>
      {/* ── TOP ── */}
      <section className='flex flex-col md:flex-row gap-6'>

        {/* left */}
        <div className='flex-1 flex flex-col space-y-4 mt-7'>
          <h3 className='font-group text-yellow-500' data-aos='fade-up' data-aos-delay='300'>
            Most Favorite <span className='text-white'>Tour Places!</span>
          </h3>
          <p className='text-sm text-gray-400 leading-relaxed' data-aos='fade-up' data-aos-delay='600'>
            Choosing a destination can be exciting but also a bit overwhelming
            with so many amazing places out there! Are you dreaming of peaceful
            nature, buzzing cities, historical wonders, or relaxing beaches?
          </p>

          {/* avatars */}
          <div className='flex items-center gap-3' data-aos='fade-up' data-aos-delay='900'>
            <div className='flex items-center'>
              <img src={P1} alt="" className='w-11 h-11 rounded-full object-cover border-2 border-gray-700' />
              <img src={P2} alt="" className='w-11 h-11 rounded-full object-cover border-2 border-gray-700 -translate-x-3' />
              <img src={P3} alt="" className='w-11 h-11 rounded-full object-cover border-2 border-gray-700 -translate-x-6' />
            </div>
            <div className='flex flex-col'>
              <span className='text-sm text-green-400 font-bold'>3.5k</span>
              <span className='text-xs text-gray-400 capitalize'>happy customer</span>
            </div>
          </div>

          <div data-aos='fade-up' data-aos-delay='1200'>
            <Link
              to='/'
              className='py-2 px-6 rounded-full bg-green-500 text-black font-medium
                capitalize transition-all duration-300 hover:-translate-y-1
                hover:bg-white hover:text-yellow-400 inline-block'
            >
              discover more
            </Link>
          </div>
        </div>

        {/* center */}
        <div data-aos='fade-up' data-aos-delay='1200'>
          <div className='flex-1 md:translate-y-24 md:translate-x-12'>
            <h3 className='text-yellow-500 text-7xl font-black leading-tight'>
              Top <br />
              <span className='text-white'>Destination</span>
            </h3>
          </div>
        </div>

        {/* right */}
        <div className='flex-1' data-aos='fade-up' data-aos-delay='1200'>
          <img src={TD1} alt="" className='w-full h-96 object-contain' />
        </div>

      </section>

      {/* ── BOTTOM — Slider ── */}
      <section className='mt-14' data-aos='fade-up' data-aos-delay='1500'>
        <div className='flex items-center gap-3'>

          {/* Prev */}
          <button
            onClick={prev}
            disabled={current === 0}
            className='flex-shrink-0 w-10 h-10 rounded-full border border-white/20
              bg-white/10 hover:bg-green-500 flex items-center justify-center
              disabled:opacity-20 transition-all duration-300'
          >
            <IoIosArrowBack size={18} className='text-white' />
          </button>

          {/* Cards viewport */}
          <div className='overflow-hidden flex-1'>
            <div
              className='flex gap-3 transition-transform duration-500 ease-in-out'
              style={{
                transform: `translateX(calc(-${current} * (100% / ${visible} + 3px)))`,
              }}
            >
              {destinations.map((dest) => {
                const isSelected = selected === dest.id
                const isHovered = hovered === dest.id
                const isActive = isSelected || isHovered

                return (
                  <div
                    key={dest.id}
                    onClick={() => handleClick(dest.id)}
                    onMouseEnter={() => setHovered(dest.id)}
                    onMouseLeave={() => setHovered(null)}
                    className='flex-shrink-0 relative rounded-2xl overflow-hidden
                      cursor-pointer border-2 transition-all duration-500 ease-in-out'
                    style={{
                      width: isActive
                        ? `calc(100% / ${visible} - 12px + 55px)`
                        : `calc(100% / ${visible} - 12px)`,
                      height: isSelected ? '300px' : '230px',
                      borderColor: isSelected ? '#22c55e' : 'transparent',
                      zIndex: isActive ? 10 : 1,
                    }}
                  >
                    {/* Image */}
                    <img
                      src={dest.img}
                      alt={dest.name}
                      className='w-full h-full object-cover transition-transform duration-500'
                      style={{ transform: isActive ? 'scale(1.08)' : 'scale(1)' }}
                    />

                    {/* Gradient */}
                    <div
                      className='absolute inset-0 transition-all duration-500'
                      style={{
                        background: isActive
                          ? 'linear-gradient(to top, rgba(0,0,0,0.88), rgba(0,0,0,0.1))'
                          : 'linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.05))',
                      }}
                    />

                    {/* Rating */}
                    <div className='absolute top-3 right-3 flex items-center gap-1
                      bg-black/50 rounded-full px-2 py-1'>
                      <IoMdStar size={11} className='text-yellow-400' />
                      <span className='text-white text-xs font-medium'>{dest.rating}</span>
                    </div>

                    {/* Selected badge */}
                    <div
                      className='absolute top-3 left-3 bg-green-500 text-black
                        text-xs font-bold px-2 py-1 rounded-full transition-all duration-300'
                      style={{
                        opacity: isSelected ? 1 : 0,
                        transform: isSelected ? 'translateY(0)' : 'translateY(-6px)',
                      }}
                    >
                      Selected
                    </div>

                    {/* Bottom info */}
                    <div className='absolute bottom-0 left-0 right-0 p-3'>
                      <h4 className='text-white font-bold text-sm capitalize mb-1'>
                        {dest.name}
                      </h4>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-1'>
                          <IoLocationSharp size={12} className='text-green-400' />
                          <span className='text-gray-300 text-xs'>{dest.country}</span>
                        </div>
                        <span
                          className='text-xs bg-green-500 text-black font-semibold
                            px-2 py-1 rounded-full transition-all duration-300'
                          style={{
                            opacity: isActive ? 1 : 0,
                            transform: isActive ? 'translateY(0)' : 'translateY(6px)',
                          }}
                        >
                          {dest.listing} Listing
                        </span>
                      </div>
                    </div>

                  </div>
                )
              })}
            </div>
          </div>

          {/* Next */}
          <button
            onClick={next}
            disabled={current >= destinations.length - visible}
            className='flex-shrink-0 w-10 h-10 rounded-full border border-white/20
              bg-white/10 hover:bg-green-500 flex items-center justify-center
              disabled:opacity-20 transition-all duration-300'
          >
            <IoIosArrowForward size={18} className='text-white' />
          </button>

        </div>

        {/* Dots */}
        <div className='flex justify-center gap-2 mt-6'>
          {Array.from({ length: destinations.length - visible + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className='rounded-full transition-all duration-300'
              style={{
                width: current === i ? '24px' : '8px',
                height: '8px',
                background: current === i ? '#22c55e' : 'rgba(255,255,255,0.3)',
              }}
            />
          ))}
        </div>

      </section>
    </>
  )
}

export default TopDestination