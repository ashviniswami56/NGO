"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-black shadow-md px-4 py-3 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <img src="/images/logo.png" alt="Logo" className="h-12 w-12 rounded-full shadow-lg" />
          <h1 className="text-2xl font-extrabold text-orange-600 tracking-wide">The World Saver</h1>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 font-semibold">
          <NavLinks />
          <ActionButtons />
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg px-6 py-4 space-y-4 font-semibold text-center animate-slideDown">
          <MobileLink href="/#Header" onClick={() => setIsOpen(false)}>Home</MobileLink>
          <MobileLink href="/about" onClick={() => setIsOpen(false)}>About Us</MobileLink>
          <MobileLink href="/projects" onClick={() => setIsOpen(false)}>Projects</MobileLink>
          <MobileLink href="/mission" onClick={() => setIsOpen(false)}>Mission</MobileLink>
          <MobileLink href="/get-involved" onClick={() => setIsOpen(false)}>Get Involved</MobileLink>
          <MobileLink href="/volunteer" onClick={() => setIsOpen(false)}>Volunteer</MobileLink>
          <div className="flex flex-col gap-3 mt-4">
            <MobileLink href="/donation" onClick={() => setIsOpen(false)}>Donate</MobileLink>
            <MobileLink href="/signin" onClick={() => setIsOpen(false)}>Sign In</MobileLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = () => (
  <ul className="flex space-x-6 text-sm">
    <NavItem href="/#Header">Home</NavItem>
    <NavItem href="/about">About Us</NavItem>
    <NavItem href="/projects">Projects</NavItem>
    <NavItem href="/mission">Mission</NavItem>
    <NavItem href="/get-involved">Get Involved</NavItem>
    <NavItem href="/volunteer">Volunteer</NavItem>
  </ul>
);

const NavItem = ({ href, children }) => (
  <li>
    <Link href={href} className="hover:text-orange-400">{children}</Link>
  </li>
);

const ActionButtons = () => (
  <div className="flex gap-4">
    <ActionButton href="/donation">Donate</ActionButton>
    <ActionButton href="/signin">Sign In</ActionButton>
  </div>
);

const ActionButton = ({ href, children }) => (
  <Link href={href}>
    <button className="border border-black px-4 py-2 rounded-lg text-black hover:bg-orange-400 hover:text-white">
      {children}
    </button>
  </Link>
);

const MobileLink = ({ href, children, onClick }) => (
  <Link href={href} onClick={onClick} className="block text-black hover:text-orange-500 transition">
    {children}
  </Link>
);

export default Navbar;
