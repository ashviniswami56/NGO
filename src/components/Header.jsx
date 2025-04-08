const Header = () => (
  <div className="bg-gray-800 text-white px-4 py-2">
    <div className="flex flex-col md:flex-row justify-between items-center">
      {/* Logo and Title */}
      <div className="flex items-center mb-2 md:mb-0">
        <img src="/logo.png" alt="Nitya Logo" className="h-12 mr-2" />
        <h1 className="text-2xl font-bold text-skyblue-500">The World Saver</h1>
      </div>

      {/* Contact Info */}
      <div className="text-sm text-center md:text-right">
        <p>📧 info@theworldsaverngo.org 📞 1234567890</p>
      </div>
    </div>
  </div>
);

export default Header;
