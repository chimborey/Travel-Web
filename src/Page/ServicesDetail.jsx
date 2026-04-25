import ServicesDetail_Hero from "../Components/ServicesDetails/ServicesDetail_Hero";
import ServicesDetails_Section from "../Components/ServicesDetails/ServicesDetails_Section";



export default  function ServicesDetail(){
      return(
            <>
            {/* ServicesDetail_Hero Sectoin */}
            <ServicesDetail_Hero />
            {/* ServicesDetails_Section */}
            <section className="w-full overflow-hidden bg-slate-50 py-14 ">
                  <main className=" mt-12 container">
                        <ServicesDetails_Section />
                  </main>
            </section>
            </>
      )
}
