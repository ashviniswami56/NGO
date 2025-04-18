"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSlider = () => {
  const quote = "Service to others is the rent you pay for your room here on Earth";

  const sliderImages = useMemo(() => [
    "/images/hero1.jpg", "/images/hero2.jpg", "/images/hero3.jpg", "/images/hero4.jpg"
  ], []);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 3000);

    return () => clearInterval(sliderInterval);
  }, [sliderImages.length]);

  return (
    <div
      id="hero"
      className="relative w-full overflow-x-hidden min-h-screen bg-gray-900 bg-opacity-90 transition-all duration-1000"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-200 bg-opacity-40 z-10" />

      <div className="relative z-20 h-full mt-25 flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-8 md:gap-8 gap-4 max-w-screen overflow-hidden">
        {/* Left Section */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col items-start justify-center space-y-6 text-white"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Logo */}
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }}>
            <Image
              src="/images/mission.jpg"
              alt="Logo"
              width={80}
              height={80}
              className="rounded-full border-4 border-orange-400 shadow-lg"
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-500 drop-shadow-lg"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            We Rise by Lifting Others
            <span className="block w-16 h-1 bg-orange-400 mt-2 rounded-full" />
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-black font-medium italic bg-white bg-opacity-60 px-4 py-2 rounded shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Helping hands for a better world 🌍
          </motion.p>

          {/* Quote */}
          <motion.p
            className="text-base sm:text-lg md:text-xl font-semibold italic text-white bg-gradient-to-r from-orange-400 to-pink-500 bg-opacity-90 px-4 py-3 rounded-lg shadow-md border border-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            “{quote}”
          </motion.p>

          {/* Mini Gallery */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Image
              src="/images/hero4.jpg"
              alt="Support Image 1"
              width={100}
              height={100}
              className="rounded-xl shadow-xl border-4 border-white w-24 sm:w-28 md:w-32 h-auto"
            />
            <Image
              src="/images/hero5.jpg"
              alt="Support Image 2"
              width={100}
              height={100}
              className="rounded-xl shadow-xl border-4 border-white w-24 sm:w-28 md:w-32 h-auto"
            />
          </motion.div>

          {/* CTA Button */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
            <Link href="/join-ngo">
              <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300 font-bold text-base sm:text-lg">
                Join Our NGO ❤️
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Section - Image Slider */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full max-w-md h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] rounded-xl overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src={sliderImages[currentSlide]}
              alt="Slider"
              width={700}
              height={450}
              quality={100}
              className="w-full h-full object-cover max-w-full transition-opacity duration-1000 ease-in-out"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSlider;
