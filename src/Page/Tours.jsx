import Tours_Hero from "../Components/Tours/Tours_Hero";
import Tours_Section from "../Components/Tours/Tours_Section";



export default function Tours() {
      return (
            <>
                  {/* Tours_Hero Section */}
                  <Tours_Hero />
                  {/* Tours_Section Section */}
                  <section className="w-full overflow-hidden py-14">
                        <main className=' mt-12 container'>
                              <Tours_Section />
                        </main>
                  </section>
            </>
      )
}