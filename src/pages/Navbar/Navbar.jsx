import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import vlabLogo from "../../assets/vlab.jpg";
import collegeLogo from "../../assets/collegeLogo.jpg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Handle scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [window.location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-white shadow-lg fixed w-full top-0 z-40 h-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            {/* Logos Container */}
            <div className="flex items-center space-x-2 md:space-x-4">
              {/* VLab Logo */}
              <Link to="/" className="flex items-center">
                <img
                  className="h-10 md:h-16 w-auto"
                  src={vlabLogo}
                  alt="VLab Logo"
                />
              </Link>

              {/* Separator Line */}
              <div className="h-6 md:h-8 w-px bg-gray-300"></div>

              {/* College Logo and Text */}
              <Link to="/" className="flex items-center">
                <div className="flex items-center">
                  <img
                    className="h-10 md:h-16 w-auto mr-2 md:mr-4"
                    src={collegeLogo}
                    alt="College Logo"
                  />
                  <div className="flex flex-col">
                    <h5 className="text-black font-semibold text-[10px] md:text-xs leading-[12px]">
                      Pune Vidyarthi Grih
                    </h5>
                    <h4 className="text-blue-600 text-[11px] md:text-sm font-bold leading-[13px] mt-0.5">
                      College of Engineering And Technology & G.K.Pate Wani Institute of Management
                    </h4>
                    <h6 className="hidden md:block text-black text-[12px] leading-[11px] mt-2">
                      Approved by AICTE, DTE(Code:6274) | Affiliated to SPPU,
                      Pune | NAAC Third Cycle 'A' Grade
                    </h6>
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/team">Our Team</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="h-full flex flex-col">
          {/* Drawer Header */}
          <div className="px-4 py-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
              <button
                onClick={toggleMenu}
                className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto">
            <nav className="px-4 py-4">
              <MobileNavLink to="/" onClick={toggleMenu}>
                Home
              </MobileNavLink>
              <MobileNavLink to="/about" onClick={toggleMenu}>
                About Us
              </MobileNavLink>
              <MobileNavLink to="/team" onClick={toggleMenu}>
                Our Team
              </MobileNavLink>
              <MobileNavLink to="/contact" onClick={toggleMenu}>
                Contact Us
              </MobileNavLink>
            </nav>
          </div>

          {/* Drawer Footer */}
          <div className="border-t border-gray-200 p-4">
            <p className="text-sm text-gray-500 text-center">
              © 2025 VLab Digitizer Forum
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

// Desktop Navigation Link Component
const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
  >
    {children}
  </Link>
);

// Mobile Navigation Link Component
const MobileNavLink = ({ to, onClick, children }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
  >
    {children}
  </Link>
);

export default Navbar;
