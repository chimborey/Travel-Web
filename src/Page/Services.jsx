import Services_Section from "../Components/Servicess/Services_Section";
import Services_Hero from "../Components/Servicess/Services_Hero";
import Services_Testimonial from "../Components/Servicess/Services_Testimonial";



export default function Services() {
      return (
            <>
                  {/* Services_Hero Section */}
                  <Services_Hero />
                  {/* Services_Section Section */}
                  <section className=" w-full overflow-hidden py-14 bg-teal-800">
                        <main className=" mt-12 container">
                              <Services_Section />
                        </main>
                  </section>
                  {/* Services_Testimonial Section */}
                  <section className="w-full overflow-hidden py-14 bg-teal-100">
                        <main className=' mt-12 container'>
                              <Services_Testimonial />
                        </main>
                  </section>
            </>
      )
}