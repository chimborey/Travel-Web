import TourGuideDetails_Section from "../Components/TourGuideDetails/TourGuideDetails_Section";
import TourGuideDetails_Hero from "../Components/TourGuideDetails/TourGuideDetails_Hero";

export default function TourGuideDetails(){
      return(
             <>
            {/* TourGuide_Hero Section */}
            <TourGuideDetails_Hero />
            {/* TourGuideDetails_Section Section */}
            <section className=" w-full overflow-hidden py-14 bg-teal-50">
                  <main className=" mt-12 container">
                        <TourGuideDetails_Section />
                  </main>
            </section>
            </>
      )
}