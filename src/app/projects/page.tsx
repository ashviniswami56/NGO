"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const projects = [
  {
    title: "Education for All",
    description:
      "We have empowered hundreds of underprivileged children by providing free access to quality education. Our project builds bridges between communities and schools. Together, we are nurturing the minds that will shape a brighter tomorrow.",
    image: "/peducation.jpg",
  },
  {
    title: "Clean Water Mission",
    description:
      "We have provided clean drinking water to remote villages through sustainable filtration systems. This mission has reduced diseases and improved health. Access to clean water is not just a need it is a right.",
    image: "/pwater.jpg",
  },
  {
    title: "Healthcare Camps",
    description:
      "We organized free health camps offering medical checkups and aid to underserved communities. Our initiative promoted wellness and early diagnosis. Healthier futures start with access to care.",
    image: "/phealth.jpg",
  },
  {
    title: "Women Empowerment",
    description:
      "We launched programs to equip women with skills and financial knowledge. These efforts helped many become self-reliant. Empowering women transforms communities.",
    image: "/pwomen.jpg",
  },
  {
    title: "Blood Donation",
    description:
      "We organized regular donation camps to meet emergency needs. Our volunteers have helped save hundreds of lives. Donating blood is a powerful act of kindness.",
    image: "/pblood.jpg",
  },
  {
    title: "Tree Plantation",
    description:
      "Our tree drives combat climate change and promote green spaces. Thousands of trees were planted with community support. Each tree is a step toward a sustainable future.",
    image: "/ptree.jpg",
  },
  {
    title: "Rural Development",
    description:
      "We work to improve healthcare, education, and infrastructure in villages. These efforts uplift local communities. Sustainable growth starts from the roots.",
    image: "/prural.jpg",
  },
  {
    title: "Skill Training Sessions",
    description:
      "We offer training in sewing, carpentry, and digital literacy. These skills open doors to job opportunities and self-reliance. Building futures through knowledge.",
    image: "/pskill.jpg",
  },
  {
    title: "Street Children Food Donation",
    description:
      "We provided regular food donations to street children in need, ensuring they do not go to bed hungry. Through community kitchens and volunteer efforts, we served thousands of nutritious meals. Every meal we share is a step toward dignity, hope, and a brighter future for these children.",
    image: "/pstreet.jpg",
  },
];

export default function Projects() {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 min-h-screen font-opensans">
      <Navbar />
      <div className="pt-28 pb-12 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4 font-poppins">
            Our Projects
          </h1>
          <p className="text-lg text-gray-600 font-opensans">
            Explore the impactful initiatives we have led to bring change.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-transform duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-56 md:h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  quality={100}
                  priority
                  className="object-cover w-full h-full rounded-t-3xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-2 font-poppins">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-opensans">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold text-blue-600 mb-3 font-poppins">
          Want to support our mission?
        </h2>
        <p className="text-gray-700 mb-4 font-opensans">
          Join us in our efforts to make the world a better place.
        </p>
        <a
          href="/donation"
          className="inline-block px-8 py-3 bg-orange-500 text-white font-medium text-lg rounded-full hover:bg-orange-600 transition mb-8"
        >
          Donate Now
        </a>
      </motion.div>

      <Footer />
    </div>
  );
}
