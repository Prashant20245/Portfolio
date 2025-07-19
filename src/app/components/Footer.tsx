import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors py-8 px-4 sm:px-6 lg:px-8">
      <hr className="border-t-1 border-gray-700 mb-5" />

      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo or Name */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Prashant Kumar</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Passionate Full Stack Developer
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 md:space-y-0 md:flex md:space-x-6">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-800 rounded-full"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-800 rounded-full"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-800 rounded-full"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Prashant Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
