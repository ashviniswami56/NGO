
'use client';

import { useState, useEffect } from 'react';

const HeroSlider = ({ backgroundImage }) => {
  const images = [
    '/hero1.jpg',
    '/hero2.jpg',
    '/hero3.jpg',
    '/hero4.jpg',
    '/hero5.jpg'
    // Add more image URLs as needed
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentBackground = backgroundImage || images[currentImageIndex];

  return (
    <div
      className="relative  mx-[15px] h-[400px] md:h-[400px] lg:h-[500px] bg-cover bg-center flex items-center transition-all duration-1000"
      style={{ backgroundImage: `url('${currentBackground}')` }}>
      
    </div>
  );
};

export default HeroSlider;

