import React, { useState } from 'react'
import SD1 from '../../assets/AboutPage/service-01.jpg'
import SDS1 from '../../assets/Servicespage/gallery-01.jpg'
import SDS2 from '../../assets/Servicespage/gallery-02.jpg'
import SDS3 from '../../assets/Servicespage/gallery-03.jpg'
import SDS4 from '../../assets/Servicespage/gallery-04.jpg'
import SDS5 from '../../assets/Servicespage/gallery-05.jpg'
import SDS6 from '../../assets/Servicespage/gallery-06.jpg'
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io"
import { FaCheckCircle } from "react-icons/fa"

const guides = [
      { id: 1, title: 'Private Guide', desc: 'One-on-one personalized tours, often tailored to specific interests' },
      { id: 2, title: 'Group Tours', desc: 'Shared tours with multiple travelers, often more budget-friendly' },
      { id: 3, title: 'City Guides', desc: 'Local experts for urban exploration—museums, markets, monuments' },
      { id: 4, title: 'Cultural Guides', desc: 'Focus on traditions, festivals, cuisine, and heritage sites' },
      { id: 5, title: 'Tour Managers', desc: 'Oversee multi-day trips, handling logistics and group coordination' },
      { id: 6, title: 'Nature & Wildlife Guides', desc: 'Specialists in safaris, trekking, and eco-tourism areas like sanctuaries' },
]
const faqs = [
      { id: 1, question: '01 - How can I book a trip?', answer: "Booking a trip is simple! Browse our available tour packages, select your preferred destination and date, then click 'Book Now'. Fill in your personal details, choose any add-ons, and complete the payment. You will receive a confirmation email within 24 hours." },
      { id: 2, question: '02 - How can I cancel my booking?', answer: "You can cancel your booking by logging into your account and navigating to 'My Bookings'. Cancellations made 7 days before departure receive a full refund. Cancellations within 3–7 days receive a 50% refund. No refund is available within 48 hours of departure." },
      { id: 3, question: '03 - Do you offer international travel packages?', answer: "Yes! We offer a wide range of international travel packages covering destinations across Asia, Europe, the Middle East, and beyond. Each package includes accommodation, guided tours, and transportation." },
      { id: 4, question: '04 - Are there group discounts available?', answer: "Absolutely! We offer special group discounts for parties of 6 or more travelers. Groups of 6–10 receive a 10% discount, while groups of 11 or more enjoy up to 20% off the total package price." },
]
const travelData = [
      { id: 1, title: 'Hotel', desc: 'Free Wi-Fi, toiletries, heated floors, in-room slippers, cable TV, room service' },
      { id: 2, title: 'Restaurants', desc: 'Free water & side dishes, call buttons, Wi-Fi, mobile ordering' },
      { id: 3, title: 'Public Facilities', desc: 'Clean restrooms, free Wi-Fi (Seoul), tourist information centers, lockers' },
      { id: 4, title: 'Transportations', desc: 'High-speed KTX trains, T-money transportation cards, mobile apps' },
      { id: 5, title: 'Shopping Area', desc: 'Tax refund counters, delivery services, foreign language staff (in major stores)' },
]
const foodData = [
      { id: 1, title: 'Breakfast', desc: 'Full breakfast buffet — eggs, toast, fruits, and local specialties' },
      { id: 2, title: 'Friendly Café', desc: 'Free water & side dishes, call buttons, Wi-Fi, mobile ordering' },
      { id: 3, title: 'Delivery Apps', desc: 'Grab, Foodpanda, and local apps available for room delivery' },
      { id: 4, title: 'Veg / Nonveg', desc: 'High-speed KTX trains, T-money transportation cards, mobile apps' },
      { id: 5, title: 'Free Side Dishes', desc: 'Tax refund counters, delivery services, foreign language staff (in major stores)' },
]
const recentPosts = [
      { id: 1, day: '14', month: 'June', author: 'Aidan Butier', title: 'Resources for your first trip to overseas vocation.' },
      { id: 2, day: '20', month: 'June', author: 'Ricardo Bell', title: 'How to get acquainted with natives in a strange land' },
      { id: 3, day: '22', month: 'June', author: 'Martin Hicks', title: 'Step by step guide to planning your ideal holiday' },
]
const topDestinations = [
      { name: 'Phnom Penh', listings: '05' },
      { name: 'New York', listings: '07' },
      { name: 'China', listings: '08' },
      { name: 'Paris', listings: '09' },
      { name: 'Spain', listings: '02' },
]
const tags = ['Travel', 'Food', 'Adventure', 'Beach', 'Culture', 'Hiking', 'Wildlife', 'City Tour', 'Cruise', 'Nature']
const gallery = [SDS1, SDS2, SDS3, SDS4, SDS5, SDS6]

