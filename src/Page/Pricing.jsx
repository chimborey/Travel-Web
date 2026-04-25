import Pricing_Booking from "../Components/Pricing/Pricing_Booking";
import Pricing_Hero from "../Components/Pricing/Pricing_Hero";
import Pricing_Login from "../Components/Pricing/Pricing_Login";
import Pricing_Section from "../Components/Pricing/Pricing_Section";
import PSBg1 from '../assets/PricingPage/pricebg.png'


export default function Pricing() {
      return (
            <>
                  {/* Pricing_Hero */}
                  <Pricing_Hero />
                  <section className=" w-full overflow-hidden md:h-[100vh] py-14 bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${PSBg1})`}}>
                        <main className=" mt-12 container">
                              <Pricing_Section />
                        </main>
                  </section>
                  {/* Pricing_Booking Section */}
                  <section className=" w-full overflow-hidden py-14">
                        <main className=" mt-12 container">
                              <Pricing_Booking />
                        </main>
                  </section>
                  {/* Pricing_Login Section */}
                  <section className=" w-full overflow-hidden py-14 bg-yellow-50">
                        <main className=" mt-12 container">
                              <Pricing_Login />
                        </main>
                  </section>
            </>
      )
}