import React from 'react'

const Faqs_Login = () => {
  return (
    <section data-aos='zoom-in' data-aos-delay='600' className=' w-full md:w-96 mx-auto overflow-hidden justify-center py-3 px-5 rounded-lg space-y-3 border-white border-2 backdrop-blur-2xl flex flex-col'>
            <h3 className=' text-2xl text-yellow-500 capitalize font-bold px-3'>Reach <span className=' text-teal-500'>& Get in Touch With Us!</span></h3>
            <p className=' text-sm text-gray-400'>We love  from you. Our friendly team is always here to chat</p>
            <form action="">

                  <div className=' flex flex-col space-y-3'>
                        <input type="text" placeholder='enter your name' className='w-full py-3 px-3 border-none outline-none text-sm capitalize rounded-full bg-white text-gray-400'/>
                        <input type="text" placeholder='enter email address' className='w-full py-3 border-none outline-none px-3 text-sm capitalize rounded-full bg-white text-gray-400'/>
                        <input type="text" placeholder='add your subject' className='w-full py-3 px-3 border-none outline-none text-sm capitalize rounded-full bg-white text-gray-400'/>
                        <textarea name="" id="" placeholder='messages' className=' w-full rounded-lg bg-white text-gray-400 capitalize text-sm py-3 px-3'></textarea>
                        <div>
                              <button className=' py-2 px-4 rounded-full bg-green-400 text-gray-500 text-sm capitalize'>send messages</button>
                        </div>
                  </div>
            </form>
    </section>
  )
}

export default Faqs_Login