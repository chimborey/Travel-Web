import Destinations_Hero from "../Components/Destinations/Destinations_Hero";
import Destinations_Popular from "../Components/Destinations/Destinations_Popular";

import Bg from '../assets/AboutPage/Cloud-bg.png'

export default function Destinations() {
      return (
            <>
                  {/* Destinations_Hero Section */}
                  <Destinations_Hero />
                  {/* Destinations_Popular */}
                  <section className=' w-full overflow-hidden relative py-14 md:h-[100vh] bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${Bg})` }}>
                        <div className=' absolute inset-0 bg-green-100/5' />
                        <main className=' container mt-12 relative z-10'>
                              <Destinations_Popular />
                        </main>
                  </section>
            </>
      )
}