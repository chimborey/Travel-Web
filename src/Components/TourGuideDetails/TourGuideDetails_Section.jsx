import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import TGS1 from '../../assets/TourGuidePage/pic1.jpg'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
const TourGuideDetails_Section = () => {
      return (
            <section className=' flex flex-col md:flex-row gap-3 bg-white w-full overflow-hidden py-3 px-3 rounded-lg' data-aos='zoom-in' data-aos-delay='300'>
                  {/* flex-1 */}
                  <div data-aos='fade-right' data-aos-delay='600' className=' flex-1 w-full overflow-hidden flex-col bg-white shadow-2xl backdrop-blur-3xl shadow-gray-200 rounded-lg py-2 px-2'>
                        <img src={TGS1} alt="" className='w-full h96 rounded-lg' />
                        <div className=' flex flex-col space-y-3'>
                              <div className=' flex mx-auto mt-3 items-center gap-3'>
                                    <FaFacebook className=' w-7 h-7 rounded-full bg-teal-600 border-yellow-500 border-2 text-white' />
                                    <FaInstagram className=' w-7 h-7 rounded-full bg-teal-600 border-yellow-500 border-2 text-white' />
                                    <FaYoutube className=' w-7 h-7 rounded-full bg-teal-600 border-yellow-500 border-2 text-white' />
                                    <BsTwitterX className=' w-7 h-7 rounded-full bg-teal-600 border-yellow-500 border-2 text-white' />
                              </div>
                              <h3 className=' text-teal-500 font text-center text-xl capitalize'>murply</h3>
                              <span className=' text-sm text-yellow-500 capitalize text-center'>tourist guide</span>
                              <p className=' text-xs text-teal-400'>i am a professional who enhances travel experiences by leading individuals pr groups through destinations, providing insightful commentary, logistical support, and cultural interpretation. Here's a complete overview.</p>
                        </div>
                  </div>
                  {/* flex-[2] */}
                  <div data-aos='fade-left' data-aos-delay='900' className=' flex-[2] flex-col space-y-3'>
                        <h3 className=' text-teal-700 text-md capitalize font-bold'>about</h3>
                        <p className=' text-xs text-teal-400'>i am a professional who enhances travel experiences by leading individuals pr groups through destinations, providing insightful commentary, logistical support, and cultural interpretation. Here's a complete overview.</p>

                        <div className=' flex items-center space-y-3 gap-9'>
                              <div className=' flex flex-col gap-3'>
                                    <div className=' flex items-center gap-14'>
                                          <span className=' text-sm text-teal-500 capitalize font-bold'>age:</span>
                                          <span className=' text-xs text-teal-500 capitalize'>35</span>
                                    </div>
                                    <div className=' flex items-center gap-5'>
                                          <span className=' text-sm text-teal-500 capitalize font-bold'>education:</span>
                                          <span className=' text-xs text-teal-500 capitalize'>bsc of computer sciencce</span>
                                    </div>
                                    <div className=' flex items-center gap-5'>
                                          <span className=' text-sm text-teal-500 capitalize font-bold'>job title:</span>
                                          <span className=' text-xs text-teal-500 capitalize'>tour guide</span>
                                    </div>
                                    <div className=' flex items-center gap-8'>
                                          <span className=' text-sm text-teal-500 capitalize font-bold'>location:</span>
                                          <span className=' text-xs text-teal-500 capitalize'>new york USA</span>
                                    </div>
                                    <div className=' flex items-center gap-2'>
                                          <span className=' text-sm text-teal-500 capitalize font-bold'>experiences:</span>
                                          <span className=' text-xs text-teal-500 capitalize'>5 years</span>
                                    </div>
                                    <div className=' flex items-center gap-8'>
                                          <span className=' text-sm text-teal-500 capitalize font-bold'>contact:</span>
                                          <span className=' text-xs text-teal-500 capitalize'>+91 123 456 7890</span>
                                    </div>
                                    <div className=' flex items-center gap-12'>
                                          <span className=' text-sm text-teal-500 capitalize font-bold'>email:</span>
                                          <span className=' text-xs text-teal-500 capitalize'>murphy@gmail.com</span>
                                    </div>
                              </div>
                        </div>

                        <div className=' flex flex-col space-y-3'>
                              <h3 className=' text-teal-700 text-md capitalize font-bold'>essential skills</h3>
                              <div className=' flex flex-col space-y-3'>
                                    <div className=' flex items-center gap-3'>
                                          <IoIosArrowRoundForward className=' w-4 h-4 rounded-full border-orange-500 border text-orange-500' />
                                          <span className=' text-xs text-gray-400 capitalize'>communication & storytelling</span>
                                    </div>
                                    <div className=' flex items-center gap-3'>
                                          <IoIosArrowRoundForward className=' w-4 h-4 rounded-full border-orange-500 border text-orange-500' />
                                          <span className=' text-xs text-gray-400 capitalize'>leader ship & group management</span>
                                    </div>
                                    <div className=' flex items-center gap-3'>
                                          <IoIosArrowRoundForward className=' w-4 h-4 rounded-full border-orange-500 border text-orange-500' />
                                          <span className=' text-xs text-gray-400 capitalize'>team coordination & logistics</span>
                                    </div>
                              </div>
                        </div>

                        <div className=' flex flex-col space-y-3'>
                              <h3 className=' text-teal-700 text-md capitalize font-bold'>certifications & training</h3>
                              <div className=' flex flex-col space-y-3'>
                                    <div className=' flex items-center gap-3'>
                                          <IoIosArrowRoundForward className=' w-4 h-4 rounded-full border-orange-500 border text-orange-500' />
                                          <h5 className=' text-xs text-teal-500 font-bold '>Indai:<span className=' text-gray-400 text-xs'>ministry of tourism offers licences via IITTM and regional programs.</span></h5>
                                    </div>
                                    <div className=' flex items-center gap-3'>
                                          <IoIosArrowRoundForward className=' w-4 h-4 rounded-full border-orange-500 border text-orange-500' />
                                          <h5 className=' text-xs text-teal-500 font-bold '>Global:<span className=' text-gray-400 text-xs'>WFTGA (World Federation of Tourist Guide Associations) sets inernational standards.</span></h5>
                                    </div>
                                    <div className=' flex items-center gap-3'>
                                          <IoIosArrowRoundForward className=' w-4 h-4 rounded-full border-orange-500 border text-orange-500' />
                                          <h5 className=' text-xs text-teal-500 font-bold '>Specialized:<span className=' text-gray-400 text-xs'>Adventure guiding, museum interpretation, eco-tourism, ect.</span></h5>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      )
}

export default TourGuideDetails_Section