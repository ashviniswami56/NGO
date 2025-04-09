
import { Mail, Phone } from "lucide-react";

const Header = () => (
  <header className="bg-gradient-to-r bg-white text-white px-6 py-4 shadow-md">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
      {/* Logo and Title */}
      <div className="flex items-center gap-3 mb-3 md:mb-0">
        <img src="/logo.png" alt="Nitya Logo" className="h-12 w-12 rounded-full shadow-lg" />
        <h1 className="text-3xl font-extrabold text-orange-500 tracking-wide">
          The World Saver
        </h1>
      </div>

      {/* Contact Info */}
      <div className="text-sm md:text-base flex flex-col md:flex-row items-center gap-2 md:gap-6 text-gray-300">
        <div className="flex items-center gap-1">
          <Mail className="w-4 h-4 text-black" />
          <span>info@theworldsaverngo.org</span>
        </div>
        <div className="flex items-center gap-1">
          <Phone className="w-4 h-4 text-black" />
          <span>+91 1234567890</span>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
