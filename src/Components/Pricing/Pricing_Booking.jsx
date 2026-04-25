import React from 'react'
import PBL1 from '../../assets/PricingPage/bag.png'
import PBR1 from '../../assets/PricingPage/tent.png'
import PBC from '../../assets/PricingPage/choose-destination.png'
import PBM from '../../assets/PricingPage/make-payment-1.png'
import PBR from '../../assets/PricingPage/ready-for-travelling.png'

const Pricing_Booking = () => {

      const steps = [
            {
                  id: 1,
                  title: "Choose Destination",
                  desc: "All you have to do is, first select your preferred destination and proceed",
                  img: PBC,
                  number: "01",
                  bg: "from-teal-400 to-teal-600"
            },
            {
                  id: 2,
                  title: "Make Payment",
                  desc: "We pay attention to the quality of every service we provide to you",
                  img: PBM,
                  number: "02",
                  bg: "from-pink-400 to-pink-600"
            },
            {
                  id: 3,
                  title: "Ready For Travelling",
                  desc: "You have fulfilled all requirements, now you are ready to travel",
                  img: PBR,
                  number: "03",
                  bg: "from-green-500 to-green-700"
            }
      ]

      return (
            <section className='relative py-10 px-4 md:px-10'>

                  {/* floating images */}
                  <img src={PBL1} alt="" className='hidden md:block absolute -left-12 bottom-0 w-32' />
                  <img src={PBR1} alt="" className='hidden md:block absolute -right-12 bottom-0 w-40' />

                  {/* header */}
                  <div className='flex flex-col md:flex-row justify-between items-center mb-10'>
                        <div className='space-y-3' data-aos='zoom-in' data-aos-delay='300'>
                              <h3 className='text-3xl font-bold text-teal-900'>
                                    Easy Step <span className='text-yellow-500'>For Booking</span>
                              </h3>
                              <p className='text-teal-600 text-sm max-w-md'>
                                    Maybe for a travel blog, wildlife site, or web development project,
                                    here are a few sample templates you can use.
                              </p>
                        </div>

                        <button data-aos='zoom-in' data-aos-delay='600' className='mt-4 md:mt-0 py-2 px-5 rounded-full bg-green-200 hover:bg-green-300 text-sm'>
                              View More
                        </button>
                  </div>

                  {/* cards */}
                  <div className='grid grid-cols-1 md:grid-cols-3 gap-6' data-aos='zoom-in' data-aos-delay='900'>

                        {steps.map((step) => (
                              <div
                                    key={step.id}
                                    className={`relative rounded-2xl p-6 text-white bg-gradient-to-br ${step.bg} shadow-lg overflow-hidden`}
                              >
                                    {/* top icon */}
                                    <div className='w-14 h-14 bg-white rounded-full flex mx-auto rounded_Book items-center justify-center mb-4'>
                                          <img src={step.img} alt="" className='w-8 h-8' />
                                    </div>

                                    {/* title */}
                                    <h4 className='text-lg font-semibold mb-2'>
                                          {step.title}
                                    </h4>

                                    {/* description */}
                                    <p className='text-sm opacity-90'>
                                          {step.desc}
                                    </p>

                                    {/* number */}
                                    <span className='absolute bottom-4 right-6 text-5xl font-bold opacity-20'>
                                          {step.number}
                                    </span>
                              </div>
                        ))}

                  </div>
            </section>
      )
}

export default Pricing_Booking