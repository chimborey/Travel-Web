import React, { useState } from 'react'
import FS1 from '../../assets/faq-media.png'
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
const Faqs_Section = () => {
      const faqData = [
            {
                  id: 1,
                  question: '1 - How do i book a tour package?',
                  answer: 'You can book a tour package directly through our website by selecting your desired destination, choosing your travel dates, and completing the checkout process. You can also contact our support team for assistance.'
            },
            {
                  id: 2,
                  question: '2 - Can i costomize my travel itinerary?',
                  answer: 'Yes, we offer flexible and customizable travel itineraries. You can modify destinations, duration, hotels, and activities based on your preferences.'
            },
            {
                  id: 3,
                  question: '3 - What payment methods do you accept?',
                  answer: 'We accept multiple payment methods including credit/debit cards, bank transfers, and popular online payment gateways.'
            },
            {
                  id: 4,
                  question: '4 - Will i recive confimation after booking?',
                  answer: 'Yes, once your booking is completed, you will receive a confirmation email with all the details of your trip.'
            },
            {
                  id: 5,
                  question: '5 - Are flights included in the package?',
                  answer: 'Flight inclusion depends on the selected package. Some packages include flights, while others only cover accommodation and tours.'
            },
            {
                  id: 6,
                  question: '6 - Can i cancel or reschedule my booking?',
                  answer: 'Yes, you can cancel or reschedule your booking depending on our cancellation policy. Fees may apply based on the timing of the request.'
            },
            {
                  id: 7,
                  question: '7 - Is travel insurance included?',
                  answer: 'Travel insurance is not always included by default, but you can add it as an optional service during booking.'
            },
            {
                  id: 8,
                  question: '8 - Do you provide visaassistance?',
                  answer: 'Yes, we provide visa assistance services including guidance on required documents and application procedures.'
            }
      ];
      const [openIndex, setOpenIndex] = useState(false)
      const toggleIndex = (index) => {
            setOpenIndex(openIndex === index ? null : index)
      }
      return (
            <section className=' grid grid-cols-1 md:grid-cols-2 gap-6'>
                  {/* left */}
                  <div data-aos='fade-right' data-aos-delay='300' className=' flex flex-col space-y-3'>
                        <h3 className=' text-3xl text-teal-700 font-bold capitalize'>find <span className=' text-yellow-500'>answer</span> for questions you have.</h3>
                        <p className=' text-gray-300 text-sm'>travel is a multi-award-winning strategy and content creation agency that specializes in travels marketing.</p>
                        <img src={FS1} alt="" className=' w-full h-96 rounded-lg' />
                  </div>
                  {/* rihgt */}
                  <div className=' space-y-3' data-aos='fade-left' data-aos-delay='600'>
                        {
                              faqData.map((fd, index) => (
                                    <div key={fd.id} className=' bg-white cursor-pointer rounded-lg border-b relative py-3 px-3 flex flex-col items-start justify-start'>
                                          <button onClick={() => toggleIndex(index)} className=' text-sm text-teal-700 font-bold'>{fd.question}
                                                <span className=' absolute top-2 right-3'>
                                                      {
                                                            openIndex === index ?
                                                                  <IoIosArrowDown size={18} />
                                                                  :
                                                                  <IoIosArrowForward size={18} />
                                                      }
                                                </span>
                                          </button>
                                          {openIndex === index && (<div className=' text-xs text-gray-300'>{fd.answer}</div>)}
                                    </div>
                              ))
                        }
                  </div>
            </section>
      )
}

export default Faqs_Section