import { Mail, Phone } from "lucide-react";

const Header = () => (
  <header className="bg-gray-100 text-white px-6 py-2 shadow-md h-12">
    <div className="max-w-7xl mx-auto flex justify-end items-center h-full">
      {/* Contact Info */}
      <div className="text-sm md:text-base flex items-center gap-6 text-gray-700">
        <div className="flex items-center gap-1">
          <Mail className="w-4 h-4 text-black" />
          <span className="text-black">info@theworldsaverngo.org</span>
        </div>
        <div className="flex items-center gap-1">
          <Phone className="w-4 h-4 text-black" />
          <span className="text-black">+91 1234567890</span>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
