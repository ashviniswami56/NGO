'use client';

import Image from "next/image";
import { motion } from "framer-motion";

const donors = [
  { src: "/maef.png", alt: "MAEF" },
  { src: "/textiles.jpg", alt: "Ministry of Textiles" },
  { src: "/delhi.png", alt: "Delhi Govt" },
  { src: "/bhagwati.png", alt: "Bhagwati" },
  { src: "/tdi.png", alt: "TDI" },
];

const Donors = () => {
  return (
    <section id="donors" className="py-16 px-4 md:px-16 bg-black text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-2 text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Our Donors
      </motion.h2>

      <motion.div
        className="text-orange-400 text-2xl mb-10"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        🧡
      </motion.div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        viewport={{ once: true }}
      >
        {donors.map((donor, idx) => (
          <motion.div
            key={idx}
            className="p-2 bg-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.08 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={donor.src}
              alt={donor.alt}
              width={160}
              height={80}
              className="object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Donors;
