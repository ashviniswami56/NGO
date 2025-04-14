"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Adjust path as needed

const MissionPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/team2.jpg"
          alt="Mission"
          fill
          quality={100}
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <motion.h1
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-orange-400 text-4xl md:text-6xl font-bold"
          >
            Our Mission
          </motion.h1>
        </div>
      </section>

      {/* Step-by-step Mission Info */}
      <section className="max-w-6xl mx-auto px-4 py-16 space-y-20">
        <Step
          title="How We Started"
          text="Our journey began with a group of passionate individuals who believed that change starts with compassion. We saw the growing struggles of children on the streets and felt compelled to take action."
          image="/mstart.png"
          reverse={false}
        />

        <Step
          title="Why We Exist"
          text="Millions of children are deprived of food, education, and love. Our mission is to bridge this gap by providing care, nourishment, and opportunities for a brighter future."
          image="/mwhy.jpg"
          reverse
        />

        <Step
          title="Our Goal"
          text="To ensure that every street child has access to nutritious food, a safe shelter, quality education, and the chance to lead a dignified life."
          image="/mgoal.jpg"
          reverse={false}
        />

        <Step
          title="How You Can Help"
          text="Whether through donations, volunteering, or spreading awareness you can be part of this change. Join us in creating a world where no child is left behind."
          image="/mhelp.jpg"
          reverse
        />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MissionPage;

// Step Component
const Step = ({ title, text, image, reverse }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`flex flex-col md:flex-row items-center gap-10 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="md:w-1/2">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="rounded-2xl shadow-md w-full object-cover"
        />
      </div>
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-3xl font-bold text-orange-500">{title}</h2>
        <p className="text-lg">{text}</p>
      </div>
    </motion.div>
  );
};
