import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import TC1 from '../../assets/Index/TourCategory/Tour-Categories-01.jpg'
import TC2 from '../../assets/Index/TourCategory/Tour-Categories-02.jpg'
import TC3 from '../../assets/Index/TourCategory/Tour-Categories-03.jpg'
import TC4 from '../../assets/Index/TourCategory/Tour-Categories-04.jpg'
import TC5 from '../../assets/Index/TourCategory/Tour-Categories-05.jpg'
import TC6 from '../../assets/Index/TourCategory/Tour-Categories-06.jpg'

const tours = [
      {
            title: "Wildlife",
            desc: "Observing animals in their natural habitats like tiger safaris in Ranthambore or birdwatching in Keoladeo Ghana Bird Sanctuary has become a popular and educational form of travel.",
            image: TC1,
      },
      {
            title: "Hiking",
            desc: "Here are the people who we believe most changed the stories that defined the past year.",
            image: TC2,
      },
      {
            title: "Adventure Tours",
            desc: "Prime Minister Anthony Albanese has plenty of reasons to ban social media for under-16s.",
            image: TC3,
      },
      {
            title: "Cultural Tours",
            desc: "The seven-time Formula One world champion moves to the iconic brand after more than a decade with Mercedes",
            image: TC4,
      },
      {
            title: "Cruise Tours",
            desc: "TIME solicited nominations of places including hotels, cruises, restaurants, attractions, museums, parks, and more from around the world.",
            image: TC5,
      },
      {
            title: "Dark Tourism",
            desc: "After inauguration day, it is on Trump and America to ensure that the oath to defend the U.S. Constitution is kept.",
            image: TC6,
      },
];

export default function TourCategories() {
      const [index, setIndex] = useState(0);

      const nextSlide = () => {
            setIndex((prev) => (prev + 1) % tours.length);
      };

      const prevSlide = () => {
            setIndex((prev) => (prev - 1 + tours.length) % tours.length);
      };

      return (
            <div className="w-full min-h-screen flex items-center justify-center" data-aos='fade-up' data-aos-delay='600'>
                  <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-10 px-6 items-center">

                        {/* LEFT CONTENT */}
                        <div>
                              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                                    {tours[index].title}
                              </h2>

                              <p className="text-gray-600 mb-6">
                                    {tours[index].desc}
                              </p>

                              <button className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition">
                                    View More
                              </button>
                        </div>

                        {/* RIGHT SIDE */}
                        <div>

                              {/* SLIDER */}
                              <div className="relative flex items-center justify-center">
                                    <div className="relative w-[300px] h-[380px]">

                                          {tours.map((tour, i) => {
                                                let position = "hidden";

                                                if (i === index) {
                                                      position = "translate-x-0 scale-100 z-30 opacity-100";
                                                } else if (i === (index + 1) % tours.length) {
                                                      position = "translate-x-40 scale-90 rotate-6 z-20 opacity-70";
                                                } else if (i === (index - 1 + tours.length) % tours.length) {
                                                      position = "-translate-x-40 scale-90 -rotate-6 z-20 opacity-70";
                                                }

                                                return (
                                                      <div
                                                            key={i}
                                                            onClick={() => setIndex(i)}
                                                            className={`absolute w-full h-full bg-white rounded-2xl shadow-xl cursor-pointer transition-all duration-700 ${position}`}
                                                      >
                                                            <img
                                                                  src={tour.image}
                                                                  className="w-full h-[75%] object-cover rounded-t-2xl"
                                                            />
                                                            <div className="text-center py-3 font-semibold">
                                                                  {tour.title}
                                                            </div>
                                                      </div>
                                                );
                                          })}
                                    </div>

                                    {/* LEFT BUTTON */}
                                    <button
                                          onClick={prevSlide}
                                          className="absolute z-30 md:left-[-10px]  left-[-30px] top-1/2 -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 p-3 rounded-full shadow"
                                    >
                                          <FaChevronLeft />
                                    </button>

                                    {/* RIGHT BUTTON */}
                                    <button
                                          onClick={nextSlide}
                                          className="absolute z-30 right-[-30px] md:right-[-10px] top-1/2 -translate-y-1/2 bg-yellow-500 hover:bg-yellow-500 p-3 rounded-full shadow"
                                    >
                                          <FaChevronRight />
                                    </button>
                              </div>

                              {/* 🔥 BOTTOM TEXT */}
                              <div className="mt-10 text-center md:text-right">
                                    <p className="italic text-gray-500 text-lg">
                                          Wonderful Place For You
                                    </p>

                                    <h1 className="text-3xl md:text-4xl font-bold text-yellow-500">
                                          TOUR CATEGORIES
                                    </h1>
                              </div>

                        </div>
                  </div>
            </div>
      );
}