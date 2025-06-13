"use client";
import { useState, useRef, useEffect } from "react";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import Link from "next/link";

const slides = [
  "https://wallpapers.com/images/hd/college-background-livv32ma9zxjii0i.jpg",
  "https://wallpaperbat.com/img/1698590-4k-oxford-university-wallpaper-and-background-image.jpg",
  "https://wallpaperaccess.com/full/1209573.jpg",
];

export default function HomeHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    if (touchStartX.current - touchEndX.current > 50) nextSlide(); // swipe left
    if (touchEndX.current - touchStartX.current > 50) prevSlide(); // swipe right
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // auto-slide
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[300px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
      <div
        className="relative w-full h-full"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 flex flex-col justify-center items-center text-center px-4 text-white">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
            Empower Your Future with United Group of Education
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold shadow-md transition-all duration-300">
                Get Free Counseling
              </button>
            </Link>
            <Link href="/courses">
              <button className="bg-white hover:bg-blue-100 text-blue-900 px-8 py-3 rounded-xl font-semibold shadow-md transition-all duration-300">
                Explore Courses
              </button>
            </Link>
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black/40 hover:bg-black p-2 rounded-full shadow-md z-10"
        >
          <ArrowBackIosNew fontSize="small" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black/40 hover:bg-black p-2 rounded-full shadow-md z-10"
        >
          <ArrowForwardIos fontSize="small" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentIndex ? "bg-white" : "bg-white/40"
              }`}
              onClick={() => setCurrentIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
