"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer"; 

export default function About() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 px-4 py-30">
        {/* Main Content */}
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-6">About Our NGO</h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12">
            We are a passionate group committed to uplifting underprivileged communities through education, healthcare, and social support.
          </p>
        </motion.div>

        {/* Who We Are */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.img
            src="/images/team1.jpg"
            alt="Our Team"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl font-semibold text-blue-700 mb-4">Who We Are</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded in 2020, we strive to create a society with equal opportunities by providing aid, organizing awareness programs, and empowering youth.
            </p>
          </motion.div>
        </div>

        {/* Join Us */}
        <motion.div
          className="max-w-4xl mx-auto mt-16 text-center"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-orange-600 mb-4">Join Us in Making a Difference</h3>
          <p className="text-lg text-gray-600">
            Whether it is volunteering, donating, or spreading awareness — your contribution matters.
          </p>
        </motion.div>
      </div>

      <Footer />
    </>
  );
}
