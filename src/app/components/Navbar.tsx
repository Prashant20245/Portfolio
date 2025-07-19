"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu } from "lucide-react"; // `Menu` icon for mobile
import clsx from "clsx"; // optional for class management

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const pathName = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full dark:bg-black/80 bg-white/80 backdrop-blur-sm z-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo */}
          <Link href="/" className="text-xl font-bold text-primary">
            Devfolio
          </Link>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={clsx(
                    "transition-colors hover:text-blue-700 dark:hover:text-blue-400",
                    pathName === item.href
                      ? "text-blue-700 dark:text-blue-400 font-bold"
                      : ""
                  )}
                >
                  {item.label}
                </Link>
              ))}

              {mounted && (
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </Button>
              )}
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-4">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={clsx(
                  "block px-4 py-2 text-sm rounded hover:bg-gray-200 dark:hover:bg-gray-700",
                  pathName === item.href
                    ? "font-bold text-blue-700 dark:text-blue-400"
                    : ""
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Dark/Light toggle */}
            {mounted && (
              <div className="px-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-2 border border-black"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  {theme === "dark" ? (
                    <>
                      <Sun className="h-4 w-4 mr-2" /> Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="h-4 w-4 mr-2" />
                      Dark Mode
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
