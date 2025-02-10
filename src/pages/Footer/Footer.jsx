import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone, MdFax } from "react-icons/md";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-6">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold border-b border-gray-700 pb-2">
              About TPO
            </h3>
            <p className="text-gray-300 leading-relaxed">
              The Training and Placement Office (TPO) is dedicated to bridging
              the gap between students and industry. Our mission is to
              facilitate placements and provide comprehensive training to
              prepare students for their careers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold border-b border-gray-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Feedback", path: "/feedback" },
                { name: "FAQ", path: "/faq" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold border-b border-gray-700 pb-2">
              Contact Info
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-3">
                <MdLocationOn className="text-xl mt-1 flex-shrink-0 text-blue-400" />
                <span className="text-sm">
                  PVG's College of Engineering and Technology & G. K. Pate
                  (Wani) Institute of Management
                  <br />
                  44, Vidya Nagari, Shivdarshan, Parvati,
                  <br />
                  Pune – 411009 Maharashtra – INDIA
                </span>
              </li>

              <li className="flex items-center gap-3">
                <MdPhone className="text-xl flex-shrink-0 text-blue-400" />
                <span className="text-sm">+91 020 24228258 / 65 / 79</span>
              </li>

              <li className="flex items-center gap-3">
                <MdFax className="text-xl flex-shrink-0 text-blue-400" />
                <span className="text-sm">+91 020 24226858</span>
              </li>

              <li className="flex gap-3">
                <MdEmail className="text-xl mt-1 flex-shrink-0 text-blue-400" />
                <div className="text-sm">
                  <a
                    href="mailto:enquiry@pvgcoet.ac.in"
                    className="hover:text-white transition-colors"
                  >
                    enquiry@pvgcoet.ac.in
                  </a>
                  <br />
                  <a
                    href="mailto:info@pvgcoet.ac.in"
                    className="hover:text-white transition-colors"
                  >
                    info@pvgcoet.ac.in
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold border-b border-gray-700 pb-2">
              Connect With Us
            </h3>
            <div className="flex flex-wrap gap-4">
              {[
                { Icon: FaFacebook, url: "https://facebook.com/vlab" },
                { Icon: FaTwitter, url: "https://twitter.com/vlab" },
                { Icon: FaLinkedin, url: "https://linkedin.com/company/vlab" },
                { Icon: FaYoutube, url: "https://youtube.com/vlab" },
                { Icon: FaInstagram, url: "https://instagram.com/vlab" },
              ].map(({ Icon, url }) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 p-3 rounded-full hover:bg-blue-500 transition-colors duration-300"
                >
                  <Icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} PVG's COET & GKPIM. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="/privacy"
                className="text-gray-300 hover:text-white text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-300 hover:text-white text-sm"
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
