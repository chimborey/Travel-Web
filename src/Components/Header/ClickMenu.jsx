import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CiMenuFries } from "react-icons/ci"
import { MdClose } from "react-icons/md"
import { FaXTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6"
const ClickMenu = () => {
  const [clickMenuNav, setClickMenuNav] = useState(false)

  return (
    <>
      {/* Hamburger — hide on lg (Menu component takes over) */}
      <button
        className="hidden lg:flex cursor-pointer z-50 relative"
        onClick={() => setClickMenuNav(true)}
      >
        <CiMenuFries size={28} />
      </button>

      {/* Dark backdrop */}
      <div
        onClick={() => setClickMenuNav(false)}
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300
          ${clickMenuNav ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-[100vh] w-[78%] max-w-[440px] bg-black text-white z-50
          transform transition-transform duration-300 ease-in-out overflow-y-auto
          ${clickMenuNav ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Close button */}
        <button
          onClick={() => setClickMenuNav(false)}
          className="absolute top-4 right-4 hover:text-green-400 transition-colors"
        >
          <MdClose size={26} />
        </button>

        <div className="px-7 py-10 flex flex-col gap-7 h-96">

          {/* Logo */}
          <Link to={'/'} className=' flex items-center gap-1 cursor-pointer'>
            <h3 className=' text-red-500 font-bold capitalize text-xl'>World <span className=' text-yellow-500 capitalize'>Travel</span></h3>
          </Link>

          {/* Hero text */}
          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-300">It's Time to Traveling</p>
            <h2 className="text-xl font-bold text-green-400">Plan Your Next Holiday</h2>
            <p className="text-xs text-gray-400 leading-relaxed">
              Travlia is a multi-award-winning strategy and content creation agency that
              specializes in travel marketing.
            </p>
          </div>

          {/* Offers */}
          <div className="flex flex-col gap-3">
            <p className="text-sm text-white">Don't miss out this offers!</p>
            <div className="flex justify-between">
              {[
                { price: '$199', label: 'Basic Plan' },
                { price: '$299', label: 'Pro Plan' },
                { price: '$399', label: 'Full Plan' },
              ].map(({ price, label }) => (
                <div key={label} className="text-center">
                  <p className="text-green-400 font-bold">{price}</p>
                  <p className="text-xs text-white font-medium">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Social icons */}
          <div className="flex gap-3 mt-2">
            {[
              { Icon: FaXTwitter },
              { Icon: FaFacebookF },
              { Icon: FaInstagram },
              { Icon: FaYoutube },
            ].map(({ Icon }, i) => (
              <button
                key={i}
                className="w-10 h-10 rounded-full border border-green-400 flex items-center
                  justify-center text-green-400 hover:bg-green-400 hover:text-black transition-all"
              >
                <Icon size={15} />
              </button>
            ))}
          </div>

        </div>
      </div>
    </>
  )
}

export default ClickMenu