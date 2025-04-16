"use client";

import React from 'react';
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  Info,
  FileText,
  Undo2,
  CircleDot,
} from "lucide-react";

// Reusable social media links
const SocialLinks = () => (
  <div className="flex gap-4 mt-4">
    {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
      <a key={i} href="#" className="bg-white text-black rounded-full p-2 w-10 h-10 flex items-center justify-center hover:bg-orange-400 hover:text-white transition">
        <Icon size={20} />
      </a>
    ))}
  </div>
);

// Contact item
const ContactItem = ({ icon, text }) => (
  <li className="flex items-start gap-2">
    {icon} <span>{text}</span>
  </li>
);

const Footer = () => {
  const centers = ["Pune", "Mumbai", "Hyderabad", "Bangalore", "Delhi"];
  const getInvolved = ["Volunteer", "Join NGO", "Corporate", "Individual Member", "Career", "NGO-Internship"];
  const contactDetails = [
    { icon: <Phone size={16} />, text: "+91 1234567890" },
    { icon: <Mail size={16} />, text: "info@theworldsaverngo.org" },
    { icon: <MapPin size={16} />, text: "H-28, Om Complex, 1st Floor, Laxmi Nagar, Pune - 411012" }
  ];

  return (
    <footer id="about" className="bg-black text-white pt-10">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image src="/images/logo.jpg" alt="Logo" width={50} height={50} />
            <h2 className="text-xl font-bold text-orange-600">The World Saver Foundation</h2>
          </div>
          <p className="text-sm text-gray-300 mb-4">
            The World Saver Foundation was established on the 25th of April 2020 under the Societies Registration Act 1960. It is a National-level society having 80G & 12A.
          </p>
          <SocialLinks />
        </div>

        {/* Centers */}
        <div>
          <h3 className="text-lg font-bold mb-2">Centers</h3>
          <div className="mb-2 text-orange-500">● ● ● ● ● ●</div>
          <ul className="space-y-1 text-sm">
            {centers.map((center) => (
              <li key={center} className="flex items-center gap-2">
                <CircleDot size={14} /> {center}
              </li>
            ))}
          </ul>
        </div>

        {/* Get Involved */}
        <div>
          <h3 className="text-lg font-bold mb-2">Get Involved</h3>
          <div className="mb-2 text-orange-500">● ● ● ● ● ●</div>
          <ul className="space-y-1 text-sm">
            {getInvolved.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CircleDot size={14} /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-2">Contact Us</h3>
          <div className="mb-2 text-orange-500">● ● ● ● ● ●</div>
          <ul className="space-y-2 text-sm">
            {contactDetails.map(({ icon, text }) => (
              <ContactItem key={text} icon={icon} text={text} />
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 text-gray-300 text-sm mt-10 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Left Side */}
          <div className="text-center sm:text-left flex flex-col sm:flex-row items-center gap-1">
            <span className="font-semibold text-white">The World Saver</span>
            <span>© {new Date().getFullYear()} All rights reserved.</span>
          </div>

          {/* Right Side */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-1">
              <Info className="w-4 h-4" />
              <span>Privacy Policy</span>
            </div>
            <div className="flex items-center gap-1">
              <FileText className="w-4 h-4" />
              <span>Terms & Conditions</span>
            </div>
            <div className="flex items-center gap-1">
              <Undo2 className="w-4 h-4" />
              <span>Refund Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