/* ── helpers ── */
const SectionLabel = ({ label }) => (
      <div className='flex items-center'>
            <div className='h-7 w-1 bg-yellow-500' />
            <div className='py-1 px-3 bg-teal-100'>
                  <h3 className='text-sm text-teal-700 capitalize'>{label}</h3>
            </div>
      </div>
)
const CheckItem = ({ text }) => (
      <div className='flex items-start gap-2'>
            <FaCheckCircle size={14} className='text-green-500 mt-0.5 flex-shrink-0' />
            <p className='text-xs text-gray-400 leading-relaxed'>{text}</p>
      </div>
)
const DataTable = ({ data, header, bg = '#fff', bc = '#c7ede8', tc = '#0f766e', hc = '#0f766e' }) => (
      <div className='w-full rounded-xl overflow-hidden' style={{ border: `1px solid ${bc}`, background: bg }}>
            {header && (
                  <div className='px-4 py-2' style={{ borderBottom: `1px solid ${bc}` }}>
                        <span style={{ fontSize: '12px', fontWeight: '700', color: hc }}>{header}</span>
                  </div>
            )}
            <table className='w-full border-collapse'>
                  <tbody>
                        {data.map((item, i) => (
                              <tr key={item.id} style={{ borderBottom: i !== data.length - 1 ? `1px solid ${bc}` : 'none' }}>
                                    <td style={{ color: tc, fontSize: '11.5px', fontWeight: '600', padding: '8px 12px', width: '28%', borderRight: `1px solid ${bc}`, verticalAlign: 'top', whiteSpace: 'nowrap' }}>
                                          {item.title}
                                    </td>
                                    <td style={{ color: '#4b7a73', fontSize: '11px', padding: '8px 12px', lineHeight: '1.5', verticalAlign: 'top' }}>
                                          {item.desc}
                                    </td>
                              </tr>
                        ))}
                  </tbody>
            </table>
      </div>
)

