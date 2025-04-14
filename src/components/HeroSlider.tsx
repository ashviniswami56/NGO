"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSlider = () => {
  const quotes = [
    "Be the change you wish to see in the world.",
    "Small acts, when multiplied, can change the world.",
    "Service to others is the rent you pay for your room here on Earth.",
    "Together we can make a difference.",
    "Helping one person might not change the world, but it could change the world for one person.",
  ];

  const sliderImages = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg", "/hero4.jpg"];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 4000);

    const sliderInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 3000);

    return () => {
      clearInterval(quoteInterval);
      clearInterval(sliderInterval);
    };
  }, [quotes.length, sliderImages.length]);

  return (
    <div
      id="hero"
      className="relative w-full min-h-[100vh] md:h-[600px] bg-gray-900 bg-opacity-90 transition-all duration-1000"
    >
      <div className="absolute inset-0 bg-gray-200 bg-opacity-40 z-10" />

      <div className="relative z-20 h-full flex flex-col md:flex-row items-center justify-between px-10 py-6 gap-6">
        {/* Left Section */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col items-start justify-center space-y-6 text-white mx-[20px] px-2 py-2 mb-2"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Image
              src="/mission.jpg"
              alt="Logo"
              width={100}
              height={100}
              className="rounded-full"
            />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-bold text-orange-400 drop-shadow-lg"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            We rise by lifting others.
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-black font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Helping hands for a better world
          </motion.p>

          <motion.p
            className="text-lg md:text-xl font-semibold italic text-white bg-orange-400 bg-opacity-70 px-4 py-2 rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {quotes[currentQuoteIndex]}
          </motion.p>

          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Image
              src="/hero4.jpg"
              alt="Support Image 1"
              width={120}
              height={120}
              quality={100}
              className="rounded-xl shadow-xl border-2 border-white"
            />
            <Image
              src="/hero5.jpg"
              alt="Support Image 2"
              width={120}
              height={120}
              quality={100}
              className="rounded-xl shadow-xl border-2 border-white"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <Link href="/join-ngo">
              <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-300">
                Join Our NGO
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Section: Image Slider */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center items-center mt-3 md:mt-0"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-[90%] h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src={sliderImages[currentSlide]}
              alt="Slider"
              width={700}
              height={400}
              quality={100}
              className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSlider;
