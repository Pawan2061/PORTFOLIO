"use client";
import React, { useState, useEffect } from "react";
import { Menu } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <div className="relative max-w-48 flex items-center justify-center">
      <Navbardemo className="top-2" />
    </div>
  );
}

function Navbardemo({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (section: string) => {
    setActive(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "work", label: "Work" },
    { id: "me", label: "ME" },
  ];

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-xl mx-auto z-50 transition-all duration-300",
        scrolled
          ? "bg-gray-800 backdrop-blur-md shadow-md rounded-full py-2"
          : "",
        className
      )}
    >
      <Menu setActive={setActive}>
        <ul className="hidden md:flex justify-between space-x-5 px-6">
          {navItems.map((item) => (
            <li key={item.id} className="relative">
              <Button
                variant="link"
                className={cn(
                  "relative px-3 py-2 transition-all duration-300",
                  active === item.id
                    ? "text-blue-600 font-bold"
                    : "hover:text-blue-500"
                )}
                onClick={() => handleNavigation(item.id)}
              >
                {item.label}
                {active === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Button>
            </li>
          ))}
        </ul>

        <div className="md:hidden flex flex-col items-center">
          <span className="text-lg font-semibold mb-2">Pawan Pandey</span>
          <div className="flex space-x-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                className={cn(
                  "rounded-full p-2",
                  active === item.id ? "bg-blue-100 text-blue-600" : ""
                )}
                onClick={() => handleNavigation(item.id)}
              >
                {item.id.charAt(0).toUpperCase()}
              </Button>
            ))}
          </div>
        </div>
      </Menu>
    </div>
  );
}
