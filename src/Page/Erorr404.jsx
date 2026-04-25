import Erorr_Hero from "../Components/Erorr/Erorr_Hero";
import Erorr_Section from "../Components/Erorr/Erorr_Section";
import ESBg from '../assets/ErrorPage/error-bg-cloud.png'


export default function Erorr404() {
      return (
            <>
                  {/* Erorr_Hero Section */}
                  <Erorr_Hero />
                  {/*  */}
                  <section className=" w-full overflow-hidden md:h-[100vh] py-14 bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${ESBg})`}}>
                        <main className=" mt-12 container">
                              <Erorr_Section />
                        </main>
                  </section>
            </>
      )
}