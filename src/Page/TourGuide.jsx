import TourGuide_Hero from "../Components/TourGuide/TourGuide_Hero";
import TourGuide_Section from "../Components/TourGuide/TourGuide_Section";

export default function TourGuide(){
      return(
            <>
            {/* TourGuide_Hero Section */}
            <TourGuide_Hero />
            {/* TourGuide_Section Section */}
            <section className=" w-full overflow-hidden py-14">
                  <main className=" container mt-12">
                        <TourGuide_Section />
                  </main>
            </section>
            </>
      )
}