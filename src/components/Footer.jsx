import React from 'react'; // Ensure React is imported
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, Info, FileText, Undo2, CircleDot } from "lucide-react";

// Reusable component for social media links
const SocialLinks = () => (
  <div className="flex gap-4 mt-4">
    {['Facebook', 'Twitter', 'Instagram', 'Linkedin'].map((platform) => (
      <a key={platform} href="#" className="bg-white text-black rounded-full p-2 w-10 h-10">
        {React.createElement(require('lucide-react')[platform])}
      </a>
    ))}
  </div>
);

// Reusable component for contact and info
const ContactItem = ({ icon, text }) => (
  <li className="flex items-center gap-2">
    {icon} {text}
  </li>
);

const Footer = () => {
  const centers = ["Pune", "Mumbai", "Hyderabad", "Bangalore", "Delhi"];
  const getInvolved = ["Volunteer", "Join NGO", "Corporate", "Individual Member", "Career", "NGO-Internship"];
  const contactDetails = [
    { icon: <Phone />, text: "+91 1234567890" },
    { icon: <Mail />, text: "info@theworldsaverngo.org" },
    { icon: <MapPin />, text: "H-28, Om Complex, 1st Floor, Laxmi Nagar Pune - 411012" }
  ];

  return (
    <footer id="about" className="bg-black text-white pt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
            <h2 className="text-2xl font-bold text-skyblue-500">The World Saver Foundation</h2>
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
                <CircleDot /> {center}
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
                <CircleDot /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-2">Contact us</h3>
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
        <div className="max-w-7xl mx-auto flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Left Side */}
          <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
            <span className="font-semibold text-white">The World Saver</span>
            <span>All rights reserved.</span>
          </div>

          {/* Right Side */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 text-center">
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
