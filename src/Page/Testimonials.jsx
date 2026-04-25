import Testimonials_Hero from "../Components/Testimonials/Testimonials_Hero";
import Testimonials_Testimonials from "../Components/Testimonials/Testimonials_Testimonials";

export default function Testimonials() {
      return (
            <>
                  {/* Testimonials_Hero Section */}
                  <Testimonials_Hero />
                  {/*  */}
                  <section className=" w-full overflow-hidden py-14">
                        <main className=" mt-12 container">
                              <Testimonials_Testimonials />
                        </main>
                  </section>
            </>
      )
}