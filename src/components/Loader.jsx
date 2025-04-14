"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image"; 

const Loader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 30000); 

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Display logo and name */}
      <div className="flex flex-col items-center">
        <Image
          src="/logo.png" // Replace with the path to your logo image
          alt="Website Logo"
          width={120}
          height={120}
          className="mb-4"
        />
        <h1 className="text-3xl text-orange-500 font-bold">The World Saver</h1>
      </div>
      <p className="mt-4 text-orange-500 text-lg font-semibold">
        Loading...
      </p>
    </motion.div>
  );
};

export default Loader;
