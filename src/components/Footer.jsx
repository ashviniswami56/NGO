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
    LayoutDashboard,  // ← replacing Sitemap
    CircleDot
  } from "lucide-react";
  

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image src="/logo.png" alt="Nitya Logo" width={50} height={50} />
            <h2 className="text-2xl font-bold text-skyblue-500">The World Saver Foundation</h2>
          </div>
          <p className="text-sm text-gray-300 mb-4">
            The World Saver Foundation was established on dated 25th of April 2020 Under Societies Registration Act 1960. The World Saver Foundation is a National level society having 80G & 12A. It was founded with the passion of “Devotion to the Nation“ and the vision of a “prosperous Nation”.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#"><Facebook className="bg-white text-black rounded-full p-2 w-10 h-10" /></a>
            <a href="#"><Twitter className="bg-white text-black rounded-full p-2 w-10 h-10" /></a>
            <a href="#"><Instagram className="bg-white text-black rounded-full p-2 w-10 h-10" /></a>
            <a href="#"><Linkedin className="bg-white text-black rounded-full p-2 w-10 h-10" /></a>
          </div>
        </div>

        {/* Centers */}
        <div>
          <h3 className="text-lg font-bold mb-2">Centers</h3>
          <div className="mb-2 text-orange-500">● ● ● ● ● ●</div>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center gap-2"><CircleDot /> Bihar</li>
            <li className="flex items-center gap-2"><CircleDot /> Delhi</li>
            <li className="flex items-center gap-2"><CircleDot /> Jharkhand</li>
            <li className="flex items-center gap-2"><CircleDot /> Maharashtra</li>
            <li className="flex items-center gap-2"><CircleDot /> Uttar Pradesh</li>
          </ul>
        </div>

        {/* Get Involved */}
        <div>
          <h3 className="text-lg font-bold mb-2">Get Involved</h3>
          <div className="mb-2 text-orange-500">● ● ● ● ● ●</div>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center gap-2"><CircleDot /> Volunteer</li>
            <li className="flex items-center gap-2"><CircleDot /> Join NGO</li>
            <li className="flex items-center gap-2"><CircleDot /> Corporate</li>
            <li className="flex items-center gap-2"><CircleDot /> Individual Member</li>
            <li className="flex items-center gap-2"><CircleDot /> Career</li>
            <li className="flex items-center gap-2"><CircleDot /> NGO-Internship</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-2">Follow us on</h3>
          <div className="mb-2 text-orange-500">● ● ● ● ● ●</div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Phone /> +91 1234567890</li>
            <li className="flex items-center gap-2"><Mail /> info@theworldsaverngo.org</li>
            <li className="flex items-center gap-2"><MapPin /> H-28, Om Complex, 1st Floor, Laxmi Nagar Pune - 411012</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 text-gray-300 text-sm mt-10 py-4 px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Info /> © 2023 <span className="font-semibold text-white">The World Saver</span>, All rights reserved.
        </div>
        <div className="flex flex-wrap gap-6 mt-2 md:mt-0">
          <div className="flex items-center gap-1"><Info /> Privacy Policy</div>
          <div className="flex items-center gap-1"><FileText /> Terms & Condition</div>
          <div className="flex items-center gap-1"><Undo2 /> Refund Policy</div>
          <div className="flex items-center gap-1"><LayoutDashboard /> Sitemap
</div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