/* ══════════════════════════════════════════════════════ */
const ServicesDetails_Section = () => {
      const [openIndex, setOpenIndex] = useState(null)
      const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

      return (
            <>
                  <div
                        className='flex gap-6'
                        style={{ alignItems: 'flex-start' }}
                  >

                        {/* ══════ LEFT — scrolls with page ══════ */}
                        <div data-aos='fade-right' data-aos-delay='600' className='flex-[2] flex flex-col space-y-4 min-w-0'
                              style={{
                                    width: '300px',
                                    position: 'sticky',   /* ← sticky in flow */
                                    top: '80px',     /* ← below navbar   */
                                    overflowY: 'auto',
                                    scrollbarWidth: 'none',
                              }}>

                              <img src={SD1} alt="" className='w-full h-80 object-cover rounded-xl' />

                              <div className='bg-white rounded-xl border border-gray-100 shadow-sm py-5 px-5 flex flex-col space-y-6'>

                                    {/* intro */}
                                    <div className='flex flex-col space-y-2'>
                                          <h3 className='text-sm text-teal-700 font-bold capitalize'>
                                                tour guide who give you proper information about every destination
                                          </h3>
                                          <p className='text-xs text-gray-400 leading-relaxed'>
                                                A tour guide services provides travelers with knowledgeable professionals who lead
                                                and enhance travel experiences. Tour guides offer insights into the history, culture,
                                                and significance of the places they visit, enriching the tourist's understanding.
                                                They manage itineraries, transportation, and access to attractions, ensuring a smooth
                                                and organized tour.
                                          </p>
                                    </div>

                                    {/* what's a tour guide */}
                                    <div className='flex flex-col space-y-2'>
                                          <h5 className='text-xs text-teal-700 capitalize font-bold'>what's a tour guide services?</h5>
                                          <div className='flex flex-col space-y-2'>
                                                <CheckItem text="Explaining historical, cultural, and natural significance of places." />
                                                <CheckItem text="Assisting with logistics like hotel check-ins, local transport, and dining." />
                                                <CheckItem text="Offering safety tips and local etiquette guidance." />
                                                <CheckItem text="Customizing itineraries based on traveler interests." />
                                          </div>
                                    </div>

                                    {/* types table */}
                                    <div className='flex flex-col space-y-2'>
                                          <h3 className='text-xs text-teal-700 capitalize font-bold'>types of tour guide services</h3>
                                          <DataTable data={guides} />
                                    </div>

                                    {/* key features */}
                                    <div className='flex flex-col space-y-2'>
                                          <h5 className='text-xs text-teal-700 capitalize font-bold'>key features of professional tour guides</h5>
                                          <div className='flex flex-col space-y-2'>
                                                <CheckItem text="Certified by the government of USA: licensed, underwent rigorous training and exams." />
                                                <CheckItem text="Multilingual: Many guides speak English, Spanish, French, and regional languages." />
                                                <CheckItem text="Local expertise: Deep knowledge of history, culture, and hidden gems." />
                                                <CheckItem text="Flexible engagement: You can choose full-time guidance or occasional support." />
                                                <CheckItem text="Safety & support: Guides help navigate unfamiliar areas and handle emergencies." />
                                          </div>
                                    </div>

                                    {/* faq */}
                                    <div className='flex flex-col space-y-2'>
                                          <h5 className='text-xs text-teal-700 capitalize font-bold'>frequently asked questions</h5>
                                          <div className='rounded-lg border border-emerald-200 overflow-hidden'>
                                                {faqs.map((item, index) => (
                                                      <div key={item.id} className='border-b border-gray-100 last:border-b-0'>
                                                            <button
                                                                  onClick={() => toggle(index)}
                                                                  className='w-full flex items-center justify-between px-3 py-3 text-xs text-teal-700 text-start font-medium capitalize  hover:bg-teal-50 transition-colors duration-200'
                                                            >
                                                                  <span>{item.question}</span>
                                                                  {openIndex === index
                                                                        ? <IoIosArrowDown size={14} className='flex-shrink-0 ml-2' />
                                                                        : <IoIosArrowForward size={14} className='flex-shrink-0 ml-2' />
                                                                  }
                                                            </button>
                                                            {openIndex === index && (
                                                                  <div className='px-3 pb-3 text-xs text-gray-400 leading-relaxed'>
                                                                        {item.answer}
                                                                  </div>
                                                            )}
                                                      </div>
                                                ))}
                                          </div>
                                    </div>

                                    {/* amenities */}
                                    <div className='flex flex-col space-y-2'>
                                          <h5 className='text-xs text-teal-700 capitalize font-bold'>our scheduled amenities</h5>
                                          <div className='flex flex-col space-y-3'>
                                                <DataTable data={travelData} header='For Travel' bg='#faf7f0' bc='#e8e0cc' tc='#8b6914' hc='#5c4a1e' />
                                                <DataTable data={foodData} header='For Food' bg='#faf7f0' bc='#e8e0cc' tc='#8b6914' hc='#5c4a1e' />
                                          </div>
                                    </div>

                              </div>
                        </div>

                        {/* ══════ RIGHT — sticky (fixed while left scrolls) ══════ */}
                        <div data-aos='fade-left' data-aos-delay='600'
                              className='hidden md:flex flex-col space-y-5 flex-shrink-0'
                              style={{
                                    width: '300px',
                                    position: 'sticky',   /* ← sticky in flow */
                                    top: '80px',     /* ← below navbar   */
                                    overflowY: 'auto',
                                    scrollbarWidth: 'none',
                              }}
                        >

                              {/* recent posts */}
                              <div className='flex flex-col space-y-3'>
                                    <SectionLabel label='recent posts' />
                                    <div className='bg-white rounded-xl border border-gray-100 shadow-sm py-4 px-4 flex flex-col gap-3'>
                                          {recentPosts.map((post, i) => (
                                                <div key={post.id}>
                                                      <div className='flex items-start gap-3'>
                                                            <div className='flex flex-col bg-teal-900 py-1.5 px-3 rounded-lg text-center flex-shrink-0'>
                                                                  <span className='text-xs text-white font-bold'>{post.day}</span>
                                                                  <span className='text-xs text-white font-bold capitalize'>{post.month}</span>
                                                            </div>
                                                            <div>
                                                                  <h3 className='text-xs text-yellow-500 capitalize font-bold'>{post.author}</h3>
                                                                  <p className='text-teal-700 text-xs leading-snug mt-0.5'>{post.title}</p>
                                                            </div>
                                                      </div>
                                                      {i !== recentPosts.length - 1 && (
                                                            <div className='border-b border-dashed border-teal-100 mt-3' />
                                                      )}
                                                </div>
                                          ))}
                                    </div>
                              </div>

                              {/* top destinations */}
                              <div className='flex flex-col space-y-3'>
                                    <SectionLabel label='top destinations' />
                                    <div className='bg-white rounded-xl border border-gray-100 shadow-sm py-3 px-4 flex flex-col'>
                                          {topDestinations.map((dest, i) => (
                                                <div
                                                      key={dest.name}
                                                      className='flex items-center justify-between py-2'
                                                      style={{ borderBottom: i !== topDestinations.length - 1 ? '1px solid #f0faf8' : 'none' }}
                                                >
                                                      <h5 className='text-teal-600 capitalize text-xs font-medium'>{dest.name}</h5>
                                                      <p className='text-gray-400 text-xs'>({dest.listings} listings)</p>
                                                </div>
                                          ))}
                                    </div>
                              </div>

                              {/* popular tags */}
                              <div className='flex flex-col space-y-3'>
                                    <SectionLabel label='popular tags' />
                                    <div className='bg-white rounded-xl border border-gray-100 shadow-sm py-4 px-4'>
                                          <div className='flex flex-wrap gap-2'>
                                                {tags.map((tag) => (
                                                      <span
                                                            key={tag}
                                                            className='py-1 px-3 rounded-full bg-teal-50 text-teal-800 text-xs capitalize cursor-pointer hover:bg-teal-200 transition-colors duration-200'
                                                      >
                                                            {tag}
                                                      </span>
                                                ))}
                                          </div>
                                    </div>
                              </div>

                              {/* gallery */}
                              <div className='flex flex-col space-y-3'>
                                    <SectionLabel label='gallery' />
                                    <div className='bg-white rounded-xl border border-gray-100 shadow-sm py-4 px-4'>
                                          <div className='grid grid-cols-2 gap-2'>
                                                {gallery.map((img, i) => (
                                                      <img
                                                            key={i}
                                                            src={img}
                                                            alt=""
                                                            className='w-full h-20 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300'
                                                      />
                                                ))}
                                          </div>
                                    </div>
                              </div>

                        </div>
                  </div>
            </>
      )
}

export default ServicesDetails_Section