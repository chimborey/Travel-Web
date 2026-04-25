import React from 'react'
import PL1 from '../../assets/PricingPage/frm-left.jpg'
const Pricing_Login = () => {
  return (
    <section className=' flex flex-col md:flex-row gap-3 justify-between items-center'>
      {/* left */}
      <div className=' relative cursor-pointer' data-aos='zoom-in' data-aos-delay='300'>
        <div className=' absolute rounded-xl inset-0 bg-black/25' />
        <img src={PL1} alt="" className='w-full h-96 md:h-[500px] rounded-xl object-cover' />
        <div className=' absolute bottom-4 left-4 space-y-1'>
          <h3 className=' capitalize text-white text-xl font-bold'>hi there!</h3>
          <p className=' text-white text-sm'>what can i do for you today?</p>
        </div>
      </div>
      {/* right */}
      <div data-aos='zoom-in' data-aos-delay='600' className=' w-full md:w-96 mx-auto overflow-hidden shadow-2xl shadow-gray-300 justify-center py-3 px-5 rounded-lg space-y-3 border-white border-2 backdrop-blur-2xl flex flex-col'>
        <h3 className=' text-2xl text-yellow-500 capitalize font-bold px-3'>Reach <span className=' text-teal-500'>& Get in Touch With Us!</span></h3>
        <p className=' text-sm text-gray-400'>We love hearing from you. Our friendly team is always here to chat</p>
        <form action="">

          <div className=' flex flex-col space-y-3'>
            <input type="text" placeholder='enter your name' className='w-full py-3 px-3 border-none outline-none text-sm capitalize rounded-full bg-white text-gray-400' />
            <input type="text" placeholder='enter email address' className='w-full py-3 border-none outline-none px-3 text-sm capitalize rounded-full bg-white text-gray-400' />
            <input type="text" placeholder='add your subject' className='w-full py-3 px-3 border-none outline-none text-sm capitalize rounded-full bg-white text-gray-400' />
            <textarea name="" id="" placeholder='messages' className=' w-full rounded-lg bg-white text-gray-400 capitalize text-sm py-3 px-3'></textarea>
            <div>
              <button className=' py-2 px-4 rounded-full bg-green-400 text-gray-500 text-sm capitalize'>send messages</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Pricing_Login