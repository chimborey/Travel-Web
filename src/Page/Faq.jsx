import Faqs_Hero from "../Components/Faqs/Faqs_Hero";
import Faqs_Login from "../Components/Faqs/Faqs_Login";
import Faqs_Section from "../Components/Faqs/Faqs_Section";
import FLBg1 from '../assets/con-sec-bg.jpg'


export default function Faq() {
      return (
            <>
                  {/* Faqs_Hero Section */}
                  <Faqs_Hero />
                  {/* Faqs_Section */}
                  <section className=' w-full overflow-hidden py-14 bg-teal-50'>
                        <main className=' container mt-12'>
                              <Faqs_Section />
                        </main>
                  </section>
                  {/* Faqs_Login Section */}
                  <section className="w-full py-14 overflow-hidden h-[100vh] bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${FLBg1})`}}>
                        <main className=" mt-12 container">
                              <Faqs_Login />
                        </main>
                  </section>
            </>
      )
}