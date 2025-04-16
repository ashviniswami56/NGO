"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Loader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3000); // Set shorter timeout for faster loader disappear

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
      <Image src="/images/logo.jpg" alt="Logo" width={120} height={120} className="mb-4" />
      <h1 className="text-3xl text-orange-500 font-bold">The World Saver</h1>
      <p className="mt-4 text-orange-500 text-lg font-semibold">Loading...</p>
    </motion.div>
  );
};

export default Loader;
