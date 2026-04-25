import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css'
// import Page
import Home from "./Page/Home";
import Header from "./Page/Header";
import Footer from "./Page/Footer";
import { useEffect } from "react";
import ScrollToUp from "./Page/ScrollToUp";
import About from "./Page/About";
import Services from "./Page/Services";
import ServicesDetail from "./Page/ServicesDetail";
import Testimonials from "./Page/Testimonials";
import TourGuide from "./Page/TourGuide";
import TourGuideDetails from "./Page/TourGuideDetails";
import Faq from "./Page/Faq";
import Pricing from "./Page/Pricing";
import Erorr404 from "./Page/Erorr404";
import Destinations from "./Page/Destinations";
import Blog from "./Page/Blog";
import Contact from "./Page/Contact";
import DestinationDetail from "./Page/DestinationsDetails";
import Tours from "./Page/Tours";

export default function App() {
  // aos
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: false,
    })
  }, [])
  return (
    <BrowserRouter>
      <Header />
      <ScrollToUp />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />}></Route>
        {/* about */}
        <Route path="/about" element={<About />}></Route>
        {/* page */}
        <Route path="/page/services" element={<Services />}></Route>
        <Route path="/page/services_Details" element={<ServicesDetail />}></Route>
        <Route path="/page/Testimonials" element={<Testimonials />}></Route>
        <Route path="/page/toursGuide/tours_Guide" element={<TourGuide />}></Route>
        <Route path="/page/toursGuide/toursGuide_Details" element={<TourGuideDetails />}></Route>
        <Route path="/page/faqs" element={<Faq />}></Route>
        <Route path="/page/pricing" element={<Pricing />}></Route>
        <Route path="/page/404" element={<Erorr404 />}></Route>
        {/* Destinations */}
        <Route path="/destinations" element={<Destinations />}></Route>
        {/* Tours */}
        <Route path="/tours" element={<Tours />}></Route>

        {/* Blog */}
        <Route path="/blog" element={<Blog />}></Route>
        {/* Contact */}
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}