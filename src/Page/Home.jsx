

import H1 from '../assets/Index/Hero/slider-bg.jpg'
import About from '../Components/Homes/About'
import Booking from '../Components/Homes/Booking'
import Hero from '../Components/Homes/Hero'
import TopDestination from '../Components/Homes/TopDestination'
import TourCategoriesUs from '../Components/Homes/TourCategoriesUs'
import TourGuideUs from '../Components/Homes/TourGuideUs'
import TBg from '../assets/Index/TourCategory/tour-bg.jpg'
import Testimonial_Section from '../Components/Homes/Testimonial_Section'
import Counter_Section from '../Components/Homes/Counter_Section'
import Popular_Section from '../Components/Homes/Popular_Section'
import LatestNews_Section from '../Components/Homes/LatestNews_Section'
import IB1 from '../assets/Index/Blogs/patern.png'
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full h-[100vh] bg-cover bg-center bg-no-repeat py-14 overflow-hidden" style={{ backgroundImage: `url(${H1})` }}>
        <main className=' mt-12 container'>
          <Hero />
        </main>
      </section>
      {/* About Section */}
      <section className="w-full overflow-hidden py-14 bg-amber-50">
        <main className=' mt-12 container'>
          <About />
        </main>
      </section>
      {/* Booking Section */}
      <section className="w-full overflow-hidden py-14">
        <main className=' mt-12 container'>
          <Booking />
        </main>
      </section>
      {/* TopDestination Section */}
      <section className="w-full overflow-hidden py-14 bg-green-100">
        <main className=' mt-12 container bg-teal-700 overflow-hidden py-3 px-3 rounded-lg' data-aos='zoom-in' data-aos-delay='300'>
          <TopDestination />
        </main>
      </section>
      {/* TourGuideUs Section */}
      <section className="w-full overflow-hidden py-14">
        <main className=' mt-12 container'>
          <TourGuideUs />
        </main>
      </section>
      {/* TourCategoriesUs Section */}
      <section className="w-full h-[100vh] overflow-hidden py-14 bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${TBg})` }}>
        <main className=' mt-12 container'>
          <TourCategoriesUs />
        </main>
      </section>
      {/* Testimonial_Section Section */}
      <section className="w-full overflow-hidden py-14 bg-teal-100">
        <main className=' mt-12 container'>
          <Testimonial_Section />
        </main>
      </section>
      {/* Counter_Section Section */}
      <section className="w-full overflow-hidden py-14 bg-teal-700">
        <main className=' mt-12 container'>
          <Counter_Section />
        </main>
      </section>
      {/* Popular_Section Section */}
      <section className="w-full overflow-hidden py-14">
        <main className=' mt-12 container'>
          <Popular_Section />
        </main>
      </section>
      {/* LatestNews_Section Section */}
      <section className="w-full overflow-hidden relative md:h-[100vh] z-40 py-14 bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${IB1})` }}>
        <div className='absolute inset-0 z-0 bg-teal-900/70' />
        <main className=' mt-12 container relative z-10'>
          <LatestNews_Section />
        </main>
      </section>
    </>
  )
}