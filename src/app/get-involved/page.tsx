"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const involvementData = [
  {
    title: "Volunteer With Us",
    text: "Become a changemaker by dedicating your time to make a real difference. Volunteers help us on the ground and with outreach programs.",
    image: "/images/team2.jpg",
  },
  {
    title: "Join As An NGO Partner",
    text: "Collaborate with us as a partner NGO and amplify the impact in underserved communities together.",
    image: "/images/joinngo.jpg",
  },
  {
    title: "Corporate Partnerships",
    text: "Your organization can support CSR goals by partnering with us in impactful projects, employee engagement, and sponsorships.",
    image: "/images/corporate.jpg",
  },
  {
    title: "Individual Membership",
    text: "Join our family as a member and become a long-term supporter of various initiatives that uplift communities.",
    image: "/images/individual.jpg",
  },
  {
    title: "Career Opportunities",
    text: "Explore meaningful career roles where passion meets purpose. Join our dynamic and mission-driven team.",
    image: "/images/career.jpg",
  },
  {
    title: "Internships for Students",
    text: "Intern with us to gain hands-on experience in social work, NGO management, outreach, and more.",
    image: "/images/internship.jpg",
  },
];

export default function GetInvolvedPage() {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/images/getinvolved.jpg"
          alt="Get Involved"
          fill
          quality={100}
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-orange-600 text-4xl md:text-6xl font-bold"
          >
            Get Involved
          </motion.h1>
        </div>
      </section>

      {/* Involvement Sections */}
      <section className="max-w-6xl mx-auto px-4 py-16 space-y-24">
        {involvementData.map((section, index) => (
          <InvolvementStep
            key={index}
            {...section}
            reverse={index % 2 !== 0}
          />
        ))}
      </section>

      <Footer />
    </div>
  );
}

function InvolvementStep({
  title,
  text,
  image,
  reverse,
}: {
  title: string;
  text: string;
  image: string;
  reverse: boolean;
}) {
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
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="rounded-2xl shadow-lg object-cover w-full md:w-1/2"
      />
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500">
          {title}
        </h2>
        <p className="text-lg leading-relaxed">{text}</p>
      </div>
    </motion.div>
  );
}
