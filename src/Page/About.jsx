import React from 'react'
import Hero_Section from '../Components/About/Hero_Section'
import About_Section from '../Components/About/About_Section'
import About_Popular from '../Components/About/About_Popular'
import Bg from '../assets/AboutPage/Cloud-bg.png'
import About_Services from '../Components/About/About_Services'
import About_Testimonial from '../Components/About/About_Testimonial'
const About = () => {
      return (
            <>
                  {/* Hero_Section */}
                  <Hero_Section />
                  {/* About_Section */}
                  <section className=' w-full overflow-hidden py-14 bg-yellow-50'>
                        <main className=' container mt-12'>
                              <About_Section />
                        </main>
                  </section>
                  {/* About_Popular */}
                  <section className=' w-full overflow-hidden relative py-14 h-[100vh] bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${Bg})` }}>
                        <div className=' absolute inset-0 bg-green-100/5' />
                        <main className=' container mt-12 relative z-10'>
                              <About_Popular />
                        </main>
                  </section>
                  {/* About_Blog */}
                  <section className=' w-full overflow-hidden py-14 bg-teal-800'>
                        <main className=' container mt-12'>
                              <About_Services />
                        </main>
                  </section>
                  {/* About_Testimonial Section */}
                  <section className="w-full overflow-hidden py-14 bg-teal-100">
                        <main className=' mt-12 container'>
                              <About_Testimonial />
                        </main>
                  </section>
            </>
      )
}
export default About