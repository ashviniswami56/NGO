"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const campaigns = [
  { src: "/skills.jpeg", label: "Skills Training", bg: "from-teal-500 to-green-400" },
  { src: "/street-children.jpg", label: "Street Children", bg: "from-yellow-300 to-yellow-500" },
  { src: "/women.jpg", label: "Women Empowerment", bg: "from-pink-400 to-pink-600" },
  { src: "/tree-plantation.jpg", label: "Tree Plantation", bg: "from-green-500 to-lime-400" },
  { src: "/rural.jpg", label: "Rural Development", bg: "from-orange-400 to-yellow-300" },
  { src: "/elder.jpg", label: "Elderly Care", bg: "from-purple-400 to-indigo-500" },
  { src: "/health.jpg", label: "Health Programs", bg: "from-red-400 to-pink-500" },
  { src: "/covid.jpg", label: "COVID Relief", bg: "from-blue-400 to-sky-500" },
];

const Campaigns = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="bg-neutral-50 py-16 px-4 md:px-10">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Make the World Happier
        </h2>
        <p
          onClick={() => {
            setShowForm((prev) => !prev);
            setTimeout(() => {
              document.getElementById("join-form")?.scrollIntoView({ behavior: "smooth" });
            }, 100);
          }}
          className="text-base md:text-lg text-purple-600 mt-3 uppercase tracking-wide font-semibold cursor-pointer hover:underline"
        >
          {showForm ? "Hide Join Form" : "Join Our Campaigns"}
        </p>
      </div>

      {/* Join Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            id="join-form"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto mb-12 bg-white p-6 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Join a Campaign</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                required
              />
              <select
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                required
              >
                <option value="">Select a Campaign</option>
                {campaigns.map((item, idx) => (
                  <option key={idx} value={item.label}>
                    {item.label}
                  </option>
                ))}
              </select>
              <textarea
                placeholder="Why do you want to join?"
                rows={4}
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-black md:col-span-2"
              ></textarea>
              <button
                type="submit"
                className="md:col-span-2 bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition"
              >
                Submit
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Campaign Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {campaigns.map((item, idx) => (
          <motion.div
            key={idx}
            className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <Image
              src={item.src}
              alt={item.label}
              width={400}
              height={300}
              quality={100}
              className="w-full h-64 object-cover group-hover:brightness-75 transition-all duration-300"
            />
            <div
              className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-r ${item.bg} text-white font-bold text-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out`}
            >
              {item.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Campaigns;





