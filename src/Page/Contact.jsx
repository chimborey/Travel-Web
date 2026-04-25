import Contact_Hero from "../Components/Contact/Contact_Hero";
import Contact_Section from "../Components/Contact/Contact_Section";



export default function Contact() {
      return (
            <>
                  {/* Contact_Hero Section */}
                  <Contact_Hero />
                  {/* Contact_Section Section */}
                  <section className=" w-full overflow-hidden py-14 bg-teal-50">
                        <main className=" mt-12 container">
                              <Contact_Section />
                        </main>
                  </section>
            </>
      )
}